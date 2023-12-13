"use strict"

const configObj = {
    'ControlPanels' :  {
        'K923' : {
            'ScreenResolution' : '800x600',
            'RAM' : '1Gb',
            'ModBusChannel' : '1',
            'PowerVoltage' : '12V',
            'Price' : '190',
        },
        'K927' : {
            'ScreenResolution' : '1024x768',
            'RAM' : '1Gb',
            'ModBusChannel' : '1',
            'TCPChannel' : '1',
            'PowerVoltage' : '24V',
            'Price' : '550',
        },
        'K1021' : {
            'ScreenResolution' : '1280x720',
            'RAM' : '1Gb',
            'ModBusChannel' : '1',
            'TCPChannel' : '1',
            'PowerVoltage' : '24V',
            'Price' : '790',
        },
    },
    'Controllers' :  {
        'MK120.01' : {
            'NumberOfDigitalInputs' : '16',
            'NumberOfDigitalOutputs' : '32',
            'ModBusChannel' : '1',
            'PowerVoltage' : '24V',
            'Price' : '150',
        },
        'MK120.03' : {
            'NumberOfDigitalInputs' : '8',
            'NumberOfDigitalOutputs' : '16',
            'NumberOfAnalogInputs' : '2',
            'NumberOfAnalogOutputs' : '8',
            'ModBusChannel' : '1',
            'TCPChannel' : '1',
            'PowerVoltage' : '24V',
            'Price' : '390',
        },
        'MK120.05' : {
            'NumberOfDigitalInputs' : '8',
            'NumberOfDigitalOutputs' : '8',
            'NumberOfAnalogInputs' : '1',
            'NumberOfAnalogOutputs' : '4',
            'ModBusChannel' : '2',
            'PowerVoltage' : '12V',
            'Price' : '420',
        },
    },
    'PowerSupplies' :  {
        'DR-15-15' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '15V',
            'Power' : '15W',
            'Price' : '19',
        },
        'DR-12-5' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '5V',
            'Power' : '12W',
            'Price' : '15',
        },
        'DR-60-15' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '15V',
            'Power' : '60W',
            'Price' : '25',
        },
        'DR-75-12' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '12V',
            'Power' : '75W',
            'Price' : '27',
        },
    },
};


document.addEventListener('DOMContentLoaded', function () {
    const containerDiv = document.querySelector('.container');

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
    const loginButton = createButton(loginButtonContainer, 'Login', 'btn-info', () => {});
    const signupButton = createButton(loginButtonContainer, 'Sign-up', 'btn-warning', () => {});
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


    for (const category in configObj) {
        createButton(divCategory, category, 'btn-primary', () => showProducts(category));
    }

    function showProducts(category) {
        divProducts.innerText = '';
        divCharacteristics.innerText = '';
        const products = configObj[category];
        for (const product in products) {
            createButton(divProducts, product, 'btn-success', () => showCharacteristics(category, product));
        }
    }


    function showCharacteristics(category, product) {
        divCharacteristics.innerText = '';
        const characteristics = configObj[category][product];
        const characteristicsList = document.createElement('ul');

        for (const key in characteristics) {
            const characteristicItem = document.createElement('li');
            characteristicItem.textContent = `${key}: ${characteristics[key]}`;
            characteristicsList.append(characteristicItem);
        }

        divCharacteristics.append(characteristicsList);

        const buttonWrDiv = document.createElement('div');
        buttonWrDiv.style.textAlign = 'center';
        createButton(buttonWrDiv, 'Buy', 'btn-primary', () => handleBuyButtonClick(category, product));

        divCharacteristics.append(buttonWrDiv);
        divCharacteristics.style.cssText = 'font-size: 16px; text-align: left;';
    }

    function createButton(container, text, style, clickHandler) {
        const button = document.createElement('button');
        button.classList.add('btn', style, 'me-2', 'mb-2');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        container.append(button);
        return button;
    }

    function handleBuyButtonClick(category, product) {
        divProducts.innerText = '';
        divCharacteristics.innerText = `Product ${product} in category: ${category} has bought`;
        divCharacteristics.style.cssText = 'font-weight: bold; font-size: 18px; text-align: center;';
        const header4Products = document.createElement('h4');
        header4Products.innerText = 'Product';
        divProducts.append(header4Products);
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
});
