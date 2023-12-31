const formConfig = {
    mainParam: {
        action: '#',
        method: 'post',
        name: 'forecastForm',
        title: 'Weather forecast',
    },

    main: ['temp', 'pressure', 'humidity'],

    radioCity: {
        name: 'locationType',
        value: 'city',
        label: 'City *',
    },
    radioCoordinates: {
        name: 'locationType',
        value: 'coordinates',
        label: 'Longitude & Latitude *',
    },


    selectCity: {
        type: '',
        name: 'city',
        options: ['Kharkov', 'Odessa', 'Dnepr', 'Kiev', 'Lviv', 'Warszawa'],
        label: 'City *',
    },

    inputLongitude: {
        type: 'number',
        name: 'longitude',
        placeholder: 'Enter Longitude',
        label: 'Longitude *',
        min: -180,
        max: 180,
    },

    inputLatitude: {
        type: 'number',
        name: 'latitude',
        placeholder: 'Enter Latitude',
        label: 'Latitude *',
        min: -90,
        max: 90,
    },

    weather: ['main', 'description', 'icon'],

    buttonSubmit: {
        type: 'submit',
        name: 'submitButton',
        textContent: 'Submit',
        style: 'btn-primary',
    },

    buttonReset: {
        type: 'button',
        name: 'resetButton',
        textContent: 'Reset',
        style: 'btn-secondary',
    },

};