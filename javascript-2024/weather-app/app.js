// DOM variables
const searchForm = document.querySelector("[data-name='search-form']");
const searchInput = document.querySelector("[data-name='search-input']");
const currentLocation = document.querySelector(
	"[data-name='current-location']"
);
const currentTemp = document.querySelector("[data-name='current-temp']");
const currentCondition = document.querySelector(
	"[data-name='current-condition'"
);
const lastUpdated = document.querySelector("[data-name='last-updated']");
const realFeel = document.querySelector("[data-name='real-feel']");
const precipitation = document.querySelector("[data-name='precipitation']");
const visibility = document.querySelector("[data-name='visibility']");
const humidityElement = document.querySelector("[data-name='humidity']");
const uvIndex = document.querySelector("[data-name='uv-index']");
const windElement = document.querySelector("[data-name='wind']");
const hourlyDataContainer = document.querySelector(
	"[data-name='hourly-data-container']"
);
const futureDataContainer = document.querySelector(
	"[data-name='future-data-container']"
);
// Logic Variables
const baseUrl = "http://api.weatherapi.com/v1/forecast.json?";
const key = "key=670bc90f8b734246bcc205010242003";

searchForm.addEventListener("submit", getForecast);

async function getForecast(e) {
	e.preventDefault();
	try {
		const url = `${baseUrl}${key}&q=${searchInput.value}&days=3&aqi=yes&alerts=no`;
		const response = await fetch(url);
		const data = await response.json();
		const { location, current, forecast } = data;
		if (response.status === 200) {
			updateCurrentData(location, current);
			updateHourlyForecast(forecast);
			updateFutureForecast(forecast);
			UpdateExtraData(current);
		}
	} catch (error) {
		console.log(error);
	}
}

function updateCurrentData(location, currentData) {
	const {
		last_updated,
		temp_c,
		condition,
		precip_mm,
		humidity,
		feelslike_c,
		vis_km,
		temp_f,
		precip_in,
		feelslike_f,
		vis_miles,
	} = currentData;

	currentLocation.textContent = `${location.name} / ${location.country}`;
	currentTemp.textContent = `${Math.round(+temp_c)}°`;
	currentCondition.textContent = condition.text;
	lastUpdated.textContent = last_updated;
	realFeel.textContent = `${Math.round(+feelslike_c)}°`;
	precipitation.textContent = precip_mm;
	visibility.textContent = `${vis_km} mi`;
	humidityElement.textContent = `${humidity}%`;
}

function updateHourlyForecast(forecast) {
	const { forecastday } = forecast;
	const firstDay = forecastday[0];
	const { hour: DayHoursArr } = firstDay;
	clearContainer(hourlyDataContainer);
	DayHoursArr.forEach((hour) => createHourlyDataBoxElement(hour));
}

function createHourlyDataBoxElement(hour) {
	const hours = hour.time.split(" ")[1];
	const dataBoxContainer = document.createElement("div");
	dataBoxContainer.classList.add("data-box");

	const time = document.createElement("p");
	time.classList.add("time");
	time.textContent = hours;
	const temp = document.createElement("p");
	temp.textContent = `${hour.temp_c}°`;
	temp.classList.add("data-box-temp");
	const icon = new Image();
	icon.classList.add("data-box-icon");
	icon.src = hour.condition.icon;

	dataBoxContainer.appendChild(time);
	dataBoxContainer.appendChild(temp);
	dataBoxContainer.appendChild(icon);
	hourlyDataContainer.appendChild(dataBoxContainer);
}

function updateFutureForecast(forecast) {
	const { forecastday } = forecast;
	clearContainer(futureDataContainer);
	forecastday.forEach((day) => createFutureDataBoxElement(day));
}
function createFutureDataBoxElement(day) {
	const date = new Date(day.date);
	const weekDay = date.toLocaleDateString("default", { weekday: "short" });

	const dataBoxContainer = document.createElement("div");
	dataBoxContainer.classList.add("data-box");

	const dayElement = document.createElement("p");
	dayElement.classList.add("data-box-day");
	dayElement.textContent = weekDay;

	const minMaxTemp = document.createElement("p");
	minMaxTemp.classList.add("min-max-temp");

	const minTemp = document.createElement("span");
	minTemp.classList.add("min-temp");
	minTemp.textContent = `${Math.round(+day.day.mintemp_c)}`;

	const maxTemp = document.createElement("span");
	maxTemp.classList.add("max-temp");
	maxTemp.textContent = `${Math.round(+day.day.maxtemp_c)} /`;

	minMaxTemp.appendChild(maxTemp);
	minMaxTemp.appendChild(minTemp);

	const avgTemp = document.createElement("p");
	avgTemp.classList.add("data-box-avg-temp");
	avgTemp.textContent = ` ${Math.round(+day.day.avgtemp_c)}°`;

	const icon = new Image();
	icon.classList.add("data-box-icon");
	icon.src = day.day.condition.icon;

	dataBoxContainer.appendChild(dayElement);
	dataBoxContainer.appendChild(minMaxTemp);
	dataBoxContainer.appendChild(avgTemp);
	dataBoxContainer.appendChild(icon);
	futureDataContainer.appendChild(dataBoxContainer);
}

function UpdateExtraData(current) {
	const { uv, wind_kph, wind_mph } = current;

	uvIndex.textContent = uv;
	windElement.textContent = `${wind_kph} km/h`;
}

function clearContainer(container) {
	while (container.firstChild) {
		container.firstChild.remove();
	}
}
