const hovedbilde = document.getElementById("hovedbilde")
const imgcontainer = document.getElementsByClassName("imgcontainer")

const clickleft = document.getElementById("clickleft")
const clickright = document.getElementById("clickright")


const bildeListe = ["../img/Croquet/2.jpg", "../img/Croquet/3.jpg", "../img/Croquet/4.jpg",
 "../img/Croquet/5.jpeg", "../img/Croquet/6.jpeg",]


let currentIndex = 0;
let currentIndex2 = bildeListe.length;


function nestebilde() {
    if (currentIndex >= bildeListe.length-1) {
        currentIndex = -1
    }
        currentIndex++
        hovedbilde.src = bildeListe[currentIndex]
        console.log(currentIndex);
    }

function forrigebilde() {
    if (currentIndex == 0) {
        currentIndex = bildeListe.length
    }   
        currentIndex--
        hovedbilde.src = bildeListe[currentIndex]
        console.log(currentIndex);
}

clickright.addEventListener("click", nestebilde)
clickleft.addEventListener("click", forrigebilde)
