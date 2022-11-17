const path = document.querySelector('.path');
const ball = document.querySelector('.ball');

let pathPosition = path.getBoundingClientRect();
let documentPosition = document.body.getBoundingClientRect();
const pathTotalLength = path.getTotalLength();

function positionElements() {
		// SVG passes center of screen
		const relativePageOffset = -pathPosition.top +
					(window.pageYOffset + window.innerHeight * .5);
		
		const pointPercentage = relativePageOffset / pathPosition.height;
		const pointOnPath = pointPercentage * pathTotalLength;
		const pathPoint = path.getPointAtLength(pointOnPath);

		ball.style.transform = `translate(
			${ pathPosition.left + pathPoint.x }px,
			${ pathPosition.top + pathPoint.y }px
		)`;

		console.log(pathPosition.left+pathPoint.x)
}


window.addEventListener('scroll', () => {
	positionElements();
})

window.addEventListener('resize', () => {
	pathPosition = path.getBoundingClientRect();
	documentPosition = document.body.getBoundingClientRect();
	
	positionElements();
});

//function getpicture() {
//	document.getElementById("bildeball")
//}


//if (pathPosition.left+pathPoint.x >= 900){
//	function getpicture();
//}


positionElements();
