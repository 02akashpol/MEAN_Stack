let parentEle = document.querySelector("#parentBlock");
console.log(parentEle);

window.addEventListener("load", () => {

  console.log("on load...");

  let list = [
    {id: 01, title: "JavaScript"},
    {id: 01, title: "HTML"},
    {id: 02, title: "CSS"},
    {id: 01, title: "HTTP"},
    {id: 01, title: "DOM"},
    {id: 02, title: "AJAX"},
    {id: 02, title: "JSON"},
  ];

  for (start = 0; start < list.length; start++) {

    let inptData = list[start];

    let parentEle = document.querySelector("#parentBlock");

    // cloning parent block to the new element
    let newEle = parentEle.children[0].cloneNode(true);

    newEle.style.display = "flex";

    //newEle.children[0].innerHTML = (inptData.id, " ", inptData.title);
    newEle.children[0].innerHTML = inptData.title;

    // append to parent block
    parentEle.insertBefore(newEle, parentEle.firstChild);

  }

})