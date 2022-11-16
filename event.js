
document.getElementById("svar1").style.display ="none";
document.getElementById("svar2").style.display ="none";
document.getElementById("svar3").style.display ="none";

function konkurranse1() {
    document.getElementById("svar1").style.display = "block";
    var popup = document.getElementById("svar1").innerHTML="Vi har trening ved IPD";
    popup.classList.toggle("show");
}

function konkurranse2() {
    document.getElementById("svar2").style.display = "block";
    var popup = document.getElementById("svar2").innerHTML="Vi konkurrerer i turnering";
    popup.classList.toggle("show");
}

function konkurranse3() {
    document.getElementById("svar3").style.display = "block";
    var popup = document.getElementById("svar3").innerHTML="Vi har trening ved IPD";
    popup.classList.toggle("show");
}