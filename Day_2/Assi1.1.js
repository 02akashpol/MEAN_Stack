let ajaxFun = function () {

  let xhr = new XMLHttpRequest();

  xhr.onload = () => {

    const recvData = JSON.parse(xhr.responseText);

    domLogic(recvData);

  };

  xhr.open("GET", "https://reqres.in/api/users?page=2");

  xhr.send();

};

let domLogic = function (recvData) {

  let parentEle = document.querySelector("#parentBlock");

  for (let i = 0; i < recvData.data.length; i++) {

    const inptData = recvData.data[i];

    let newEle = parentEle.children[0].cloneNode(true);

    newEle.innerHTML = inptData.first_name + " " + inptData.last_name;

    parentEle.insertBefore(newEle, parentEle.firstChild);
  }
};