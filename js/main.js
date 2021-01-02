'use strict';

const next = document.querySelector('.arrow');
const slides = document.querySelectorAll('.card');
const sliderItem = document.querySelector('.series-item');

const indent = slides.length;
let index = 0;

console.log(indent);

sliderItem.style.width = (indent * 50) + "%";

const scrollFunction = (n) => {
    index += n;

    if (index <= -(indent) * 50){
        index = 0;
    } else if (index > 0) {
        index = -(indent) * 50;
    }

    sliderItem.style.left = `${index}%`
}

next.addEventListener('click', () => {
    scrollFunction(-50);
})