'use strict'
const listItem = document.querySelectorAll('.features-list__item');

function openContent(evt) {
    const currentTarget = evt.currentTarget;
    const parent = currentTarget.parentElement.parentElement;
    currentTarget.classList.toggle('green');
    const featText = currentTarget.querySelector('.features-list__text');
    featText.classList.toggle('hidden');
    const arrow = currentTarget.querySelector('.arrow');
    arrow.classList.toggle('arrow--active');
    const blockImg = currentTarget.querySelector('.features-list__content');
    blockImg.classList.toggle('hidden');
}


listItem.forEach(function (elem) {
    elem.addEventListener('click', openContent);
})


