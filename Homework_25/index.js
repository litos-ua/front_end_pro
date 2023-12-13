"use strict"

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const contentDiv = document.createElement('div');
contentDiv.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'justify-content-md-between', 'py-3', 'mb-4');
containerDiv.append(contentDiv);

let previousButtonClickCount = 0;
let nextButtonClickCount = 0;

createButton(contentDiv, {
    text: 'Previous',
    style: 'btn-primary',
    colClass: 'col-md-1'
}, () => {
    previousButtonClickCount++;
    console.log('Previous button clicked:', previousButtonClickCount, 'times');
});

const cardDiv = document.createElement('div');
cardDiv.classList.add('col-md-10', 'd-flex', 'justify-content-center');
contentDiv.append(cardDiv);

const card = document.createElement('div');
card.classList.add('card');
card.style.width = '90%';
cardDiv.append(card);

const cardImage = document.createElement('img');
cardImage.src = './images/3.jpg';
cardImage.classList.add('card-img-top');
cardImage.alt = '...';
card.append(cardImage);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.append(cardBody);

const cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.textContent = 'Текст';
cardBody.append(cardText);

createButton(contentDiv, {
    text: '&nbsp&nbspNext&nbsp&nbsp',
    style: 'btn-primary',
    colClass: 'col-md-1'
}, () => {
    nextButtonClickCount++;
    console.log('Next button clicked:', nextButtonClickCount, 'times');
});

document.body.appendChild(containerDiv);

function createButton(container, options, clickHandler) {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('col-md-1');

    if (options.colClass) {
        buttonDiv.classList.add(options.colClass);
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', options.style);
    button.innerHTML = options.text;
    button.addEventListener('click', clickHandler);
    buttonDiv.append(button);
    container.append(buttonDiv);

    return button;
}


