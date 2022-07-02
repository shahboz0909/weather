let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let wrapperBox = document.querySelector(".wrapper__box");


const renderWeather = function(enter) {
const html = `
<h1 class="region-name ms-5 mt-3 h1"><span>Region name:</span> ${enter.name}</h1>
<p class="Country ms-5  h2"><span>Country:</span> ${enter.sys.country}</p>
<p class="temperature ms-5  h2"><span>Temperature:</span>  ${enter.main.temp}  °C</p>
<p class="wind-speed ms-5 h2"><span>Speed: </span> ${enter.wind.speed} m/s</p>
`
wrapperBox.innerHTML = null
wrapperBox.insertAdjacentHTML("beforeend", html)
}



const callData = function(qwerty) {
let callApi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${qwerty}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
.then(coffe => coffe.json())
.then(data => renderWeather(data))
return callApi
}


elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let inputValue = elInput.value
    elInput.value = null
    callData(inputValue)
})