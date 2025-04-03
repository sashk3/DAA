function clearStorageForCurrentPage() {
    const pageKey = window.location.pathname.split('/').pop(); // Gets "student.html"
    
    // Loop through localStorage and remove keys related to this page
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith(pageKey)) { 
            localStorage.removeItem(key);
        }
    });

    alert(`Local storage for ${pageKey} cleared!`);
}

// Call this function when needed
clearStorageForCurrentPage();





// notes.js
localStorage.setItem("folders", JSON.stringify({ root: {} }));
location.reload(); // Refresh the page to apply changes
