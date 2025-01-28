 // Handle the form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message. I will get back to you soon!');
});
function loadPage(page) {
    let content = document.getElementById('content');
    
    switch(page) {
        case 'home':
            content.innerHTML = '<h1>Welcome to My Portfolio</h1><p>This is the home page.</p>';
            break;
        case 'about':
            content.innerHTML = '<h1>About Me</h1><p>This is the about page.</p>';
            break;
        case 'projects':
            content.innerHTML = '<h1>My Projects</h1><p>This is the projects page.</p>';
            break;
        case 'contact':
            content.innerHTML = '<h1>Contact Me</h1><p>This is the contact page.</p>';
            break;
        default:
            content.innerHTML = '<h1>404 Not Found</h1><p>Page not found.</p>';
    }
}

// Load the home page by default
window.onload = function() {
    loadPage('home');
};
