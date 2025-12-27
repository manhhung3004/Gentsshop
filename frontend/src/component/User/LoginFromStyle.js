import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    padding: theme.spacing(2),
  },
  card: {
    boxShadow: "0 20px 60px rgba(212, 175, 55, 0.1)",
    borderRadius: "15px",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    backgroundColor: "#ffffff",
    maxWidth: "450px",
    width: "100%",
  },
  form: {
    width: "100%",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },

  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
    color: "#1a1a1a",
    fontWeight: "700",
    fontSize: "28px",
    letterSpacing: "-0.5px",
  },

  subHeading: {
    textAlign: "center",
    color: "#666666",
    marginBottom: theme.spacing(3),
    fontWeight: "400",
  },

  emailInput: {
    position: "relative",
    "& > label": {
      left: ".2rem",
    },
    padding: "4px 0px",
    fontSize: "1rem",
    width: "100%",
    height: ".7rem",
  },
  passwordInput: {
    position: "relative",
    "& > label": {
      left: ".2rem",
    },
    padding: "4px 0px",
    width: "100%",
    height: ".7rem",
  },

  strengthIndicator: {
    marginTop: theme.spacing(1),
  },

  showPasswordButton: {
    position: "absolute",
    top: "50%",
    color: "rgb(0 0 0 / 65%)",
    fontSize: "18px",
    right: theme.spacing(1),
    transform: "translateY(-50%)",
    border: "none",
    padding: 0,
    minWidth: "auto",
    "&:hover": {
      color: "#d4af37",
      background: "none",
    },
  },
  rememberMeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "& .MuiIconButton-label": {
      color: "black",
    },
  },
  forgotPasswordLink: {
    color: "#666666",
    textDecoration: "none",
    fontWeight: "500",
    transition: "all 0.3s ease",
    "&:hover": {
      textDecoration: "underline",
      color: "#d4af37",
    },
  },
  termsAndConditionsText: {
    fontFamily: "Roboto",
    color: "#999999",
    textAlign: "center",
    lineHeight: "20px",
    paddingLeft: "4px",
    marginTop: theme.spacing(2),
    fontSize: "12px",
  },

  buttonContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  loginButton: {
    color: "#fff",
    backgroundColor: "#1a1a1a",
    border: "2px solid #1a1a1a",
    margin: `${theme.spacing(1)}px 0`,
    fontWeight: "600",
    fontSize: "16px",
    padding: "12px 0",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:disabled": {
      backgroundColor: "#cccccc",
      color: "#666666",
      borderColor: "#cccccc",
    },
    "&:hover:not(:disabled)": {
      backgroundColor: "#d4af37",
      borderColor: "#d4af37",
      color: "#1a1a1a",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(212, 175, 55, 0.3)",
    },
    textTransform: "none",
  },
  privacyText: {
    marginLeft: "4px",
    textDecoration: "underline",
    color: "#666666",
    fontSize: "12px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#d4af37",
    },
  },

  signupBox: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTop: "1px solid #f0f0f0",
  },

  createAccount: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#d4af37",
    paddingLeft: "6px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#1a1a1a",
      textDecoration: "underline",
    },
  },
  // input text Filed
  textField: {
    marginBottom: theme.spacing(1),
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#f8f8f8",
      transition: "all 0.3s ease",
      "&:hover fieldset": {
        borderColor: "#d4af37",
        backgroundColor: "#ffffff",
      },
      "& .MuiOutlinedInput-input": {
        padding: "12px 14px",
        fontSize: "14px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#d4af37",
        borderWidth: "2px",
        backgroundColor: "#ffffff",
      },
      "&.Mui-focused .MuiOutlinedInput-input": {
        color: "#1a1a1a",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#999999",
      fontSize: "14px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#d4af37",
      fontWeight: "600",
    },
    "& .MuiFormHelperText-root": {
      fontSize: "12px",
      marginTop: "4px",
      color: "#d4af37",
    },
  },

  // signUp

  avatar: {
    margin: "0 auto 16px",
    backgroundColor: "#1a1a1a",
    width: "56px",
    height: "56px",
    boxShadow: "0 4px 12px rgba(26, 26, 26, 0.2)",
  },
  gridcheckbox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "3rem",
  },
  checkbox: {
    "& .MuiTypography-body1": {
      fontSize: "14px",
    },
    marginTop: theme.spacing(1),
    "& .MuiIconButton-label": {
      color: "black",
    },
  },

  // image uploader
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "3.5rem",
  },
  avatar2: {
    marginLeft: "6px",
    backgroundColor: "black",
    "&.MuiAvatar-colorDefault": {
      color: "#fff",
      backgroundColor: "black",
    },
    "&:hover": {
      backgroundColor: "#ed1c24",
    },
  },
  input: {
    display: "none",
  },

  // Update and create product styles ====================>>

  updateProduct: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
    overflow: "hidden",
    margin: "-1.1rem 0 0 0",
    padding: 0,
  },
  firstBox1: {
    width: "20%",
    margin: "0rem",
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    display: "block",
    [theme.breakpoints.down("999")]: {
      display: "none",
    },
  },

  toggleBox1: {
    width: "16rem",
    margin: "0rem",
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    display: "block",
    zIndex: "100",
    position: "absolute",
    top: "58px",
    left: "17px",
  },
  secondBox1: {
    width: "75%",
    backgroundColor: "#f1f1f1",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    margin: "-0.5rem 0 0 0",
    gap: "10px",
    justifyContent: "center",
    [theme.breakpoints.down("999")]: {
      width: "100%",
    },
  },
  navBar1: {
    margin: "0rem",
  },

  form2: {
    marginTop: "-6rem",
  },
  uploadAvatarButton: {
    color: "white",
    width: "fit-content",
    backgroundColor: "#414141",
    height: "2.5rem",
    "&:hover": {
      backgroundColor: "#ed1c24",
    },
  },

  uploadAvatarText: {
    fontSize: "14px",
    backgroundColor: "inherit",
    fontWeight: 500,
    color: "#fff",

    padding: "0 1rem",
  },

  imgIcon: {
    width: "auto",
    marginLeft: "1rem",
    alignSelf: "center",
    "& svg": {
      color: "#414141",
      fontSize: "2.5rem !important", 
      boxShadow: `0px 4px 10px rgba(0, 0, 0, 0.3)`,
    },
  },

  descriptionInput: {
    marginTop: theme.spacing(5.5),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
        color: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
        color: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
        color: "black",
        outline: "none",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "13px 8px",
    },
    "& .MuiInputLabel-root": {
      color: "black",
      fontSize: "14px",
      textAlign: "center",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
      fontSize: "14px",
      textAlign: "center",
    },
  },
  descriptionIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  selectOption: {
    marginTop: theme.spacing(5.5),
    position: "relative",
    width: "100%",
  },

  imageArea: {
    display: "flex",
    gap: "18px",
    width: "90%",
    overflowX: "scroll",
    scrollbarWidth: "10px",
    margin: "2rem 0",
    "&::-webkit-scrollbar": {
      width: "10px",
      height: "5px",
    },
    padding: "3px 16px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.shape.borderRadius,
  },
  image: {
    width: "4.5rem ",
    height: "4rem ",
    objectFit: "cover",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.shape.borderRadius,
  },
  labelText: {
    color: "#414141",
    fontSize: "14px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "14px",
    pointerEvents: "none",
    opacity: (props) => (props.category ? 0 : 1),
    transition: "opacity 0.3s ease",
  },
  formControl: {
    width: "100%",
  },
  select: {
    "& .MuiOutlinedInput-input": {
      padding: "13px 8px",
    },
    "& .MuiInputLabel-outlined": {
      pointerEvents: "none",
      fontSize: "14px",
      textAlign: "center",
      color: "#414141",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#ed1c24",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
        outlineColor: "black",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
      },
    },
    "& .MuiSelect-root": {
      padding: "10px",
      color: "black",
    },
    "& .MuiSelect-icon": {
      marginRight: "-4px",
      color: "gray",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "#ed1c24",
      color: "white",
    },
  },

  menu: {
    marginTop: theme.spacing(1),
    "& .MuiMenuItem-root": {
      color: "black",
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "#ed1c24",
      color: "white",
    },
  },
}));

export default useStyles;