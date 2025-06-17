document.getElementById('search-button').addEventListener('click', function() {  
    const query = document.getElementById('search').value;  
    if (query) {  
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);  
    }  
});  
  
document.getElementById('lucky-button').addEventListener('click', function() {  
    const query = document.getElementById('search').value;  
    if (query) {  
        window.location.href = 'https://www.google.com/search?btnI=I&q=' + encodeURIComponent(query);  
    }  
});  
