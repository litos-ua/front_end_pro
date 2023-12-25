
const configObj = {
    'categories': {
        'ControlPanels': {
            'Products':
                {
                    'K923': {
                        'ScreenResolution': '800x600',
                        'RAM': '1Gb',
                        'ModBusChannel': '1',
                        'PowerVoltage': '12V',
                        'Price': '190',
                    },
                    'K927': {
                        'ScreenResolution': '1024x768',
                        'RAM': '1Gb',
                        'ModBusChannel': '1',
                        'TCPChannel': '1',
                        'PowerVoltage': '24V',
                        'Price': '550',
                    },
                    'K1021': {
                        'ScreenResolution': '1280x720',
                        'RAM': '1Gb',
                        'ModBusChannel': '1',
                        'TCPChannel': '1',
                        'PowerVoltage': '24V',
                        'Price': '790',
                    },
                },
        },
        'Controllers': {
            'Products':
                {
                    'MK120.01': {
                        'NumberOfDigitalInputs': '16',
                        'NumberOfDigitalOutputs': '32',
                        'ModBusChannel': '1',
                        'PowerVoltage': '24V',
                        'Price': '150',
                    },
                    'MK120.03': {
                        'NumberOfDigitalInputs': '8',
                        'NumberOfDigitalOutputs': '16',
                        'NumberOfAnalogInputs': '2',
                        'NumberOfAnalogOutputs': '8',
                        'ModBusChannel': '1',
                        'TCPChannel': '1',
                        'PowerVoltage': '24V',
                        'Price': '390',
                    },
                    'MK120.05': {
                        'NumberOfDigitalInputs': '8',
                        'NumberOfDigitalOutputs': '8',
                        'NumberOfAnalogInputs': '1',
                        'NumberOfAnalogOutputs': '4',
                        'ModBusChannel': '2',
                        'PowerVoltage': '12V',
                        'Price': '420',
                    },
                },
        },
        'PowerSupplies': {
            'Products':
                {
                    'DR-15-15': {
                        'Type': 'AC-DC',
                        'InputVoltage': '220V',
                        'OutputVoltage': '15V',
                        'Power': '15W',
                        'Price': '19',
                    },
                    'DR-12-5': {
                        'Type': 'AC-DC',
                        'InputVoltage': '220V',
                        'OutputVoltage': '5V',
                        'Power': '12W',
                        'Price': '15',
                    },
                    'DR-60-15': {
                        'Type': 'AC-DC',
                        'InputVoltage': '220V',
                        'OutputVoltage': '15V',
                        'Power': '60W',
                        'Price': '25',
                    },
                    'DR-75-12': {
                        'Type': 'AC-DC',
                        'InputVoltage': '220V',
                        'OutputVoltage': '12V',
                        'Power': '75W',
                        'Price': '27',
                    },
                },
        },
    }
};


const formConfig = {
    main: {
        action: '#',
        method: 'post',
        name: 'buyForm',
        title: 'Product and delivery information',
    },
    inputUsername: {
        type: 'text',
        name: 'username',
        placeholder: 'Username',
        label: 'Name *',
    },
    selectCity: {
        name: 'city',
        options: ['Kharkov', 'Odessa', 'Dnepr', 'Kiev', 'Lvov'],
        label: 'City *',
    },
    inputWarehouse: {
        type: 'number',
        name: 'warehouse',
        placeholder: 'Warehouse for dispatch',
        label: 'Warehouse *',
    },
    inputQuantity: {
        type: 'number',
        name: 'quantityOfProduct',
        placeholder: 'quantity',
        label: 'Quantity of product units *',
    },
    radioByCreditCard: {
        name: 'paymentForm',
        value: 'by credit card',
        label: 'By credit card *',
    },
    radioUponReceipt: {
        name: 'paymentForm',
        value: 'upon receipt',
        label: 'Upon receipt *',
    },
    textareaComments: {
        name: 'comments',
        placeholder: 'Enter your comments:',
        label: 'Comments:',
    },
    checkBox: {
        name: 'comments',
        label: 'Check:',
    },
    buttonSubmit: {
        type: 'submit',
        name: 'submitButton',
        textContent: 'Submit',
        style: 'btn-primary',
    },
    buttonClose: {
        type: 'button',
        name: 'closeButton',
        textContent: 'Close',
        style: 'btn-secondary',
    },
};