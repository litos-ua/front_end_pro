'use strict';

const numOfPictures = 9;

let containerDiv = document.createElement('div');
containerDiv.classList.add('container', 'mt-5');
containerDiv.style.marginTop = '5rem';

let rowDiv = document.createElement('div');
rowDiv.classList.add('row');

for (let i = 1; i <= numOfPictures; i++) {
    let imageContainer = createImage(getRandomImageNumber(1, numOfPictures), './images/');
    rowDiv.append(imageContainer);
}

containerDiv.append(rowDiv);
document.body.append(containerDiv);
document.body.style.backgroundColor = 'lightblue';

function createImage(num, path) {
    let colDiv = document.createElement('div');
    colDiv.classList.add('col-md-4');

    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.style.cssText = 'height: 100%;';

    let imageElement = document.createElement('img');
    imageElement.src = path + num + '.jpg';
    imageElement.classList.add('card-img-top');
    imageElement.alt = 'Image ' + num;
    imageElement.style.cssText = 'object-fit: cover; height: 200px;';

    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    cardBodyDiv.style.cssText = 'display: flex; flex-direction: column; justify-content: center;' +
                                ' height: 100%; background-color: #dded80;';

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






