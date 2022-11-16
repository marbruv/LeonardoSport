const hovedbilde = document.getElementById("hovedbilde")
const imgcontainer = document.getElementsByClassName("imgcontainer")

const clickleft = document.getElementById("clickleft")
const clickright = document.getElementById("clickright")


const bildeListe = ["../img/Bordtennis/bordtennis.png", "../img/Bordtennis/bordtennismedlemmer.png","../img/Bordtennis/bordtennisstyre.png",
"../img/Bordtennis/bordtennisleder.png", "../img/Bordtennis/bordtennisbord.png"]


let currentIndex = 0;
let currentIndex2 = bildeListe.length;


function nestebilde() {
    if (currentIndex >= bildeListe.length) {
        currentIndex = 0
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
