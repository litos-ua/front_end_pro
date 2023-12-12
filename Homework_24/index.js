"use strict"

const configObj = {
    'ControlPanels' :  {
        'K923' : {
            'ScreenResolution' : '800x600',
            'RAM' : '1Gb',
            'ModBusChannel' : '1',
            'PowerVoltage' : '12V',
        },
        'K927' : {
            'ScreenResolution' : '1024x768',
            'RAM' : '1Gb',
            'ModBusChannel' : '1',
            'TCPChannel' : '1',
            'PowerVoltage' : '24V',
        },
        'K1021' : {
            'ScreenResolution' : '1280x720',
            'RAM' : '1Gb',
            'ModBusChannel' : '1',
            'TCPChannel' : '1',
            'PowerVoltage' : '24V',
        },
    },
    'Controllers' :  {
        'MK120.01' : {
            'NumberOfDigitalInputs' : '16',
            'NumberOfDigitalOutputs' : '32',
            'ModBusChannel' : '1',
            'PowerVoltage' : '24V',
        },
        'MK120.03' : {
            'NumberOfDigitalInputs' : '8',
            'NumberOfDigitalOutputs' : '16',
            'NumberOfAnalogInputs' : '2',
            'NumberOfAnalogOutputs' : '8',
            'ModBusChannel' : '1',
            'TCPChannel' : '1',
            'PowerVoltage' : '24V',
        },
        'MK120.05' : {
            'NumberOfDigitalInputs' : '8',
            'NumberOfDigitalOutputs' : '8',
            'NumberOfAnalogInputs' : '1',
            'NumberOfAnalogOutputs' : '4',
            'ModBusChannel' : '2',
            'PowerVoltage' : '12V',
        },
    },
    'PowerSupplies' :  {
        'DR-15-15' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '15V',
            'Power' : '15W',
        },
        'DR-15-5' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '5V',
            'Power' : '12W',
        },
        'DR-60-15' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '15V',
            'Power' : '60W',
        },
        'DR-75-12' : {
            'Type' : 'AC-DC',
            'InputVoltage' : '220V',
            'OutputVoltage' : '12V',
            'Power' : '75W',
        },
    },
};

document.addEventListener('DOMContentLoaded', function () {
    const divCategory = document.getElementById("div-category");
    const divProducts = document.getElementById("div-product");
    const divCharacteristics = document.getElementById("div-characteristics");

    [divCategory, divProducts, divCharacteristics].forEach(container => {
        container.style.cssText = 'display: flex; flex-direction: column; margin-bottom: 10px;';
    });

    for (const category in configObj) {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('btn', 'btn-primary', 'me-2', 'mb-2');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', () => showProducts(category));
        divCategory.append(categoryButton);
    }
    function showProducts(category) {
        divProducts.innerText = '';
        divCharacteristics.innerText = '';
        const products = configObj[category];

        for (const product in products) {
            const productButton = document.createElement('button');
            productButton.classList.add('btn', 'btn-success', 'me-2', 'mb-2');
            productButton.textContent = product;
            productButton.addEventListener('click', () => showCharacteristics(category, product));
            divProducts.append(productButton);
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
    }
});