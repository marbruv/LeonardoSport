var h5 = document.createElement("h5");
var text = document.createTextNode("Find us in social media!");
h5.appendChild(text);
h5.style.marginRight = "10vw";

var footerDiv = document.getElementById("footer");

footerDiv.appendChild(h5);

var imgDiv = document.createElement("div");
var face = document.createElement("img");
face.src = "img/faceb.png";
face.style.width = "100px";
face.style.backgroundColor = "white";
face.style.borderRadius = "50%";
face.style.marginRight = "10px";
face.onclick = function() {
    window.location.href = 'https://www.facebook.com/leonardo.linjeforening.7';
}
face.onmouseover = function() {
    face.style.opacity = "0.6";
}
face.onmouseleave = function() {
    face.style.opacity = "1";
}
var insta = document.createElement("img");
insta.src = "img/instag.png";
insta.style.width = "100px";
insta.onclick = function() {
    window.location.href = 'https://www.instagram.com/leonardo.linjeforening/';
}
insta.onmouseover = function() {
    insta.style.opacity = "0.6";
}
insta.onmouseleave = function() {
    insta.style.opacity = "1";
}


imgDiv.appendChild(face);
imgDiv.appendChild(insta);

footerDiv.appendChild(imgDiv);