'use strict';

let styleElement = document.createElement('style');

styleElement.textContent = `
    .container {
        margin-top: 5rem;
    }
    .card {
        height: 100%;
    }
    .card-img-top {
        object-fit: cover;
        height: 200px;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
`;

document.head.append(styleElement);
let containerDiv = document.createElement('div');
containerDiv.classList.add('container', 'mt-5');

let rowDiv = document.createElement('div');
rowDiv.classList.add('row');

for (let i = 1; i <= 9; i++) {
    let imageContainer = createImage(getRandomImageNumber(1,9));
    rowDiv.append(imageContainer);
}

containerDiv.append(rowDiv);
document.body.append(containerDiv);


function createImage(num) {
    let colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4');

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    let imageElement = document.createElement('img');
    imageElement.src = './images/' + num + '.jpg';
    imageElement.classList.add('card-img-top');
    imageElement.alt = 'Image ' + num;

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    let imageNumber = document.createElement('h5');
    imageNumber.classList.add('card-title');
    imageNumber.textContent = 'Image ' + num;

    let textElement = document.createElement('p');
    textElement.classList.add('card-text');

    cardBodyDiv.append(imageNumber, textElement);
    cardDiv.append(imageElement, cardBodyDiv);
    colDiv.append(cardDiv);

    return colDiv;
}

function getRandomImageNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}







