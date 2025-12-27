import React, { useState , useEffect } from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Grid,
  Avatar,
  Container,
  Card,
  Box,
} from "@material-ui/core";
import useStyles from "./LoginFromStyle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { login, clearErrors } from "../../actions/userAction";
import CricketBallLoader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData";
import { motion } from "framer-motion";

export default function Login() {

    const history = useHistory();
    const location = useLocation();

    const dispatch = useDispatch();
    const alert = useAlert();

    const { isAuthenticated, loading, error } = useSelector(
      (state) => state.userData
    );

  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(
      newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  

  const isSignInDisabled = !(email && password && isValidEmail);

  
    const redirect = location.search
      ? location.search.split("=")[1]
      : "/account";
   useEffect(() => {
     if (error) {
       alert.error(error);
       dispatch(clearErrors());
     }

     if (isAuthenticated) {
       history.push(redirect);
     }
   }, [dispatch, isAuthenticated, loading, error, alert , history , redirect]);

     function handleLoginSubmit(e) {
       e.preventDefault();
       dispatch(login(email, password));
     }


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      <MetaData title={"Login"} />
      {loading ? (
        <CricketBallLoader />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={classes.formContainer}
        >
          <Card className={classes.card}>
            <motion.form
              variants={formVariants}
              className={classes.form}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Avatar className={classes.avatar}>
                  <LockOpenIcon />
                </Avatar>
              </motion.div>

              <Typography variant="h4" component="h1" className={classes.heading}>
                Welcome Back
              </Typography>

              <Typography variant="body2" className={classes.subHeading}>
                Sign in to your account to continue shopping
              </Typography>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  type="email"
                  className={`${classes.emailInput} ${classes.textField}`}
                  value={email}
                  onChange={handleEmailChange}
                  error={!isValidEmail && email !== ""}
                  helperText={
                    !isValidEmail && email !== ""
                      ? "Please enter a valid email address."
                      : ""
                  }
                  InputProps={{
                    startAdornment: (
                      <Box mr={1}>
                        <EmailIcon style={{ color: "#d4af37" }} />
                      </Box>
                    ),
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TextField
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  className={`${classes.passwordInput} ${classes.textField}`}
                  InputProps={{
                    endAdornment: (
                      <Button
                        variant="text"
                        className={classes.showPasswordButton}
                        onClick={handleShowPasswordClick}
                        size="small"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    ),
                  }}
                  value={password}
                  onChange={handlePasswordChange}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Grid container className={classes.rememberMeContainer}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "right" }}>
                    <Link
                      to="/password/forgot"
                      className={classes.forgotPasswordLink}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={classes.buttonContainer}
              >
                <Button
                  variant="contained"
                  className={classes.loginButton}
                  fullWidth
                  disabled={isSignInDisabled}
                  onClick={handleLoginSubmit}
                  size="large"
                >
                  Sign In
                </Button>
              </motion.div>

              <Typography
                variant="body2"
                className={classes.termsAndConditionsText}
              >
                By signing in, you agree to our{" "}
                <Link to="/policy/privacy" className={classes.privacyText}>
                  Privacy Policy
                </Link>
              </Typography>

              <Box className={classes.signupBox}>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <Link to="/signup" className={classes.createAccount}>
                    Create Account
                  </Link>
                </Typography>
              </Box>
            </motion.form>
          </Card>
        </motion.div>
      )}
    </>
  );
}