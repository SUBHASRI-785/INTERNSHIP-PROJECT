let bigImage = document.getElementById("bigImage");
let thumbnails = document.querySelectorAll(".thumb");
thumbnails.forEach(img => {
    img.addEventListener("click", function() {
        bigImage.src = this.src;
    });
});
