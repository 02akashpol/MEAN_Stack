window.addEventListener("load", () => {

  let xhr = new XMLHttpRequest();
  
  xhr.open("GET", "https://reqres.in/api/users?page=2");

  xhr.onreadystatechange = () => {

    if (xhr.readyState === 4) {

      console.log(xhr.responseText);

      let recvData = JSON.parse(xhr.responseText);

      console.log(recvData.data);

      domLogic(recvData.data);
    }

  };

  xhr.send();

});

let domLogic = function (list) {

  let parentEle = document.querySelector("#parentBlock");

  for (let start = 0; start < list.length; start++) {

    let inptData = list[start];

    let newEle = parentEle.children[0].cloneNode(true);
    
    newEle.style.display = "flex";

    newEle.children[0].innerHTML = inptData.first_name + " " + inptData.last_name;
    
    parentEle.insertBefore(newEle, parentEle.firstChild);
  }
};