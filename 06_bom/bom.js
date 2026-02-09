// Window Object
window.innerWidth, window.innerHeight; // Viewport dimensions
window.open(), window.close(); // Open/close windows
window.alert(), window.confirm(), window.prompt(); // Dialogs
window.location; // URL manipulation
window.history; // Browser history navigation
window.navigator; // Browser and system info
window.screen; // Screen details

// Location Object
window.location.href; // Current URL
window.location.reload(); // Reload current URL
window.location.assign(url); // Load new document
window.location.replace(url); // Replace current document

// History Object
window.history.back(), window.history.forward();
window.history.go(n); // Navigate through history

// Navigator Object
navigator.userAgent; // Browser info
navigator.platform; // System platform
navigator.language; // Primary language

// Screen Object
screen.width, screen.height; // Screen dimensions
screen.availWidth, screen.availHeight; // Available screen dimensions

// Timing
window.setTimeout(func, delay);
window.setInterval(func, interval);
window.clearTimeout(), window.clearInterval();

// Animation
window.requestAnimationFrame(callback);

// Cookies
document.cookie; // Get or set cookies

// Storage
window.localStorage; // Persistent storage
window.sessionStorage; // Session storage

// Popups and Printing
window.open(); // For opening new windows/tabs
window.print(); // Opens print dialog

// Browser Events
window.addEventListener('load', function() { /* code */ });
window.addEventListener('beforeunload', function(event) { /* code */ });

// URL and URLSearchParams
const url = new URL('fullUrl');
const params = new URLSearchParams(url.search);