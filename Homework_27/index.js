"use strict"


const containerDiv = document.createElement('div');
containerDiv.classList.add('container');

const headerContainer = document.createElement('header');
headerContainer.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'justify-content-md-between', 'py-3', 'mb-4', 'border-bottom');

const headerDiv1 = createSubContainer('col-md-4 col-lg-auto', 'Product list');
const headerDiv2 = createSubContainer('col-md-4 col-lg-auto', 'Search');
const headerDiv3 = createSubContainer('col-md-4 text-end', '');

const searchForm = document.createElement('form');
searchForm.classList.add('col-md-4', 'col-lg-auto');
searchForm.setAttribute('role', 'search');
const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'search');
searchInput.classList.add('form-control');
searchInput.setAttribute('placeholder', 'Search...');
searchInput.setAttribute('aria-label', 'Search');
searchForm.append(searchInput);
headerDiv2.append(searchForm);

const loginButtonContainer = createSubContainer('col-md-4 text-end', '');
const loginButton = createButton(loginButtonContainer, 'Login', 'btn-info',
    true, () => {});
const signupButton = createButton(loginButtonContainer, 'Sign-up', 'btn-warning',
    true, () => {});
headerDiv3.append(loginButtonContainer);

[headerDiv1, headerDiv2, headerDiv3].forEach(container => {
    headerContainer.append(container);
});
containerDiv.append(headerContainer);

const main = document.createElement('main');

main.classList.add('d-flex', 'flex-wrap', 'align-items-center', 'justify-content-center', 'justify-content-md-between', 'py-3', 'mb-4', 'border-bottom');

const divCategory = createSubContainer('div-category', 'Category');
const divProducts = createSubContainer('div-product', 'Product');
const divCharacteristics = createSubContainer('div-characteristics', 'Characteristics');

[divCategory, divProducts, divCharacteristics].forEach(container => {
    main.append(container);
});

[divCategory, divProducts, divCharacteristics].forEach(container => {
    container.style.cssText = 'display: flex; flex-direction: column; margin-bottom: 10px;';
});


containerDiv.append(main);
document.body.append(containerDiv);
document.body.style.backgroundColor = 'lightblue';


for (const category in configObj.categories) {
    createButton(divCategory, category, 'btn-primary',
        true, () => showProducts(category));
}

const orderListButton = createButton(divCategory, 'Orders', 'btn-warning',
    true,() => handleOrdersButtonClick());
orderListButton.style.marginTop = '30px';







function showProducts(category) {
    divProducts.innerText = '';
    divCharacteristics.innerText = '';
    const products = configObj.categories[category].Products;
    for (const product in products) {
        createButton(divProducts, product, 'btn-success', true,
            () => showCharacteristics(category, product));
    }
}


function showCharacteristics(category, product) {
    divCharacteristics.innerText = '';
    const characteristics = configObj.categories[category].Products[product];
    const characteristicsList = document.createElement('ul');

    for (const key in characteristics) {
        const characteristicItem = document.createElement('li');
        characteristicItem.textContent = `${key}: ${characteristics[key]}`;
        characteristicsList.append(characteristicItem);
    }

    divCharacteristics.append(characteristicsList);

    const buttonWrDiv = document.createElement('div');
    buttonWrDiv.style.textAlign = 'center';
    createButton(buttonWrDiv, 'Buy', 'btn-primary', true,
        () => handleFormButtonClick(category, product));
    divCharacteristics.append(buttonWrDiv);
    divCharacteristics.style.cssText = 'font-size: 16px; text-align: left;';
}

