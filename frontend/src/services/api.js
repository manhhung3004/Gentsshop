/**
 * Centralized API Service
 * All API calls should go through this service
 */

import axios from "axios";
import { API_ENDPOINTS, LOCAL_STORAGE_KEYS } from "../config/constants";

// Create axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://192.168.1.56:10000/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token to headers
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle global errors
    if (error.response?.status === 401) {
      // Clear auth data and redirect to login
      localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_DATA);
      // window.location.href = "/login";
    }
    return Promise.reject(error.response?.data || error);
  }
);

/**
 * Auth APIs
 */
export const authAPI = {
  login: (email, password) =>
    apiClient.post(API_ENDPOINTS.LOGIN, { email, password }),

  signup: (formData) =>
    apiClient.post(API_ENDPOINTS.SIGNUP, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  logout: () => apiClient.get(API_ENDPOINTS.LOGOUT),

  loadUser: () => apiClient.get(API_ENDPOINTS.LOAD_USER),

  updateProfile: (formData) =>
    apiClient.put(API_ENDPOINTS.UPDATE_PROFILE, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  updatePassword: (oldPassword, newPassword) =>
    apiClient.put(API_ENDPOINTS.UPDATE_PASSWORD, { oldPassword, newPassword }),

  forgotPassword: (email) =>
    apiClient.post(API_ENDPOINTS.FORGOT_PASSWORD, { email }),

  resetPassword: (token, password, confirmPassword) =>
    apiClient.put(`${API_ENDPOINTS.RESET_PASSWORD}/${token}`, {
      password,
      confirmPassword,
    }),
};

/**
 * Product APIs
 */
export const productAPI = {
  getAllProducts: (params = {}) =>
    apiClient.get(API_ENDPOINTS.GET_ALL_PRODUCTS, { params }),

  getProductDetails: (id) =>
    apiClient.get(`${API_ENDPOINTS.GET_PRODUCT_DETAILS}/${id}`),

  getAdminProducts: () =>
    apiClient.get(API_ENDPOINTS.GET_ADMIN_PRODUCTS),

  createProduct: (formData) =>
    apiClient.post(API_ENDPOINTS.CREATE_PRODUCT, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  updateProduct: (id, formData) =>
    apiClient.put(`${API_ENDPOINTS.UPDATE_PRODUCT}/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  deleteProduct: (id) =>
    apiClient.delete(`${API_ENDPOINTS.DELETE_PRODUCT}/${id}`),
};

/**
 * Review APIs
 */
export const reviewAPI = {
  getAllReviews: (productId) =>
    apiClient.get(`${API_ENDPOINTS.GET_REVIEWS}?id=${productId}`),

  createReview: (productId, rating, comment, recommend) =>
    apiClient.post(API_ENDPOINTS.CREATE_REVIEW, {
      productId,
      rating,
      comment,
      recommend,
    }),

  deleteReview: (id) =>
    apiClient.delete(`${API_ENDPOINTS.DELETE_REVIEW}/${id}`),

  deleteProductReview: (reviewId, productId) =>
    apiClient.delete(`${API_ENDPOINTS.DELETE_REVIEW}/${reviewId}?productId=${productId}`),
};

/**
 * Order APIs
 */
export const orderAPI = {
  getAllOrders: () => apiClient.get(API_ENDPOINTS.GET_ALL_ORDERS),

  getMyOrders: () => apiClient.get(API_ENDPOINTS.GET_MY_ORDERS),

  getOrderDetails: (id) =>
    apiClient.get(`${API_ENDPOINTS.GET_ORDER_DETAILS}/${id}`),

  createOrder: (orderData) =>
    apiClient.post(API_ENDPOINTS.CREATE_ORDER, orderData),

  updateOrder: (id, status) =>
    apiClient.put(`${API_ENDPOINTS.UPDATE_ORDER}/${id}`, { status }),

  deleteOrder: (id) =>
    apiClient.delete(`${API_ENDPOINTS.DELETE_ORDER}/${id}`),
};

/**
 * User APIs
 */
export const userAPI = {
  getAllUsers: () => apiClient.get(API_ENDPOINTS.GET_ALL_USERS),

  getUserDetails: (id) =>
    apiClient.get(`${API_ENDPOINTS.GET_USER_DETAILS}/${id}`),

  updateUser: (id, userData) =>
    apiClient.put(`${API_ENDPOINTS.UPDATE_USER}/${id}`, userData),

  deleteUser: (id) =>
    apiClient.delete(`${API_ENDPOINTS.DELETE_USER}/${id}`),
};

/**
 * Payment APIs
 */
export const paymentAPI = {
  getStripeApiKey: () => apiClient.get(API_ENDPOINTS.STRIPE_API_KEY),

  processPayment: (paymentData) =>
    apiClient.post(API_ENDPOINTS.PROCESS_PAYMENT, paymentData),
};

/**
 * Generic API call wrapper with error handling
 */
export const apiCall = async (fn, errorCallback = null) => {
  try {
    const response = await fn();
    return { success: true, data: response };
  } catch (error) {
    const errorMessage =
      error?.message || "An error occurred. Please try again.";
    if (errorCallback) {
      errorCallback(errorMessage);
    }
    return { success: false, error: errorMessage };
  }
};

export default apiClient;
