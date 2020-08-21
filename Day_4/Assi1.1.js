let jQueryAjaxFun = function () {

  var inptCity = document.querySelector("#inptCity").value || "satara";

  var inptCity = inptCity.toLowerCase();

  let url = "https://api.openweathermap.org/data/2.5/weather?appid=a8555049dd8e3e9f01c19cba2838fdb7&units=metric&q=" + inptCity;

  $.ajax(url).done((inptData) => {

    jQueryAjaxFunLogic(inptData);

  });

};

let jQueryAjaxFunLogic = function (inptData) {

  let parentEle = document.querySelector("#parentBlock");

  let newEle = parentEle.children[0];

  newEle.innerHTML = "City Name : " + inptData.name + " " + "Avg Temp : " 
  + inptData.main.temp;
  newEle.style.display = "flex";

  parentEle.appendChild(newEle, parentEle.firstChild);

};