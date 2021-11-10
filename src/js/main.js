'use strict';

const navButtons = document.querySelectorAll('.js-button');
const navSection = document.querySelector('.js-nav');

const computer = document.querySelector('.js-computer');
const macVector = document.querySelector('.js-mac-on');
const photo = document.querySelector('.js-photo');
const article = document.querySelector('.js-article');
const clicks = document.querySelectorAll('.js-click');

const fadeElements = document.querySelectorAll('.js-scroll');
const screenSize = window.innerHeight;

const handlePresentation = () => {
	macVector.classList.toggle('hidden-profile');
	photo.classList.toggle('hidden-profile');
	photo.classList.add('effect');
	article.classList.add('effect');
	article.classList.toggle('hidden-profile');
	for (const click of clicks) {
		click.classList.toggle('hidden-profile');
	}
};
computer.addEventListener('click', handlePresentation);

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
