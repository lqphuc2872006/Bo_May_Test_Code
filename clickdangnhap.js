
function toggleOptions(event) {
    event.preventDefault(); // Prevent default link behavior
    var options = document.getElementById('sign-options');
    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}

function handleSignIn() {
    alert('Sign In clicked');
    // Add your sign-in logic here
}

function handleSignUp() {
    alert('Sign Up clicked');
    // Add your sign-up logic here
}