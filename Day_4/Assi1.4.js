let jQueryAjaxFun = function () {

  var inptCity = $("#inptCity").val() || "satara";

  var inptCity = inptCity.toLowerCase();

  let url = "https://api.openweathermap.org/data/2.5/weather?appid=a8555049dd8e3e9f01c19cba2838fdb7&units=metric&q=" + inptCity;

  $.ajax(url).done((recvData) => {

    console.log($("#parentBlock div:nth-child(1)"));

    $("#parentBlock div:nth-child(1)")
    .html(recvData.name + " " + recvData.main.temp)
    .css("display", "flex")
    /* .insertBefore($("#parentBlock div:nth-child(1)")) */
    .append($("#parentBlock div:nth-child(1)"))
    .css("font-size", "80px")
    .css("color", "white")
    .css("font-family", "cursive")
    .css("background-opacity", "0.8");

    //console.log((recvData.name + " " + recvData.main.temp));

    //console.log(recvData);

    $("#inptCity").val("");

  });

}