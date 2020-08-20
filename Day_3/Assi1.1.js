let weatherFun = function () {

  let xhr = new XMLHttpRequest();

  let inptCity = document.querySelector("#inputCityName").value || "Satara";
  //console.log(inptCity);

  let url = "https://api.openweathermap.org/data/2.5/weather?appid=a8555049dd8e3e9f01c19cba2838fdb7&units=metric&q=" + inptCity;

  

  xhr.open("GET", url);

  xhr.onload = () => {

    const recvData = JSON.parse(xhr.responseText);

    console.log(recvData);

    weatherDomLogic(recvData);

  };

  xhr.send();

};

let weatherDomLogic = function (recvData) {

  let parentEle = document.querySelector("#parentBlock");

  let newEle = parentEle.children[0].cloneNode(true);

  let inptCity = recvData.name;
  console.log(inptCity);

  let inptTemp = recvData.main.temp;
  console.log(inptTemp);

  newEle.innerHTML = "CityName : " + inptCity + " " + "Avg Temp : " + inptTemp;

  parentEle.insertBefore(newEle, parentEle.firstChild);

  document.querySelector("#inputCityName").value = "";
  
};