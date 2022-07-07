"use strict";

const NUMBER = 30;
const cont = document.getElementById('container');

const wrap = document.createElement('ul');
wrap.className = 'wrap';
cont.append(wrap);

wrap.addEventListener('click', (event) => {
    if (event.target.className !== 'block') {
        return;
    }
    event.target.textContent = 'clicked';
})

const fragment = document.createDocumentFragment();
for (let i=0; i<=NUMBER; i++) {
    const elem = document.createElement('li');
    elem.textContent = `${i}`;
    elem.className = 'block';
    fragment.append(elem);
}

wrap.append(fragment);
