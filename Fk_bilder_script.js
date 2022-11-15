const hovedbilde = document.getElementById("hovedbilde")
const imgcontainer = document.getElementsByClassName("imgcontainer")

const clickleft = document.getElementById("clickleft")
const clickright = document.getElementById("clickright")
//const abouttext = document.getElementsByClassName("abouttext")



const bildeListe = ["../img/FK/leoFK.png", "../img/FK/1.jpeg", "../img/FK/2.jpeg", "../img/FK/3.jpeg", "../img/FK/4.jpeg", "../img/FK/5.jpeg", "../img/FK/6.jpeg", "../img/FK/7.jpeg", "../img/FK/8.jpeg", "../img/FK/9.jpeg", "../img/FK/10.jpeg", "../img/FK/11.jpeg", "../img/FK/12.jpeg",
"../img/FK/13.jpg", "../img/FK/14.jpg", "../img/FK/15.jpg", "../img/FK/16.jpg", "../img/FK/17.jpg", "../img/FK/18.jpg", "../img/FK/19.jpg", "../img/FK/20.jpg", "../img/FK/21.jpg", "../img/FK/22.jpg",  "../img/FK/23.jpg", "../img/FK/24.jpg", "../img/FK/25.JPG", "../img/FK/leonardo_quote.jpg" ]


/*function bildeshow() {
    //abouttext.style.display = "none"

    hovedbilde.src = bildeListe[0]

    hovedbilde.style.transform = "scale(1.5)";
    hovedbilde.style.borderRadius = "0px";
    //hovedbilde.style.marginRight = "40vw"
    background.style.opacity = "0.2";
    
    clickleft.style.display = "show";
    clickright.style.display = "show";
}*/

hovedbilde.addEventListener("click", bildeshow)

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
    /* if (currentIndex >= bildeListe.length) {
        currentIndex = 0
    } */
    if (currentIndex == 0) {
        currentIndex = bildeListe.length
    }   
        currentIndex--
        hovedbilde.src = bildeListe[currentIndex]
        console.log(currentIndex);
}

clickright.addEventListener("click", nestebilde)
clickleft.addEventListener("click", forrigebilde)
