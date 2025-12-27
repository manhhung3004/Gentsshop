// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://192.168.1.56:10000/";

// Product Categories
export const PRODUCT_CATEGORIES = [
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Pants",
  "Suits",
  "Jackets",
  "Sweaters",
  "Activewear",
  "Shorts",
  "Accessories",
  "Footwear",
  "Watches",
  "Hats",
  "Sunglasses",
  "Belts",
];

// Product Related
export const PRODUCT_PRICE_MIN = 0;
export const PRODUCT_PRICE_MAX = 1000000;
export const PRODUCT_STOCK_MIN = 0;
export const PRODUCT_REVIEW_MIN_RATING = 1;
export const PRODUCT_REVIEW_MAX_RATING = 5;

// User Related
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 50;
export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 25;
export const USER_NAME_MIN_LENGTH = 2;

// Pagination
export const ITEMS_PER_PAGE = 10;
export const ADMIN_ITEMS_PER_PAGE = 25;

// Toast/Alert Duration (in ms)
export const TOAST_DURATION = 3000;
export const ERROR_TOAST_DURATION = 5000;

// Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
};

// Order Status
export const ORDER_STATUS = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: "/api/v1/login",
  SIGNUP: "/api/v1/register",
  LOGOUT: "/api/v1/logout",
  LOAD_USER: "/api/v1/me",
  UPDATE_PROFILE: "/api/v1/me/update",
  UPDATE_PASSWORD: "/api/v1/password/update",
  FORGOT_PASSWORD: "/api/v1/password/forgot",
  RESET_PASSWORD: "/api/v1/password/reset",

  // Products
  GET_ALL_PRODUCTS: "/api/v1/products",
  GET_PRODUCT_DETAILS: "/api/v1/product",
  CREATE_PRODUCT: "/api/v1/admin/product/new",
  UPDATE_PRODUCT: "/api/v1/admin/product",
  DELETE_PRODUCT: "/api/v1/admin/product",
  GET_ADMIN_PRODUCTS: "/api/v1/admin/products",

  // Reviews
  GET_REVIEWS: "/api/v1/reviews",
  CREATE_REVIEW: "/api/v1/review",
  DELETE_REVIEW: "/api/v1/review",

  // Orders
  GET_ALL_ORDERS: "/api/v1/admin/orders",
  GET_ORDER_DETAILS: "/api/v1/order",
  GET_MY_ORDERS: "/api/v1/orders/me",
  CREATE_ORDER: "/api/v1/order/new",
  UPDATE_ORDER: "/api/v1/admin/order",
  DELETE_ORDER: "/api/v1/admin/order",

  // Users
  GET_ALL_USERS: "/api/v1/admin/users",
  GET_USER_DETAILS: "/api/v1/admin/user",
  UPDATE_USER: "/api/v1/admin/user",
  DELETE_USER: "/api/v1/admin/user",

  // Payment
  STRIPE_API_KEY: "/api/v1/stripeapikey",
  PROCESS_PAYMENT: "/api/v1/payment/process",
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection and try again.",
  SERVER_ERROR: "Server error. Please try again later.",
  INVALID_EMAIL: "Please enter a valid email address.",
  INVALID_PASSWORD: "Password must be at least 6 characters long.",
  PASSWORDS_MISMATCH: "Passwords do not match.",
  REQUIRED_FIELD: "This field is required.",
  PRODUCT_NOT_FOUND: "Product not found.",
  ORDER_NOT_FOUND: "Order not found.",
  USER_NOT_FOUND: "User not found.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Logged in successfully!",
  LOGOUT_SUCCESS: "Logged out successfully!",
  SIGNUP_SUCCESS: "Account created successfully!",
  PRODUCT_CREATED: "Product created successfully!",
  PRODUCT_UPDATED: "Product updated successfully!",
  PRODUCT_DELETED: "Product deleted successfully!",
  ORDER_CREATED: "Order created successfully!",
  ORDER_UPDATED: "Order updated successfully!",
  PAYMENT_SUCCESS: "Payment completed successfully!",
  PROFILE_UPDATED: "Profile updated successfully!",
  PASSWORD_UPDATED: "Password updated successfully!",
};

// Local Storage Keys
export const LOCAL_STORAGE_KEYS = {
  USER_DATA: "userData",
  AUTH_TOKEN: "authToken",
  CART_ITEMS: "cartItems",
  STRIPE_API_KEY: "stripeApiKey",
  USER_PREFERENCES: "userPreferences",
};
