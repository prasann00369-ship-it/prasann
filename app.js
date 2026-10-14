'use strict';

/*
 * PRASANN Website
 * Registration persistence + cart + language + UI helpers
 */

let lang = localStorage.getItem('prasann_lang') || 'en';
let cart = [];
let user = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const CFG = window.PRASANN_CONFIG || {};

const configured = Boolean(
  CFG.SUPABASE_URL &&
  CFG.SUPABASE_ANON_KEY
);

const STORAGE_KEYS = {
  user: 'prasann_registered_user',
  lang: 'prasann_lang',
  cart: 'prasann_cart'
};

const translations = {
  en: {
    register: 'Register',
    welcome: 'Welcome to PRASANN',
    name: 'Full name',
    mobile: 'Mobile number',
    email: 'Email address',
    address: 'Address',
    consent: 'I agree to the terms and privacy policy.',
    submit: 'Register and continue',
    registrationFailed: 'Registration failed. Please try again.',
    invalidName: 'Please enter your name.',
    invalidMobile: 'Please enter a valid mobile number.',
    invalidEmail: 'Please enter a valid email address.',
    consentRequired: 'Please accept the terms to continue.',
    logout: 'Register another user',
    emptyCart: 'Your cart is empty.',
    addedToCart: 'Added to cart.',
    remove: 'Remove',
    checkout: 'Checkout',
    quantity: 'Quantity'
  },

  hi: {
    register: 'रजिस्टर करें',
    welcome: 'PRASANN में आपका स्वागत है',
    name: 'पूरा नाम',
    mobile: 'मोबाइल नंबर',
    email: 'ईमेल पता',
    address: 'पता',
    consent: 'मैं नियमों और प्राइवेसी पॉलिसी से सहमत हूँ।',
    submit: 'रजिस्टर करके आगे बढ़ें',
    registrationFailed: 'रजिस्ट्रेशन नहीं हुआ। कृपया फिर कोशिश करें।',
    invalidName: 'कृपया अपना नाम भरें।',
    invalidMobile: 'कृपया सही मोबाइल नंबर भरें।',
    invalidEmail: 'कृपया सही ईमेल पता भरें।',
    consentRequired: 'आगे बढ़ने के लिए सहमति दें।',
    logout: 'दूसरे यूज़र का रजिस्ट्रेशन करें',
    emptyCart: 'आपकी कार्ट खाली है।',
    addedToCart: 'कार्ट में जोड़ दिया गया।',
    remove: 'हटाएँ',
    checkout: 'चेकआउट',
    quantity: 'मात्रा'
  }
};

function t(key) {
  return (translations[lang] && translations[lang][key]) ||
         translations.en[key] ||
         key;
}

/* Safely read saved JSON data. */
function readStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn('Could not read saved data:', key, error);
    return fallback;
  }
}

/* Safely save JSON data. */
function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn('Could not save data:', key, error);
    return false;
  }
}

/* Restore registration when the page is reopened. */
function restoreUser() {
  const saved = readStorage(STORAGE_KEYS.user);

  if (
    saved &&
    typeof saved === 'object' &&
    saved.name &&
    saved.mobile
  ) {
    user = saved;
    return true;
  }

  user = null;
  return false;
}

/* Restore the cart from this browser. */
function restoreCart() {
  const savedCart = readStorage(STORAGE_KEYS.cart, []);

  cart = Array.isArray(savedCart) ? savedCart : [];
}

/* Save the current cart. */
function saveCart() {
  writeStorage(STORAGE_KEYS.cart, cart);
}

/* Save registration locally after successful registration. */
function saveUser(details) {
  user = {
    name: String(details.name || '').trim(),
    mobile: String(details.mobile || '').trim(),
    email: String(details.email || '').trim(),
    addr: String(details.addr || '').trim()
  };

  writeStorage(STORAGE_KEYS.user, user);
}

/* Show the right screen
