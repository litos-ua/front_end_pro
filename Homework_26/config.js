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
        label: 'Name',
    },
    selectCity: {
        name: 'city',
        options: ['Kharkov', 'Odessa', 'Dnepr', 'Kiev', 'Lvov'],
        label: 'City Label',
    },
    inputWarehouse: {
        type: 'number',
        name: 'warehouse',
        placeholder: 'Warehouse for dispatch',
        label: 'Warehouse Label',
    },
    inputQuantity: {
        type: 'number',
        name: 'quantity',
        placeholder: 'quantity',
        label: 'Quantity of product units',
    },
    radioByCreditCard: {
        name: 'paymentRadio',
        value: 'by credit card',
        label: 'by credit card',
    },
    radioUponReceipt: {
        name: 'paymentRadio',
        value: 'upon receipt',
        label: 'upon receipt',
    },
    textareaComments: {
        name: 'comments',
        placeholder: 'Enter your comments:',
        label: 'Comments:',
    },
    checkBox: {
        name: 'comments',
        label: 'Comments:',
    },
    buttonSubmit: {
        type: 'submit',
        name: 'submitButton',
        textContent: 'Submit',
        style: 'btn-primary',
    },
};