function showOrderDetails(storageKey) {

    const orderData = MyStorage.getData(storageKey);
    const popupWindow = window.open('', '_blank', 'width=500, height=400');
    popupWindow.document.body.style.cssText = `margin-left: 1%; padding-left: 5%; ` +
        `background-color: lightyellow; font-size: 24px;`;
    const orderDetailsContainer = document.createElement('div');

    for (const key in orderData) {
        const listItem = document.createElement('div');
        listItem.textContent = `${key}: ${orderData[key]}`;
        orderDetailsContainer.append(listItem);
    }

    // const deleteButton = document.createElement('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.style.cssText = 'margin-right: 10%; margin-left: 20%; margin-bottom: 2%; margin-top: 5%;' +
    //     'background-color: red; color: #fff; border: 1px solid #5bc0de; border-radius: 10px;' +
    //     'height: 10%; width: 15%; font-size: 16px;';
    // deleteButton.addEventListener('click', () => MyStorage.deleteData(storageKey));
    // orderDetailsContainer.append(deleteButton);
    //
    // const closeButton = document.createElement('button');
    // closeButton.textContent = 'Close';
    // closeButton.style.cssText = 'margin-left: 20%; margin-bottom: 2%; margin-top: 5%; background-color: #f8f9fa;' +
    //     'color: #000; border: 1px solid #dee2e6; border-radius: 10px; height: 10%; width: 15%; font-size: 16px;'
    // closeButton.addEventListener('click', () => popupWindow.close());
    // orderDetailsContainer.append(closeButton);

    createButton(orderDetailsContainer, 'Delete', 'margin-right: 10%; margin-left: 20%; ' +
        'margin-bottom: 2%; margin-top: 5%; background-color: red; color: #fff; border: 1px solid #5bc0de;' +
        ' border-radius: 10px; height: 10%; width: 15%; font-size: 16px;',false ,() =>
        {
            MyStorage.deleteData(storageKey);
            popupWindow.close()
        },
        );
    createButton(orderDetailsContainer, 'Close',
        'margin-left: 20%; margin-bottom: 2%; margin-top: 5%; background-color: #f8f9fa; color: #000;' +
        ' border: 1px solid #dee2e6; border-radius: 10px; height: 10%; width: 15%; font-size: 16px;',
        false, () => popupWindow.close(),);



    popupWindow.document.body.append(orderDetailsContainer);
}

// function createButton(container, text, styleClass, clickHandler) {
//     const button = document.createElement('button');
//     button.classList.add('btn', styleClass, 'me-2', 'mb-2');
//     button.textContent = text;
//     button.addEventListener('click', clickHandler);
//     container.append(button);
//     return button;
// }
//
// function createButtonOnPopup(container, text,  styles, clickHandler) {
//     const button = document.createElement('button');
//     button.textContent = text;
//     button.style.cssText = styles;
//     button.addEventListener('click', clickHandler);
//     container.append(button);
// }


function createButton(container, text,  styles, bootstrap = true,clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    bootstrap ? button.classList.add('btn', styles, 'me-2', 'mb-2') : button.style.cssText = styles;
    button.addEventListener('click', clickHandler);
    container.append(button);
    return button;
}


function handleBuyButtonClick(category, product) {
    divProducts.innerText = '';
    divCharacteristics.innerText = `Product ${product} in category: ${category} has been bought`;
    divCharacteristics.style.cssText = 'font-weight: bold; font-size: 18px; text-align: center;';
    const header4Products = document.createElement('h4');
    header4Products.innerText = 'Product';
    divProducts.append(header4Products);
}

function handleOrdersButtonClick() {
    divProducts.innerText = '';
    divCharacteristics.innerText = '';


    for (let i = 0; i < localStorage.length; i++) {
        const storageKey = localStorage.key(i);

        if (/^\d+$/.test(storageKey)) {
            const orderData = MyStorage.getData(storageKey);

            const orderListItem = document.createElement('li');
            orderListItem.addEventListener('mouseenter', () => {
                orderListItem.style.backgroundColor = 'lightyellow';
            });

            orderListItem.addEventListener('mouseleave', () => {
                orderListItem.style.backgroundColor = '';
            });

            orderListItem.addEventListener('click', () => showOrderDetails(storageKey));

            orderListItem.innerText = `Order: ${orderData['Number of order']} `;
            const priceDateSpan = document.createElement('span');
            priceDateSpan.innerText = `(Total price: ${orderData['Total price']}, Order Date: ${orderData['Order Date']})`;
            priceDateSpan.style.cssText = 'font-size: 16px; font-weight: normal; color: black;';
            orderListItem.appendChild(priceDateSpan);
            orderListItem.style.cssText = 'font-size: 18px; color: blue; font-weight: bold;';

            divProducts.append(orderListItem);
        }
    }
}


