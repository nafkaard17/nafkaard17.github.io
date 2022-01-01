//Get the button
const scrollTopBtn = document.getElementById('#scrollTop');
// When the user scrolls down 50px from the top of the document, show the button
window.addEventListener('scroll', checkHeight);

function checkHeight(){  
    if (window.scrollY > 200) {
        scrollTop.style.display = 'block'
    } else {
        scrollTop.style.display = 'none'
    }
};
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0
     document.documentElement.scrollTop = 0
 };
