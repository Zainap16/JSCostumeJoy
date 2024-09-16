window.addEventListener('load', function() {
    const lastVisitedElement = document.getElementById('lastVisited');
    const lastVisited = localStorage.getItem('lastVisited');
    
    if (lastVisited) {
        lastVisitedElement.textContent = 'Last visited: ' + new Date(lastVisited).toLocaleString();
    } else {
        lastVisitedElement.textContent = 'This is your first visit!';
    }

    const currentVisit = new Date();
    localStorage.setItem('lastVisited', currentVisit);
});
