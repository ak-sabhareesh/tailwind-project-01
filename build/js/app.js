const init = () => {
	const menu = document.getElementById('hamburger-menu')
	const mobileMenu = document.getElementById('nav-mobile')

	const triggerAnimation = () => {
		mobileMenu.classList.toggle('menu-animation')
		menu.classList.toggle('hamberger-animation')
	}

	menu.addEventListener('click', triggerAnimation)
	mobileMenu.addEventListener('click', triggerAnimation)
}

document.addEventListener('DOMContentLoaded', init)
