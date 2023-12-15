"use strict"

// const configObj = {
//     'ControlPanels' :  {
//         'K923' : {
//             'ScreenResolution' : '800x600',
//             'RAM' : '1Gb',
//             'ModBusChannel' : '1',
//             'PowerVoltage' : '12V',
//             'Price' : '190',
//         },
//         'K927' : {
//             'ScreenResolution' : '1024x768',
//             'RAM' : '1Gb',
//             'ModBusChannel' : '1',
//             'TCPChannel' : '1',
//             'PowerVoltage' : '24V',
//             'Price' : '550',
//         },
//         'K1021' : {
//             'ScreenResolution' : '1280x720',
//             'RAM' : '1Gb',
//             'ModBusChannel' : '1',
//             'TCPChannel' : '1',
//             'PowerVoltage' : '24V',
//             'Price' : '790',
//         },
//     },
//     'Controllers' :  {
//         'MK120.01' : {
//             'NumberOfDigitalInputs' : '16',
//             'NumberOfDigitalOutputs' : '32',
//             'ModBusChannel' : '1',
//             'PowerVoltage' : '24V',
//             'Price' : '150',
//         },
//         'MK120.03' : {
//             'NumberOfDigitalInputs' : '8',
//             'NumberOfDigitalOutputs' : '16',
//             'NumberOfAnalogInputs' : '2',
//             'NumberOfAnalogOutputs' : '8',
//             'ModBusChannel' : '1',
//             'TCPChannel' : '1',
//             'PowerVoltage' : '24V',
//             'Price' : '390',
//         },
//         'MK120.05' : {
//             'NumberOfDigitalInputs' : '8',
//             'NumberOfDigitalOutputs' : '8',
//             'NumberOfAnalogInputs' : '1',
//             'NumberOfAnalogOutputs' : '4',
//             'ModBusChannel' : '2',
//             'PowerVoltage' : '12V',
//             'Price' : '420',
//         },
//     },
//     'PowerSupplies' :  {
//         'DR-15-15' : {
//             'Type' : 'AC-DC',
//             'InputVoltage' : '220V',
//             'OutputVoltage' : '15V',
//             'Power' : '15W',
//             'Price' : '19',
//         },
//         'DR-12-5' : {
//             'Type' : 'AC-DC',
//             'InputVoltage' : '220V',
//             'OutputVoltage' : '5V',
//             'Power' : '12W',
//             'Price' : '15',
//         },
//         'DR-60-15' : {
//             'Type' : 'AC-DC',
//             'InputVoltage' : '220V',
//             'OutputVoltage' : '15V',
//             'Power' : '60W',
//             'Price' : '25',
//         },
//         'DR-75-12' : {
//             'Type' : 'AC-DC',
//             'InputVoltage' : '220V',
//             'OutputVoltage' : '12V',
//             'Power' : '75W',
//             'Price' : '27',
//         },
//     },
// };
//
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
    constructor(action, method, name = 'userform') {
        this.form = document.createElement('form');
        this.form.action = action;
        this.form.method = method;
        this.form.name = name;
    }

    addInput(type, name, placeholder, label = '') {
        const inputContainer = this.createInputContainer(type, name, placeholder, label);
        this.form.append(inputContainer);
    }

    addInputReturn(type, name, placeholder, label = '') {
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


    addCheckbox(name, label) {
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

    addSelect(name, options, label) {
        const selectContainer = document.createElement('div');
        selectContainer.classList.add('mb-3');

        const selectLabel = document.createElement('label');
        selectLabel.textContent = label;
        selectContainer.append(selectLabel);

        const select = document.createElement('select');
        select.name = name;
        select.classList.add('form-select', 'mb-3');

        select.setAttribute('aria-label', 'Default select example');

        options.forEach(optionValue => {
            const option = document.createElement('option');
            option.value = optionValue;
            option.textContent = optionValue;
            select.append(option);
        });

        selectContainer.append(select);
        this.form.append(selectContainer);
    }


    addRadio(name, value, label) {
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

    addTextarea(name, placeholder, label) {
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

    addButton(type, textContent, style) {
        const button = document.createElement('button');
        button.type = type;
        button.classList.add('btn', style, 'me-2', 'mb-2');
        button.textContent = textContent;
        this.form.append(button);
    }

    appendTo(container) {
        this.form.style.cssText = 'margin-left: 5%; margin-right: 5%; margin-top: 5px; margin-bottom: 5px; ' +
            'background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 10px; padding: 10px;';

        container.append(this.form);
    }
}

const myForm = new CustomForm('/submit', 'post');

myForm.form.name = 'buyForm';

myForm.addInput('text', 'username', 'Username', 'Name');
myForm.addSelect('city', ['Kharkov', 'Odessa', 'Dnepr', 'Kiev', 'Lvov'], 'City');

const inputContainer = document.createElement('div');
const inputWar = myForm.addInputReturn('number', 'warehouse', 'warehouse', 'Warehouse for dispatch');
const inputCity = myForm.addInputReturn('number', 'quantity', 'quantity', 'Quantity of product units');
inputWar.style.cssText = 'flex: 1; margin-right: 10px';
inputCity.style.cssText = 'flex: 1';

inputContainer.style.cssText = 'display: flex; align-items: center;';
inputContainer.append(inputWar);
inputContainer.append(inputCity);
myForm.form.append(inputContainer);

// myForm.addCheckbox('myCheck', '');
myForm.addRadio('paymentRadio', false, 'by credit card');
myForm.addRadio('paymentRadio', false, 'upon receipt');
myForm.addTextarea('comments', 'Enter your comments:', 'Comments:');
myForm.addButton('submit', 'Submit', 'btn-primary');

myForm.appendTo(document.body);

//console.log(myForm);
//console.log(document.forms);
//console.log(document.forms.buyForm.elements.username.form);
document.forms.buyForm.username.value = 123;
console.log(document.forms.buyForm.username.value);
// document.forms.example.name.value = 123;
// console.log(document.forms.example.name.value);
//const myCheckbox =
