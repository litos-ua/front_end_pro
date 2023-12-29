async function getOpenWeatherData() {

        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?' +
                'q=Warszawa&appid=3ed5bec8217638d36046427c3b4a06d6&units=metric');
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('text-center');

    document.body.appendChild(resultDiv);

    getOpenWeatherData().then(data => {
        if (data) {
            resultDiv.innerText = `Coordinates: (${data.coord.lon}, ${data.coord.lat})\n` + `Name: ${data.name}\n`
                + `Weather: ${data.weather[0].main}, ${data.weather[0].description}, ${data.weather[0].icon}\n`
                + `Main: Temperature - ${data.main.temp}, Pressure - ${data.main.pressure}, Humidity - ${data.main.humidity}\n`
                + `Wind: Speed - ${data.wind.speed}, Degree - ${data.wind.deg}`;
        }
    });

getOpenWeatherData();