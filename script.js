// JavaScript to handle cookie consent

// Function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to show the cookie banner
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'block';
}

// Function to handle accept cookies
function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    hideCookieBanner();
}

// Function to handle reject cookies
function rejectCookies() {
    setCookie('cookieConsent', 'rejected', 365);
    hideCookieBanner();
}

// Function to hide the cookie banner
function hideCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'none';
}

// Check if cookie consent has already been given
window.onload = function() {
    const cookieConsent = getCookie('cookieConsent');
    if (!cookieConsent) {
        showCookieBanner();
    }
};

// Event listeners for buttons
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
document.getElementById('reject-cookies').addEventListener('click', rejectCookies);
