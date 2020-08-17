let parentEle = document.querySelector("#parentBlock");
console.log(parentEle);

window.addEventListener("load", () => {

  console.log("on load...");

  for (start = 0; start < 10; start++) {

    let parentEle = document.querySelector("#parentBlock");

    // cloning parent block to the new element
    let newEle = parentEle.children[0].cloneNode(true);

    newEle.style.display = "flex";

    // append to parent block
    parentEle.insertBefore(newEle, parentEle.firstChild);

  }

})