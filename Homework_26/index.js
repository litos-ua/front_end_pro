"use strict"


//     const containerDiv = document.createElement('div');
//     containerDiv.classList.add('container');
//
//     const headerContainer = document.createElement('header');
//     headerContainer.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'justify-content-md-between', 'py-3', 'mb-4', 'border-bottom');
//
//     const headerDiv1 = createSubContainer('col-md-4 col-lg-auto', 'Product list');
//     const headerDiv2 = createSubContainer('col-md-4 col-lg-auto', 'Search');
//     const headerDiv3 = createSubContainer('col-md-4 text-end', '');
//
//     const searchForm = document.createElement('form');
//     searchForm.classList.add('col-md-4', 'col-lg-auto');
//     searchForm.setAttribute('role', 'search');
//     const searchInput = document.createElement('input');
//     searchInput.setAttribute('type', 'search');
//     searchInput.classList.add('form-control');
//     searchInput.setAttribute('placeholder', 'Search...');
//     searchInput.setAttribute('aria-label', 'Search');
//     searchForm.append(searchInput);
//     headerDiv2.append(searchForm);
//
//     const loginButtonContainer = createSubContainer('col-md-4 text-end', '');
//     const loginButton = createButton(loginButtonContainer, 'Login', 'btn-info', () => {});
//     const signupButton = createButton(loginButtonContainer, 'Sign-up', 'btn-warning', () => {});
//     headerDiv3.append(loginButtonContainer);
//
//     [headerDiv1, headerDiv2, headerDiv3].forEach(container => {
//         headerContainer.append(container);
//     });
//     containerDiv.append(headerContainer);
//
//     const main = document.createElement('main');
//
//     main.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'justify-content-md-between', 'py-3', 'mb-4', 'border-bottom');
//
//     const divCategory = createSubContainer('div-category', 'Category');
//     const divProducts = createSubContainer('div-product', 'Product');
//     const divCharacteristics = createSubContainer('div-characteristics', 'Characteristics');
//
//     [divCategory, divProducts, divCharacteristics].forEach(container => {
//         main.append(container);
//     });
//
//     [divCategory, divProducts, divCharacteristics].forEach(container => {
//         container.style.cssText = 'display: flex; flex-direction: column; margin-bottom: 10px;';
//     });
//
//     containerDiv.append(main);
//     document.body.append(containerDiv);
//     document.body.style.backgroundColor = 'lightblue';
//
//     for (const category in configObj) {
//         createButton(divCategory, category, 'btn-primary', () => showProducts(category));
//     }
//
//     function showProducts(category) {
//         divProducts.innerText = '';
//         divCharacteristics.innerText = '';
//         const products = configObj[category];
//         for (const product in products) {
//             createButton(divProducts, product, 'btn-success', () => showCharacteristics(category, product));
//         }
//     }
//
//
//     function showCharacteristics(category, product) {
//         divCharacteristics.innerText = '';
//         const characteristics = configObj[category][product];
//         const characteristicsList = document.createElement('ul');
//
//         for (const key in characteristics) {
//             const characteristicItem = document.createElement('li');
//             characteristicItem.textContent = `${key}: ${characteristics[key]}`;
//             characteristicsList.append(characteristicItem);
//         }
//
//         divCharacteristics.append(characteristicsList);
//
//         const buttonWrDiv = document.createElement('div');
//         buttonWrDiv.style.textAlign = 'center';
//         createButton(buttonWrDiv, 'Buy', 'btn-primary', () => handleBuyButtonClick(category, product));
//
//         divCharacteristics.append(buttonWrDiv);
//         divCharacteristics.style.cssText = 'font-size: 16px; text-align: left;';
//     }
//
//     function createButton(container, text, style, clickHandler) {
//         const button = document.createElement('button');
//         button.classList.add('btn', style, 'me-2', 'mb-2');
//         button.textContent = text;
//         button.addEventListener('click', clickHandler);
//         container.append(button);
//         return button;
//     }
//
//     function handleBuyButtonClick(category, product) {
//         divProducts.innerText = '';
//         divCharacteristics.innerText = `Product ${product} in category: ${category} has bought`;
//         divCharacteristics.style.cssText = 'font-weight: bold; font-size: 18px; text-align: center;';
//         const header4Products = document.createElement('h4');
//         header4Products.innerText = 'Product';
//         divProducts.append(header4Products);
//     }
//
//     function createSubContainer(id, headingText) {
//         const subContainer = document.createElement('div');
//         subContainer.classList.add('col-md-4', 'col-lg-auto');
//         subContainer.id = id;
//         if (headingText !== 'Search'){
//             const heading = document.createElement('h4');
//             heading.textContent = headingText;
//             subContainer.append(heading);
//         }
//         return subContainer;
//     }





class CustomForm {
    constructor(configForm) {
        const { action, method, name, title } = configForm;
        this.form = document.createElement('form');
        this.form.action = action;
        this.form.method = method;
        this.form.name = name;

        if (title) {
            const formTitle = document.createElement('h4');
            formTitle.textContent = title;
            this.form.appendChild(formTitle);
        }
    }


    addInput(configInputObj) {
        const { type, name, placeholder, label } = configInputObj;
        const inputContainer = this.createInputContainer(type, name, placeholder, label);
        this.form.append(inputContainer);
    }

