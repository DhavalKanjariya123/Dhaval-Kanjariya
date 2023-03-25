

// var p = document.getElementById("qty-watch").value;
// 

// document.getElementById("product-qty").innerHTML=p;
// "#product-qty".change=q.value;



// function myFunction() {
//   let x = document.getElementById("qty-watch").value;
//   // document.getElementById("product-qty").innerHTML=x;
//   // localStorage.setItem("qty-watch", qty-watch.innerHTML);
// }

var quantity = document.getElementById("quantity");
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");

increment.onclick = function () {
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
    // Update the quantity on the other page using local storage
    localStorage.setItem("quantity", quantity.innerHTML);
}

decrement.onclick = function () {
    if (quantity.innerHTML > 0) {
        quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
        // Update the quantity on the other page using local storage
        localStorage.setItem("quantity", quantity.innerHTML);
    }
}


// let qty = document.getElementById("quantity").value;
// let qty1=parseInt("qty");
// if (qty1<1) {
//     console.log("hi");
// }
// else {
//     console.log("enter");
// }


let qty = document.getElementById("quantity").value;
let qty1 = parseInt("qty");
function clk() {

    if (qty1 == 0) {
        alert("enter your quentity");

    }
    // debugger;
    else {
        alert("enter");

    }
    

    

};
