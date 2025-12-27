import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Chip,
  Container,
  Divider,
} from "@material-ui/core";
import { ExitToApp as LogoutIcon, Edit as EditIcon, VpnKey as PasswordIcon, ShoppingCart as ShoppingBagIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { motion } from "framer-motion";
import MetaData from "../layouts/MataData/MataData";

const ProfilePage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useSelector((state) => state.userData);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully");
    history.push("/login");
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const createdAt = (user) => {
    const createdDate = new Date(user.createdAt);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };

    const formatter = new Intl.DateTimeFormat("en-IN", options);
    const formattedDate = formatter.format(createdDate);
    return formattedDate;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <MetaData title="Profile" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="rootProfile"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="header-root">
          <Typography variant="h4" component="h1" className="headingProfile">
            Welcome back, {user?.name}!
          </Typography>
          <Typography variant="body2" className="greeting">
            Manage your account and shopping preferences
          </Typography>
        </motion.div>

        <Container maxWidth="lg" className="profileContentWrapper">
          <Grid container spacing={3} style={{ marginTop: "1rem" }}>
            {/* Left Sidebar - Profile Overview */}
            <Grid item xs={12} sm={12} md={4}>
              <motion.div variants={itemVariants}>
                <Card className="profileCard">
                  <CardContent className="profileCardContent">
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                      <Avatar
                        alt={user?.name}
                        src={user?.avatar?.url}
                        className="profileAvatar"
                      />
                      <Box textAlign="center">
                        <Typography variant="h6" className="profileName">
                          {user?.name}
                        </Typography>
                        <Typography variant="body2" className="profileEmail">
                          {user?.email}
                        </Typography>
                      </Box>
                      <Chip
                        label={`Member since ${new Date(user?.createdAt).getFullYear()}`}
                        className="memberChip"
                        size="small"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Orders Card */}
              <motion.div variants={itemVariants} style={{ marginTop: "1.5rem" }}>
                <Card className="profileCard">
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={1} marginBottom={1}>
                      <ShoppingBagIcon style={{ color: "#d4af37" }} />
                      <Typography variant="h6" className="cardTitle">
                        My Orders
                      </Typography>
                    </Box>
                    <Link to="/orders" style={{ textDecoration: "none" }}>
                      <Button variant="contained" className="actionButton" fullWidth>
                        View Orders
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Right Content - Account Details */}
            <Grid item xs={12} sm={12} md={8}>
              {/* Personal Information */}
              <motion.div variants={itemVariants}>
                <Card className="profileCard">
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                      <Typography variant="h6" className="sectionTitle">
                        Personal Information
                      </Typography>
                      <Link to="/profile/update" style={{ textDecoration: "none" }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<EditIcon />}
                          className="editButton"
                        >
                          Edit
                        </Button>
                      </Link>
                    </Box>
                    <Divider style={{ marginBottom: "1.5rem" }} />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography className="detailLabel">Full Name</Typography>
                        <Typography className="detailValue">{user?.name}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography className="detailLabel">Email Address</Typography>
                        <Typography className="detailValue">{user?.email}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography className="detailLabel">Member Since</Typography>
                        <Typography className="detailValue">{createdAt(user)}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography className="detailLabel">Account Status</Typography>
                        <Chip label="Active" color="primary" size="small" variant="outlined" />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Login Details & Password */}
              <motion.div variants={itemVariants} style={{ marginTop: "1.5rem" }}>
                <Card className="profileCard">
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <PasswordIcon style={{ color: "#d4af37" }} />
                        <Typography variant="h6" className="sectionTitle">
                          Security
                        </Typography>
                      </Box>
                      <Link to="/password/update" style={{ textDecoration: "none" }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<PasswordIcon />}
                          className="editButton"
                        >
                          Change
                        </Button>
                      </Link>
                    </Box>
                    <Divider style={{ marginBottom: "1.5rem" }} />
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography className="detailLabel">Password</Typography>
                        <Typography className="detailValue" style={{ letterSpacing: "2px" }}>
                          ••••••••••••
                        </Typography>
                        <Typography variant="caption" style={{ color: "#999" }}>
                          Last changed recently
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Logout Section */}
              <motion.div variants={itemVariants} style={{ marginTop: "1.5rem" }}>
                <Card className="profileCard dangerZone">
                  <CardContent>
                    <Typography variant="h6" className="sectionTitle dangerTitle">
                      Logout
                    </Typography>
                    <Divider style={{ marginBottom: "1.5rem", marginTop: "1rem" }} />
                    <Typography variant="body2" style={{ color: "#666", marginBottom: "1rem" }}>
                      Sign out from all devices. You'll need to sign in again to access your account.
                    </Typography>
                    <Button
                      variant="contained"
                      className="logoutButton"
                      startIcon={<LogoutIcon />}
                      onClick={logoutHandler}
                      fullWidth
                    >
                      Logout from All Devices
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </motion.div>
    </>
  );
};

export default ProfilePage;