    addInputReturn(configInputObj) {
        const { type, name, placeholder, label } = configInputObj;
        return this.createInputContainer(type, name, placeholder, label);
    }

    createInputContainer(type, name, placeholder, label) {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('mb-3');

        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.setAttribute('for', name);

        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;
        input.classList.add('form-control');

        inputContainer.append(labelElement);
        inputContainer.append(input);

        return inputContainer;
    }


    addCheckbox(configSelect) {
        const { name, label } = configSelect;
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('form-check', 'mb-3');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = name;
        checkbox.classList.add('form-check-input');

        const checkboxLabel = document.createElement('label');
        checkboxLabel.classList.add('form-check-label');
        checkboxLabel.append(checkbox);
        checkboxLabel.append(document.createTextNode(label));

        checkboxContainer.append(checkboxLabel);
        this.form.append(checkboxContainer);
    }

    addSelect(configSelect) {
        const { name, options, label } = configSelect;

        const selectContainer = document.createElement('div');
        selectContainer.classList.add('mb-3');

        const selectLabel = document.createElement('label');
        selectLabel.textContent = label;
        selectContainer.append(selectLabel);

        const select = document.createElement('select');
        select.name = name;
        select.classList.add('form-select', 'mb-3');

        select.setAttribute('aria-label', '');

        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '';
        select.append(emptyOption);

        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            select.append(option);
        });

        selectContainer.append(select);
        this.form.append(selectContainer);
    }


    addRadio(configRadio) {
        const { name, value, label } = configRadio;

        const radioContainer = document.createElement('div');
        radioContainer.classList.add('form-check', 'mb-3');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = name;
        radio.value = value;
        radio.classList.add('form-check-input');

        const radioLabel = document.createElement('label');
        radioLabel.classList.add('form-check-label');
        radioLabel.append(radio);
        radioLabel.append(document.createTextNode(label));

        radioContainer.appendChild(radioLabel);
        this.form.append(radioContainer);
    }

    addTextarea(configTextarea) {
        const { name, placeholder, label } = configTextarea;

        const textareaContainer = document.createElement('div');
        textareaContainer.classList.add('mb-3');

        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.setAttribute('for', name);

        const textarea = document.createElement('textarea');
        textarea.name = name;
        textarea.placeholder = placeholder;
        textarea.classList.add('form-control');

        textareaContainer.append(labelElement);
        textareaContainer.append(textarea);

        this.form.append(textareaContainer);
    }


    addButton(configButton) {
        const { type, name, textContent, style } = configButton;
        const button = document.createElement('button');
        button.type = type;
        button.classList.add('btn', style, 'me-2', 'mb-2');
        button.name = name;
        button.textContent = textContent;
        button.style.cssText = 'width: 5%; margin-left:47%';
        this.form.append(button);
    }

    appendTo(container) {
        this.form.style.cssText = 'margin-left: 5%; margin-right: 5%; margin-top: 5px; margin-bottom: 5px; ' +
            'background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 10px; padding: 10px;';

        container.append(this.form);
    }
}



const myForm = new CustomForm(formConfig.main);

myForm.addInput(formConfig.inputUsername);
myForm.addSelect(formConfig.selectCity);

const inputContainer = document.createElement('div');
const inputWar = myForm.addInputReturn(formConfig.inputWarehouse);
const inputQuantity = myForm.addInputReturn(formConfig.inputQuantity);
inputWar.style.cssText = 'flex: 1; margin-right: 10px';
inputQuantity.style.cssText = 'flex: 1';

inputContainer.style.cssText = 'display: flex; align-items: center;';
inputContainer.append(inputWar);
inputContainer.append(inputQuantity);
myForm.form.append(inputContainer);

myForm.addRadio(formConfig.radioByCreditCard);
myForm.addRadio(formConfig.radioUponReceipt);
myForm.addTextarea(formConfig.textareaComments);
myForm.addButton(formConfig.buttonSubmit);

myForm.appendTo(document.body);

const currentForm = document.forms[formConfig.main.name];
const data = {};

const displayDataDiv = document.createElement('div');
document.body.append(displayDataDiv);


const requiredFields = [
    formConfig.inputUsername.name,
    formConfig.selectCity.name,
    formConfig.inputWarehouse.name,
    formConfig.inputQuantity.name,
    formConfig.radioByCreditCard.name
];

for (const element of currentForm.elements) {
    if (element.type !== 'submit') {
        const eventType = element.type === 'checkbox' || element.type === 'radio' ? 'change' : 'input';
        element.addEventListener(eventType, (e) => {
            data[e.currentTarget.name] = e.currentTarget.value;
        });
    }
}


currentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('formConfig:', formConfig);
    console.log('data:', data);

    const emptyFields = requiredFields.filter(fieldName => !data[fieldName]);
    console.log(emptyFields);

    if (emptyFields.length > 0) {
        const emptyFieldsMessage = emptyFields
            .map(fieldName => Object.values(formConfig).find(obj => obj.name === fieldName)?.label || '')
            .join(', ');
        alert(`Please fill in all required fields: ${emptyFieldsMessage}`);
        return;
    }

    updateDisplayData();
});

function updateDisplayData() {
    displayDataDiv.innerText = '';
    const dataList = document.createElement('ul');

    for (const key in data) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${data[key]}`;
        dataList.append(listItem);
    }

    displayDataDiv.append(dataList);
}
