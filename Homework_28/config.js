const formConfig = {
    mainParam: {
        action: '#',
        method: 'post',
        name: 'forecastForm',
        title: 'Weather forecast',
    },

    main: ['temp', 'pressure', 'humidity'],

    selectCity: {
        name: 'city',
        options: ['Kharkov', 'Odessa', 'Dnepr', 'Kiev', 'Lvov', 'Warszawa'],
        label: 'City *',
    },

    inputLocation: {
        name: 'location',
        options: ['Longitude', 'Latitude'],
        label: 'City *',
    },

    weather: ['main', 'description', 'icon'],

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