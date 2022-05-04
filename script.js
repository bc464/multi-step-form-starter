const nextBtn = document.querySelectorAll(".btn-next");
const pageOne = document.querySelector(".page-one");
const pageTwo = document.querySelector(".page-two");
const pageThree = document.querySelector(".page-three");
const pageFour = document.querySelector(".page-four");

let count = 1;

nextBtn.forEach(stepUp);

function stepUp(item) {
	item.addEventListener("click", function(e) {
	e.preventDefault();
	count ++;
	if (count == 2) {
		pageOne.style.display = "none";
		pageTwo.style.display = "block";
	}
	if (count == 3) {
		pageTwo.style.display = "none";
		pageThree.style.display = "block";
	}
	if (count == 4) {
		pageThree.style.display = "none";
		pageFour.style.display = "block";
	}
})}