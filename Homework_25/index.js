"use strict"

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const contentDiv = document.createElement('div');
contentDiv.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'justify-content-md-between', 'py-3', 'mb-4');
containerDiv.append(contentDiv);

let previousButtonClickCount = 9;
let nextButtonClickCount = 0;
let sumCount = 0;

const previousButton = createButton(contentDiv, {
    text: 'Previous',
    style: 'btn-primary',
    colClass: 'col-md-1'
});

previousButton.addEventListener('click', () => {
    previousButtonClickCount--;
    updateImage();
    console.log('Sum of counters:', sumCount);
});

const cardDiv = document.createElement('div');
cardDiv.classList.add('col-md-10', 'd-flex', 'justify-content-center');
contentDiv.append(cardDiv);

const card = document.createElement('div');
card.classList.add('card');
card.style.width = '90%';
cardDiv.append(card);

const cardImage = document.createElement('img');
//updateImage();
cardImage.src = './images/3.jpg';
cardImage.classList.add('card-img-top');
cardImage.alt = '...';
card.append(cardImage);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.append(cardBody);

// const cardText = document.createElement('p');
// cardText.classList.add('card-text');
// cardText.textContent = 'Текст';
// cardBody.append(cardText);

const nextButton = createButton(contentDiv, {
    text: '&nbsp&nbspNext&nbsp&nbsp',
    style: 'btn-primary',
    colClass: 'col-md-1'
});

nextButton.addEventListener('click', () => {
    nextButtonClickCount++;
    updateImage();
    console.log('Sum of counters:', sumCount);
});

document.body.append(containerDiv);

function createButton(container, options) {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('col-md-1');

    if (options.colClass) {
        buttonDiv.classList.add(options.colClass);
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', options.style);
    button.innerHTML = options.text;
    buttonDiv.append(button);
    container.append(buttonDiv);

    return button;
}

function updateImage() {
    sumCount = previousButtonClickCount + nextButtonClickCount;
    cardImage.src = `./images/${sumCount}.jpg`;
    //sumCount === 10 ? cardImage.src = `./images/3.jpg`: cardImage.src = `./images/${sumCount}.jpg`;
}


