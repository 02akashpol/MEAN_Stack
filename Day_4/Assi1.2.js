document.querySelector("#parentBlock1");
<div id=​"parentBlock1" 

//class=​"parentBlock1">​…​</div>​

document.querySelector("#parentBlock1").children[0];

/* <div id=​"childBlock1">​
          Child-1.1
        ​</div>
*/        ​

document.querySelector("#parentBlock1").children[0].innerHTML;

/* "
          Child-1.1
        " 
*/

$("#parentBlock1");

/* jQuery.fn.init [div#parentBlock1.parentBlock1] */

$("#parentBlock1").children().first();

/* jQuery.fn.init [div#childBlock1, prevObject: jQuery.fn.init(3)] */

$("#parentBlock1").children().next();

/* jQuery.fn.init(2) [div#childBlock2, div#childBlock3, prevObject: jQuery.fn.init(3)] */

$("#parentBlock1").children().last();

/* jQuery.fn.init [div#childBlock3, prevObject: jQuery.fn.init(3)] */

$("#parentBlock1").children().next().next();

/* jQuery.fn.init [div#childBlock3, prevObject: jQuery.fn.init(2)] */

$(".parentBlock1");

/* jQuery.fn.init(2) [div#parentBlock1.parentBlock1, div#parentBlock2.parentBlock1, prevObject: jQuery.fn.init(1)] */

$(".parentBlock1 div:nth-child(1)");

/* jQuery.fn.init(2) [div#childBlock1, div#childBlock1, prevObject: jQuery.fn.init(1)] */

$(".parentBlock1 :nth-child(3)");

/* jQuery.fn.init [div#childBlock3, prevObject: jQuery.fn.init(1)] */

$(".parentBlock2");
/* jQuery.fn.init [div#parentBlock2.parentBlock2, prevObject: jQuery.fn.init(1)] */

$(".parentBlock2 :nth-child(1)").css("background-color", "royalblue");

/* jQuery.fn.init [div#childBlock1, prevObject: jQuery.fn.init(1)] */

$(".parentBlock2 :nth-child(1)").css("color", "white");

/* jQuery.fn.init [div#childBlock1, prevObject: jQuery.fn.init(1)] */

$("#parentBlock2 :nth-child(1)").css("font-size", "20px");

/* jQuery.fn.init [div#childBlock1, prevObject: jQuery.fn.init(1)] */

$("#parentBlock2 :nth-child(2)").css("font-family", "cursive");

/* jQuery.fn.init [div#childBlock2, prevObject: jQuery.fn.init(1)] */