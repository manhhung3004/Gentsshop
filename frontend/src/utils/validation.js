/**
 * Validation utilities for forms and data
 */

import { ERROR_MESSAGES } from "../config/constants";

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password
 * @returns {object} { isValid: boolean, message: string }
 */
export const validatePassword = (password) => {
  if (password.length < 6) {
    return {
      isValid: false,
      message: "Password must be at least 6 characters long.",
    };
  }

  // Optional: Add more strength checks
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  if (!hasUpperCase || !hasLowerCase) {
    return {
      isValid: false,
      message: "Password should contain uppercase and lowercase letters.",
    };
  }

  return { isValid: true, message: "" };
};

/**
 * Validate name (first name, last name)
 * @param {string} name
 * @returns {boolean}
 */
export const validateName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 50;
};

/**
 * Validate product price
 * @param {number} price
 * @returns {boolean}
 */
export const validatePrice = (price) => {
  const priceNum = parseFloat(price);
  return !isNaN(priceNum) && priceNum > 0 && priceNum <= 1000000;
};

/**
 * Validate product stock
 * @param {number} stock
 * @returns {boolean}
 */
export const validateStock = (stock) => {
  const stockNum = parseInt(stock, 10);
  return !isNaN(stockNum) && stockNum >= 0;
};

/**
 * Validate product rating
 * @param {number} rating
 * @returns {boolean}
 */
export const validateRating = (rating) => {
  const ratingNum = parseFloat(rating);
  return !isNaN(ratingNum) && ratingNum >= 1 && ratingNum <= 5;
};

/**
 * Validate URL format
 * @param {string} url
 * @returns {boolean}
 */
export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Validate phone number (basic)
 * @param {string} phone
 * @returns {boolean}
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ""));
};

/**
 * Validate required field
 * @param {string} value
 * @returns {boolean}
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validate form data
 * @param {object} formData
 * @param {object} rules - validation rules
 * @returns {object} errors object
 */
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const rule = rules[field];
    const value = formData[field];

    // Check required
    if (rule.required && !validateRequired(value)) {
      errors[field] = `${field} is required.`;
      return;
    }

    // Check email
    if (rule.email && value && !validateEmail(value)) {
      errors[field] = ERROR_MESSAGES.INVALID_EMAIL;
      return;
    }

    // Check minLength
    if (rule.minLength && value && value.length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters.`;
      return;
    }

    // Check maxLength
    if (rule.maxLength && value && value.length > rule.maxLength) {
      errors[field] = `${field} must be at most ${rule.maxLength} characters.`;
      return;
    }

    // Check custom validator
    if (rule.custom && !rule.custom(value)) {
      errors[field] = rule.customMessage || `${field} is invalid.`;
      return;
    }
  });

  return errors;
};

/**
 * Get error message from API response
 * @param {object} error - axios error object
 * @returns {string}
 */
export const getErrorMessage = (error) => {
  if (error.response) {
    // Server responded with error
    return error.response.data?.message || error.response.statusText;
  } else if (error.request) {
    // Request made but no response
    return ERROR_MESSAGES.NETWORK_ERROR;
  } else {
    // Error in request setup
    return error.message || ERROR_MESSAGES.SERVER_ERROR;
  }
};

export default {
  validateEmail,
  validatePassword,
  validateName,
  validatePrice,
  validateStock,
  validateRating,
  validateURL,
  validatePhone,
  validateRequired,
  validateForm,
  getErrorMessage,
};
