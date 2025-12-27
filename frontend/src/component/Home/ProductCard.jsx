import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { dispalyMoney, generateDiscountedPrice } from "../DisplayMoney/DisplayMoney";
import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    height: "100%",
    margin: theme.spacing(2),
    backgroundColor: "white",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
      transform: "translateY(-8px)",
    },
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    height: "220px",
  },
  media: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  badge: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
  },
  discountBadge: {
    backgroundColor: "#f44336",
    color: "#fff",
    fontWeight: 700,
  },
  favoriteBtn: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "8px",
    minWidth: "auto",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  content: {
    padding: "16px",
  },
  title: {
    fontWeight: 700,
    fontSize: "0.95rem",
    marginBottom: "8px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    color: "#1a1a1a",
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "8px",
  },
  reviewCount: {
    fontSize: "0.75rem",
    color: "#666",
  },
  description: {
    fontSize: "0.8rem",
    fontWeight: 500,
    marginTop: "8px",
    marginBottom: "8px",
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    color: "#666",
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
  },
  oldPrice: {
    textDecoration: "line-through",
    fontWeight: 600,
    color: "#999",
    fontSize: "0.9rem",
  },
  finalPrice: {
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "#d4af37",
  },
  button: {
    backgroundColor: "#1a1a1a",
    color: "white",
    borderRadius: "8px",
    fontWeight: 600,
    width: "100%",
    height: 45,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#d4af37",
      color: "#1a1a1a",
    },
  },
  stockStatus: {
    fontSize: "0.85rem",
    fontWeight: 600,
    marginBottom: "8px",
  },
  inStock: {
    color: "#4caf50",
  },
  outOfStock: {
    color: "#f44336",
  },
  buttonContainer: {
    padding: "12px 16px",
    borderTop: "1px solid #f0f0f0",
  },
}));

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = React.useState(false);

  let discountPrice = generateDiscountedPrice(product.price);
  discountPrice = dispalyMoney(discountPrice);
  const oldPrice = dispalyMoney(product.price);

  const nameTruncated = product.name.split(" ").slice(0, 3).join(" ") + "...";
  const truncated = product.description.split(" ").slice(0, 5).join(" ") + "...";

  const discount = Math.round(
    ((product.price - parseFloat(discountPrice)) / product.price) * 100
  );

  const addTocartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Link
        className="productCard"
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card className={classes.root}>
          <div className={classes.imageContainer}>
            <CardMedia className={classes.media} image={product.images[0].url} />

            {/* Favorite Button */}
            <Button
              size="small"
              className={classes.favoriteBtn}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <FavoriteIcon style={{ color: "#f44336", fontSize: "20px" }} />
              ) : (
                <FavoriteBorderIcon style={{ fontSize: "20px" }} />
              )}
            </Button>

            {/* Discount Badge */}
            {discount > 0 && (
              <Chip
                label={`-${discount}%`}
                className={`${classes.badge} ${classes.discountBadge}`}
                size="small"
              />
            )}
          </div>

          <CardContent className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              {nameTruncated}
            </Typography>

            <Box className={classes.ratingBox}>
              <Rating
                name="rating"
                value={product.ratings}
                precision={0.1}
                readOnly
                size="small"
                style={{ color: "#d4af37" }}
              />
              <Typography variant="body2" className={classes.reviewCount}>
                ({product.numOfReviews})
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.description}
            >
              {truncated}
            </Typography>

            <Box className={classes.priceBox}>
              <Typography variant="body1" className={classes.oldPrice}>
                {oldPrice}
              </Typography>
              <Typography variant="body1" className={classes.finalPrice}>
                {discountPrice}
              </Typography>
            </Box>

            <Typography
              className={`${classes.stockStatus} ${
                product.Stock > 0 ? classes.inStock : classes.outOfStock
              }`}
            >
              {product.Stock > 0 ? "In Stock" : "Out of Stock"}
            </Typography>
          </CardContent>

          <Box className={classes.buttonContainer}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                addTocartHandler(product._id, 1);
              }}
              startIcon={<ShoppingCartIcon />}
              disabled={product.Stock <= 0}
            >
              Add to Cart
            </Button>
          </Box>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;