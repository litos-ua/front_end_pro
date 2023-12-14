"use strict"

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const contentDiv = document.createElement('div');
contentDiv.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'justify-content-md-between', 'py-3', 'mb-4');
containerDiv.append(contentDiv);

let previousButtonClickCount = 0;
let nextButtonClickCount = 1;
let sumCount = previousButtonClickCount + nextButtonClickCount;

const previousButton = createButton(contentDiv, {
    text: 'Previous',
    style: 'btn-primary',
    colClass: 'col-md-1'
});
if (sumCount <= 1) previousButton.style.display = 'none';

previousButton.addEventListener('click', () => {
    previousButtonClickCount--;
    refreshImage();
    refreshButtonVisibility();
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
refreshImage();
cardImage.classList.add('card-img-top');
cardImage.alt = '...';
card.append(cardImage);

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.append(cardBody);

const nextButton = createButton(contentDiv, {
    text: '&nbsp&nbspNext&nbsp&nbsp',
    style: 'btn-primary',
    colClass: 'col-md-1'
});
if (sumCount >= 9) nextButton.style.display = 'none'

nextButton.addEventListener('click', () => {
    nextButtonClickCount++;
    refreshImage();
    refreshButtonVisibility();
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

function refreshImage() {
    sumCount = previousButtonClickCount + nextButtonClickCount;
    cardImage.src = `./images/${sumCount}.jpg`;
}


function refreshButtonVisibility() {
    if (sumCount <= 1) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'block';
    }
    if (sumCount >= 9) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}
