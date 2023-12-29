'use strict'


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


const resultDiv = document.createElement('div');
resultDiv.classList.add('text-center');

document.body.append(resultDiv);

getOpenWeatherData().then(data => {
    if (data) {
        resultDiv.innerText = `Coordinates: (${data.coord.lon}, ${data.coord.lat})\n` + `Name: ${data.name}\n`
            + `Weather: ${data.weather[0].main}, ${data.weather[0].description}, ${data.weather[0].icon}\n`
            + `Main: Temperature - ${data.main.temp}, Pressure - ${data.main.pressure}, Humidity - ${data.main.humidity}\n`
            + `Wind: Speed - ${data.wind.speed}, Degree - ${data.wind.deg}`;
    }
});

const myForm = new CustomForm(formConfig.mainParam);
console.log(myForm);
myForm.addSelect(formConfig.selectCity);
myForm.addButton(formConfig.buttonSubmit);
myForm.addButton(formConfig.buttonClose);
myForm.appendTo(document.body);





async function getOpenWeatherData() {

    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?' +
            'q=Warszawa&appid=3ed5bec8217638d36046427c3b4a06d6&units=metric');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}





