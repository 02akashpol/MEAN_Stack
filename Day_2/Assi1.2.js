let ajaxFun = function () {

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users?page=2");

  xhr.onload = () => {

    let recvData = JSON.parse(xhr.responseText);

    console.log(recvData);

    domLogic(recvData);

  };

  xhr.send();

};

let domLogic = function (recvData) {

  let parentEle = document.querySelector("#parentBlock");

  for(let i = 0; i < recvData.data.length; i++) {

  const inptData = recvData.data[i];
    
  let newEle = parentEle.children[0].cloneNode(true);

  newEle.innerHTML = inptData.first_name + " " + inptData.last_name;

  parentEle.insertBefore(newEle, parentEle.firstChild);

  }

};

let ajaxXmlFun = function () {

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

  xhr.setRequestHeader("accept", "application/xml");

  xhr.onload = () => {

    let recvData = xhr.responseText;

    console.log(recvData);
    xmlDomLogic(recvData);

  };

  xhr.send();

};

let xmlDomLogic = (recvData) => {

  const inptData = recvData.querySelector("ArrayOfAuthor");
  console.log(inptData);

  for (let i = 0; i < recvData.children[0].length; i++) {

    let xmlInptData = inptData.children[i];

   
    let parentEle = document.querySelector("#parentBlock");


    let newEle = parentEle.children[0].cloneNode(true);

    newEle.innerHTML = xmlInptData.children[0].innerHTML + " " 
    + xmlInptData.children[3].innerHTML;

    parentEle.insertBefore(newEle, parentEle.firstChild);
  }
};