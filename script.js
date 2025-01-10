const quantityElement = document.getElementById('quantity');


function minusQuantity(){
    const decreaseValue = document.getElementById('minusicon');
    decreaseValue.parseInt(innerText) = --minusQuantity;
    
}

function plusQuantity(){
    let quantity = parseInt(quantityElement.innerText)
    quantityElement.innerText = ++quantity;
}