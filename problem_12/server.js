function login() {
    return new Promise((resolve) => {
        console.log("User Logged In");
        resolve();
    });
}

function getProfile() {
    return new Promise((resolve) => {
        console.log("Profile Loaded");
        resolve();
    });
}

function showDashboard() {
    return new Promise((resolve) => {
        console.log("Dashboard Displayed");
        resolve();
    });
}

login()
    .then(getProfile)
    .then(showDashboard)
    .then(() => {
        console.log("All Tasks Completed");
    });