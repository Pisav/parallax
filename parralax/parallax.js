let scrollAfstand;
let sectie2 = document.getElementsByClassName('sectie--2')[0];
let sectie4 = document.getElementsByClassName('sectie--4')[0];
let sectie6 = document.getElementsByClassName('sectie--6')[0];

window.addEventListener('scroll', (e)=> {
	scrollAfstand = window.pageYOffset;
	// console.log('scrollAfstand: '+scrollAfstand);
	corrSection2(scrollAfstand);
	corrSection4(scrollAfstand);
	corrSection6(scrollAfstand);
});

const corrSection2 = (gescrolled) => {
	// console.log('In sectie 2: gescrolled: '+gescrolled);
	let correctie = gescrolled/-4;
	correctie -= 200;
	correctie += 'px';
	sectie2.style.backgroundPositionY = correctie;
}
const corrSection4 = (gescrolled) => {
	sectie4.style.backgroundPositionY = -gescrolled/3 + "px";
}
const corrSection6 = (gescrolled) => {
	sectie6.style.backgroundPositionY = -gescrolled/3 + "px";
}
