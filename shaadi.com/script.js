document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});

window.onscroll = function() {
    const button = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
