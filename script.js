const quantityElement = document.getElementById('quantity');

function minusQuantity(){
   let quantity = parseInt(quantityElement.innerText);
   if(quantity>1){
    quantityElement.innerText = --quantity;
}
}

function plusQuantity(){
    let quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = ++quantity;
}