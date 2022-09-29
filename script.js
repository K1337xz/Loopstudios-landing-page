const mobileNav = document.querySelector(".mobileNav");
const openButton = document.querySelector(".openMenu");
const closeButton = document.querySelector(".closeMenu");
const body = document.querySelector("body");

function openMenu() {
	body.style.overflow = `hidden`;
	mobileNav.style.display = `flex`;
	closeButton.style.display = `block`;
	mobileNav.classList.add("active");
}
function closeMenu() {
	body.style.overflow = ``;
	mobileNav.style.display = `none`;
	closeButton.style.display = `none`;
	mobileNav.classList.remove("active");
}
openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
