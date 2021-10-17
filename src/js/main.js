'use strict';

const navButtons = document.querySelectorAll('.js-button');
const navSection = document.querySelector('.js-nav');

const handleToogleNav = (event) => {
	if (navSection.classList.contains('hidden')) {
		navSection.classList.remove('hidden');
	} else {
		navSection.classList.add('hidden');
	}
};

for (const eachButton of navButtons) {
	eachButton.addEventListener('click', handleToogleNav);
}
