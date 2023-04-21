
// var quantity = document.getElementById("product-qty");
// quantity.innerHTML = localStorage.getItem("qty-watch");



// var quantity = document.getElementById("product-qty");
// // Get the quantity from local storage
// quantity.innerHTML = localStorage.getItem("qty");



// quantity.innerHTML = localStorage.getItem("quantity");
// let qtycart = document.getElementById("product-qty").value;




// document.write("#product-subtotal").innerHTML=crt();


function calculateTotal() {
    
    const quantity = document.getElementById("product-qty-watch").value;
    
    const price = document.getElementById("product-price").value;
    
    const total = quantity * price;
    document.getElementById("product-subtotal").value = total;
    document.getElementById("final-total").value=total;
    // document.getElementsByClassName("final-total1").value=total;
  }
  

 