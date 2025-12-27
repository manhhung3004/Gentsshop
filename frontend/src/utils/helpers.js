/**
 * Helper utility functions
 */

/**
 * Format date to readable string
 * @param {string|Date} date
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string}
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  const finalOptions = { ...defaultOptions, ...options };
  const formatter = new Intl.DateTimeFormat("en-IN", finalOptions);
  return formatter.format(new Date(date));
};

/**
 * Format currency
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
export const formatCurrency = (amount, currency = "INR") => {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
    }).format(amount);
  } catch (error) {
    return `₹ ${amount.toFixed(2)}`;
  }
};

/**
 * Format number with commas
 * @param {number} num
 * @returns {string}
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Capitalize first letter
 * @param {string} str
 * @returns {string}
 */
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Truncate text
 * @param {string} text
 * @param {number} maxLength
 * @param {string} suffix
 * @returns {string}
 */
export const truncateText = (text, maxLength = 100, suffix = "...") => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + suffix;
};

/**
 * Debounce function
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
export const debounce = (func, delay = 500) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function
 * @param {function} func
 * @param {number} limit
 * @returns {function}
 */
export const throttle = (func, limit = 500) => {
  let isThrottled = false;
  return function (...args) {
    if (!isThrottled) {
      func(...args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, limit);
    }
  };
};

/**
 * Deep clone object
 * @param {object} obj
 * @returns {object}
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Check if object is empty
 * @param {object} obj
 * @returns {boolean}
 */
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Get random ID
 * @returns {string}
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Sleep/delay function
 * @param {number} ms
 * @returns {Promise}
 */
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Convert file to base64
 * @param {File} file
 * @returns {Promise<string>}
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Get file size in readable format
 * @param {number} bytes
 * @returns {string}
 */
export const getReadableFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

/**
 * Check if user has permission
 * @param {string} userRole
 * @param {string|array} requiredRole
 * @returns {boolean}
 */
export const hasPermission = (userRole, requiredRole) => {
  if (Array.isArray(requiredRole)) {
    return requiredRole.includes(userRole);
  }
  return userRole === requiredRole;
};

/**
 * Build query string from object
 * @param {object} params
 * @returns {string}
 */
export const buildQueryString = (params) => {
  return Object.keys(params)
    .filter((key) => params[key] !== null && params[key] !== undefined)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
};

/**
 * Parse query string to object
 * @param {string} queryString
 * @returns {object}
 */
export const parseQueryString = (queryString) => {
  const params = {};
  const searchParams = new URLSearchParams(queryString);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

/**
 * Retry async function with exponential backoff
 * @param {function} fn
 * @param {number} maxRetries
 * @param {number} initialDelay
 * @returns {Promise}
 */
export const retryAsync = async (fn, maxRetries = 3, initialDelay = 1000) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await sleep(initialDelay * Math.pow(2, i));
    }
  }
};

export default {
  formatDate,
  formatCurrency,
  formatNumber,
  capitalize,
  truncateText,
  debounce,
  throttle,
  deepClone,
  isEmpty,
  generateId,
  sleep,
  fileToBase64,
  getReadableFileSize,
  hasPermission,
  buildQueryString,
  parseQueryString,
  retryAsync,
};
