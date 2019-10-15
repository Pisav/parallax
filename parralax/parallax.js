let scrollAfstand;
let sectie2 = document.getElementsByClassName('sectie--2')[0];
let sectie4 = document.getElementsByClassName('sectie--4')[0];

window.addEventListener('scroll', (e)=> {
	scrollAfstand = window.pageYOffset;

	corrSection2(scrollAfstand);
	corrSection4(scrollAfstand);
	corrSection6(scrollAfstand);
});

const corrSection2 = (gescrolled) => {
	sectie2.style.backgroundPositionY =  -gescrolled/8 + "px";
}
const corrSection4 = (gescrolled) => {
	sectie2.style.backgroundPositionY = -gescrolled/3 + "px";
}
const corrSection6 = (gescrolled) => {
	sectie2.style.backgroundPositionY = 400 -gescrolled/2 + "px";
}