function createSubContainer(id, headingText) {
    const subContainer = document.createElement('div');
    subContainer.classList.add('col-md-4', 'col-lg-auto');
    subContainer.id = id;
    if (headingText !== 'Search'){
        const heading = document.createElement('h4');
        heading.textContent = headingText;
        subContainer.append(heading);
    }
    return subContainer;
}

function handleFormButtonClick(selectedCategory, selectedProduct) {
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


    const inputUsernameElement = currentForm.elements[formConfig.inputUsername.name];

    FormValidator.checkInputUsername(inputUsernameElement, /^[a-zA-Z\s-]+$/);
    FormValidator.maxLengthFields(
        [formConfig.inputWarehouse.name],
        data,
        currentForm
    );
    FormValidator.checkEmptyValue(requiredFields, data, currentForm, selectedProduct);


    currentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const allFieldsExist = requiredFields.every(fieldName => data.hasOwnProperty(fieldName))
        let fieldsExist;
        allFieldsExist ? fieldsExist = true : fieldsExist = false;

        if (fieldsExist) {
            setTimeout(() => {
                FormValidator.updateDisplayData(data, selectedCategory,selectedProduct);
                myForm.closeForm();
            }, 1000);
        }
    });

    createButton(currentForm, 'Close', formConfig.buttonClose.style, true,() => myForm.closeForm() );
}





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
        button.style.cssText = 'width: 10%; margin-left:45%';
        this.form.append(button);
    }

    appendTo(container) {
        this.form.style.cssText = 'margin-left: 15%; margin-right: 5%; margin-top: 5px; margin-bottom: 5px; ' +
            'background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 10px; padding: 10px;width: 70%';

        container.append(this.form);
    }

    closeForm() {
        this.form.remove();
    }

}



class FormValidator {
    static checkInputUsername(inputElement, regex) {
        inputElement.addEventListener('keypress', (e) => {
            const inputValue = e.key;
            if (!regex.test(inputValue)) {
                e.preventDefault();
            }
        });
    }

    static maxLengthFields(maxLength, data, currentForm) {
        for (const element of currentForm.elements) {
            if (element.type !== 'submit') {
                const eventType = element.type === 'checkbox' || element.type === 'radio' ? 'change' : 'input';
                element.addEventListener(eventType, (e) => {
                    data[e.currentTarget.name] = e.currentTarget.value;

                    if (maxLength.includes(e.currentTarget.name)) {
                        if (e.currentTarget.value.length > 3) {
                            e.currentTarget.classList.add('invalid');
                            alert(`${e.currentTarget.name} must not exceed 3 characters.`);
                            e.currentTarget.value = e.currentTarget.value.slice(0, -1);
                            data[e.currentTarget.name] = e.currentTarget.value
                        } else {
                            e.currentTarget.classList.remove('invalid');
                        }
                    }
                });
            }
        }
    }

