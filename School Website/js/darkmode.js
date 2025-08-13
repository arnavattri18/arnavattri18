document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        body.classList.remove('blue-mode');
        body.classList.remove('purple-mode'); // Ensure other modes are turned off
    });

    document.getElementById('blue-mode-toggle').addEventListener('click', function() {
        body.classList.toggle('blue-mode');
        body.classList.remove('dark-mode');
        body.classList.remove('purple-mode'); // Ensure other modes are turned off
    });

    document.getElementById('purple-mode-toggle').addEventListener('click', function() {
        body.classList.toggle('purple-mode');
        body.classList.remove('dark-mode');
        body.classList.remove('blue-mode'); // Ensure other modes are turned off
    });
});



