// js/login.js - ÚNIQVE® Authentication & Session Management

class AuthController {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('store_user')) || null;
    }

    handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            app.showToast("Please enter a valid email and password.");
            return;
        }

        const userObj = { email, loggedIn: true, role: 'Member' };
        localStorage.setItem('store_user', JSON.stringify(userObj));
        app.showToast(`Welcome back to ÚNIQVE, ${email}! Redirecting...`);
        
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1200);
    }

    continueAsGuest() {
        const guestObj = { email: 'Guest User', loggedIn: true, role: 'Guest' };
        localStorage.setItem('store_user', JSON.stringify(guestObj));
        app.showToast("Logged in as Guest. Redirecting to storefront...");
        
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    }

    logout() {
        localStorage.removeItem('store_user');
        app.showToast("Signed out successfully.");
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 800);
    }
}

const authCtrl = new AuthController();
