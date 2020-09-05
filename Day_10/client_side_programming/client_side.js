let submitGetFun1 = () => {

  const username = document.querySelector("#usernameId");
  const password = document.querySelector("#passwordId");
  const email = document.querySelector("#emailId");
  const mobile_no = document.querySelector("#mobileId");

  // http://localhost:3000/addrecord?username=value1&password=value2&email=value3&mobile=value4

  /*
  let url = "http://localhost:3000/addrecord?";
  url += "username" + username + "&";
  url += "password" + password + "&";
  url += "email" + email + "&";
  url += "mobile" + mobile;
  */

  let url = `http://localhost:3000/addrecord?username=${username}&password=${password}&email=${email}&mobile=${mobile_no}`;

  let xhr = new XMLHttpRequest();
  
  xhr.open("GET", url);

  xhr.onload = () => {

    const recvData = xhr.responseText;

    console.log(recvData);

    document.querySelector("#usernameId");
    document.querySelector("#passwordId");
    document.querySelector("#emailId");
    document.querySelector("#mobileId");  

  };

  xhr.send();

};

let submitPostFun = async () => {

  const username = document.querySelector("#usernameId").value;
  const password = document.querySelector("#passwordId").value;
  const email = document.querySelector("#emailId").value;
  const mobile = document.querySelector("#mobileId").value;
  console.log(username);
  console.log(password);
  console.log(email);
  console.log(mobile);

  // url = `http://localhost:3000/adddata?username=${username}&password=${password}&email=${email}&mobile=${mobile_no}`;

  const input = {
    username : username,
    password,
    email,
    mobile
  };

  const url = "http://localhost:3000/adddata";

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    }

  });

  
  document.querySelector("#usernameId").value = "";
  document.querySelector("#passwordId").value = "";
  document.querySelector("#emailId").value = "";
  document.querySelector("#mobileId").value = "";

};

let submitGetFun = async () => {

  const email = document.querySelector("#emailId").value;
  console.log(email);

  let url = "http://localhost:3000/getdata"

  const input = {

    email
  };

  await fetch (url, {

    method: "POST",
    body: JSON.stringify(input),
    headers : {

      "Content-Type" : "application/json"
    }

  });

  document.querySelector("#emailId").value = "";

};