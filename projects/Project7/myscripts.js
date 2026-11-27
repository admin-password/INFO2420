/* No <script> tags in an external file. */

/* ---------- Logo rollover ---------- */
var logoNormal = new Image();
logoNormal.src = "Images/logo1.jpg";
var logoHover = new Image();
logoHover.src = "Images/logo2.jpg";

function rollover(isOver) {
    document.getElementById("logo").src = isOver ? logoHover.src : logoNormal.src;
}

/* ---------- Thumbnail image swap (from Project 6) ---------- */
var imgArray = [
    "image1lg.jpg",
    "image2lg.jpg",
    "image3lg.jpg",
    "image4lg.jpg"
];
var titleArray = [
    "Angry Fuzzy Cat",
    "Cat and Dog",
    "Parrot and Dog",
    "Two Hunting Dogs"
];
var imagePath = "Images/Fullsize/";

function swapImage(index) {
    document.getElementById("bigImage").src = imagePath + imgArray[index];
    document.getElementById("bottomText").innerHTML = titleArray[index];
}

/* Preload the large images so swaps don't flash (called from <body onload>) */
function preloadImages() {
    var cache = [];
    for (var i = 0; i < imgArray.length; i++) {
        cache[i] = new Image();
        cache[i].src = imagePath + imgArray[i];
    }
}
