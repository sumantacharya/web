// Switching signIn and signUp
function showSignIn() {
    addEventListener('click', function () {

        window.location.href = 'signup.html';
    });
}

function showSignUp() {
    addEventListener('click', function () {

        window.location.href = 'signup2.html';
    });
}


function handleSignUp(event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;
    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    } else

        //storing credential in session
        sessionStorage.setItem("username", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    alert("Sign-up successful! Please sign in.");
    window.location.href = 'signup.html'
}
function sumanthHandle(event) {
    event.preventDefault();
    const yourEmail = document.getElementById("signin-email").value;
    const yourpass = document.getElementById("signin-password").value;

    const storedemail = sessionStorage.getItem("email");
    const storedpass = sessionStorage.getItem("password");
    if (yourEmail === storedemail && yourpass === storedpass) {
        alert("succefully logged");
        window.location.href = 'succefull.html';

    } else {
        alert("password not matches");
    }



}