    static checkEmptyValue(requiredFields, data, currentForm) {
        currentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emptyFields = requiredFields.filter(fieldName => !data[fieldName]);

            if (emptyFields.length > 0) {
                const emptyFieldsMessage = emptyFields
                    .map(fieldName => Object.values(formConfig).find(obj => obj.name === fieldName)?.label || '')
                    .join(', ');
                alert(`Please fill in all required fields: ${emptyFieldsMessage}`);
                return;
            }
        });

    }



    static updateDisplayData(data, selectedCategory,selectedProduct) {
        const price = configObj.categories[selectedCategory].Products[selectedProduct].Price;
        const margWidth = (window.screen.availWidth * 10) / 100;
        const margHeight = (window.screen.availHeight * 10) / 100
        const popupWindow = window.open('', '_blank', 'width=500, height=450, ' +
         `top=${margHeight}, left=${margWidth}`);
        const outInfContainer = document.createElement('div');
        popupWindow.document.body.style.cssText = `margin-left: 1%; padding-left: 1%; ` +
            `background-color: lightyellow; font-size: 24px;`;
        const titleElement = document.createElement('h4');

        titleElement.style.marginLeft = '10px';

        if (typeof (selectedProduct) !== "undefined" &&  typeof (data['city']) !== "undefined") {
            titleElement.textContent = `Information for placing an order selected Product: ${selectedProduct}`;
        }
        outInfContainer.append(titleElement);

        let orderCounter = localStorage.getItem('orderCounter');
        if (!orderCounter) {
            orderCounter = 0;
        } else {
            orderCounter = parseInt(orderCounter, 10);
        }

        localStorage.setItem('orderCounter', (++orderCounter).toString());

        const currentDate = new Date();
        const newData = {
            'Number of order': orderCounter,
            'ProductItem' : selectedProduct,
            'Total price': price * data['quantityOfProduct'],
            ...data,
            'Order Date': `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
        };

        const dataList = document.createElement('ul');
        dataList.style.marginLeft = '50px';


        for (const key in newData) {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${newData[key]}`;
            dataList.append(listItem);
        }

        outInfContainer.append(dataList);

        // const recordButton = document.createElement('button');
        // recordButton.textContent = 'Record';
        // recordButton.style.cssText = 'margin-right: 10%; margin-left: 20%; margin-bottom: 2%;' +
        //     'background-color: #5bc0de; color: #fff; border: 1px solid #5bc0de; border-radius: 10px;' +
        //     'height: 10%; width: 15%; font-size: 16px;';
        // recordButton.addEventListener('click', () => {
        //
        //     MyStorage.setData(orderCounter.toString(), newData);
        //     popupWindow.close();
        // });
        // outInfContainer.append(recordButton);



        // const cancelButton = document.createElement('button');
        // cancelButton.textContent = 'Cancel';
        // cancelButton.style.cssText = 'margin-left: 20%; background-color: #f8f9fa; color: #000;' +
        //     'border: 1px solid #dee2e6; border-radius: 10px; height: 10%; width: 15%; font-size: 16px;';
        // cancelButton.addEventListener('click', () => {
        //
        //     popupWindow.close();
        // });
        // outInfContainer.append(cancelButton);

        createButton(outInfContainer, 'Record',  'margin-right: 10%; margin-left: 20%; margin-bottom: 2%; background-color: #5bc0de; color: #fff;' +
            ' border: 1px solid #5bc0de; border-radius: 10px; height: 10%; width: 15%; font-size: 16px;', false,
            () => {
                MyStorage.setData(orderCounter.toString(), newData);
                popupWindow.close();
            });
        createButton(outInfContainer, 'Cancel',
            'margin-left: 20%; background-color: #f8f9fa; color: #000; border: 1px solid #dee2e6;' +
            ' border-radius: 10px; height: 10%; width: 15%; font-size: 16px;', false,() => popupWindow.close());


        popupWindow.document.body.append(outInfContainer);

    }

}


class MyStorage {
    static getData(storageKey) {
        const storedData = localStorage.getItem(storageKey);
        return storedData ? JSON.parse(storedData) : null;
    }

    static setData(storageKey, data) {
        try {
            const jsonString = JSON.stringify(data);
            localStorage.setItem(storageKey, jsonString);
            alert(`Data stored successfully with key: ${storageKey}`);
        } catch (error) {
            console.error(`An error storing data with key ${storageKey}:`, error);
            alert(`An error storing data with key ${storageKey}. Please try again.`);
        }
    }

    static deleteData(storageKey) {
        try {
            const confirmed = window.confirm(`Are you sure you want to delete order ${storageKey}?`);

            if (confirmed) {
                localStorage.removeItem(storageKey);
                alert(`Order ${storageKey} deleted successfully.`);
            } else {
                alert(`Deletion of order ${storageKey} canceled.`);
            }
        } catch (error) {
            console.error(`An error while deleting order ${storageKey}:`, error);
            alert(`An error while deleting order ${storageKey}. Please try again.`);
        }
    }
}