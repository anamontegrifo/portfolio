'use strict';

const navButtons = document.querySelectorAll('.js-button');
const navSection = document.querySelector('.js-nav');
const macImg = document.querySelector('.js-mac');
const avatar = document.querySelector('.js-avatar');
const article = document.querySelector('.js-article');
const fadeElements = document.querySelectorAll('.js-scroll');
const screenSize = window.innerHeight;

const handlePresentation = () => {
	avatar.classList.toggle('hidden-avatar');
	article.classList.toggle('hero__article');
	article.classList.toggle('hero__laptop');
};
macImg.addEventListener('click', handlePresentation);

const handleToogleNav = () => {
	if (navSection.classList.contains('hidden')) {
		navSection.classList.remove('hidden');
	} else {
		navSection.classList.add('hidden');
	}
};
for (const eachButton of navButtons) {
	eachButton.addEventListener('click', handleToogleNav);
}

const handleFadeScroll = () => {
	for (const element of fadeElements) {
		if (element.getBoundingClientRect().top < screenSize) {
			element.classList.add('visible');
		} else {
			element.classList.remove('visible');
		}
	}
};

window.addEventListener('scroll', handleFadeScroll);
