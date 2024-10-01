document.addEventListener('DOMContentLoaded', function() {
    buscarGeolocalizacao();
    document.querySelector('.btn-more').addEventListener('click', toggleForecastDetails);
});

// essa é a chamada da api de geolocalizacao gratuita que vamos usar

function buscarGeolocalizacao() {
    fetch('https://get.geojs.io/v1/ip/geo.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').textContent = data.city || 'Local Desconhecido';
            buscarClima(data.latitude, data.longitude);
        })
        .catch(error => {
            console.error("Erro ao obter dados de geolocalização: ", error);
            document.getElementById('cityName').textContent = 'Erro ao carregar a cidade';
        });
}

//essa é a chamada para a api gratuita para previsao do tempo

function buscarClima(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_min,temperature_2m_max,weathercode&timezone=auto`;
    fetch(url)
        .then(response => response.json())
        .then(data => exibirClima(data))
        .catch(error => console.error("Erro ao obter dados meteorológicos: ", error));
}

function exibirClima(data) {
    const current = data.current;
    document.getElementById('currentTemp').innerHTML = `<h1 class="temp-h1"><strong>${current.temperature_2m}°C</strong></h1>`;
    document.getElementById('currentDetails').textContent = `Vento ${current.wind_speed_10m} km/h`;

    const forecast = data.daily;
    let forecastHtml = '';
    forecast.time.slice(0, 5).forEach((day, index) => {
        const date = new Date(day);
        const dayName = date.toLocaleDateString('pt-BR', { weekday: 'long' });
        forecastHtml += `<li>
                            <h3><strong>${dayName}</strong></h3><br>
                            Min: ${forecast.temperature_2m_min[index]}°C<br>
                            Max: ${forecast.temperature_2m_max[index]}°C
                         </li>`;
    });
    document.getElementById('forecastList').innerHTML = forecastHtml;
    updateBackground(current.temperature_2m);
}

// aqui é onde muda a cor do backgroun e o icone da temperatura de acordo com clima

function updateBackground(temperature) {

    const body = document.body;
    const quente = document.querySelector('.quente');
    const frio = document.querySelector('.frio');
    const fresco = document.querySelector('.fresco');

    if (temperature < 10) {
        body.style.background = 'linear-gradient(to bottom, #a5b4fc, #647eed)'; // frio
        frio.classList.add('view');
    } else if (temperature >= 10 && temperature < 20) {
        body.style.background = 'linear-gradient(to bottom, #93c5fd, #60a5fa)'; // fresco
        fresco.classList.add('view');
    } else {
        body.style.background = 'linear-gradient(to bottom, #fde68a, #f59e0b)'; // quente
        quente.classList.add('view');
    }
}

//funcao pra mudar a visibilidade do botao de clima semanal

function toggleForecastDetails() {
    const forecastList = document.getElementById('forecastList');
    forecastList.classList.toggle('hidden');
    const btnText = document.querySelector('.btn-more span');
    const btnIcon = document.querySelector('.btn-more i');

    if (forecastList.classList.contains('hidden')) {
        btnText.textContent = 'Mais informações';
        btnIcon.classList.remove('fa-chevron-up');
        btnIcon.classList.add('fa-info-circle');
    } else {
        btnText.textContent = 'Menos informações';
        btnIcon.classList.remove('fa-info-circle');
        btnIcon.classList.add('fa-chevron-up');
    }
}
