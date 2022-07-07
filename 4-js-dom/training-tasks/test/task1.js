"use strict";

const cont = document.querySelector('#container');
const btn = document.querySelector('button');
const textBlock  = document.querySelector('#block');

btn.addEventListener('click', (event) => {
    textBlock.classList.add('active');
    event.stopPropagation();
});

cont.addEventListener('click', () => {
	textBlock.classList.remove('active');
});
