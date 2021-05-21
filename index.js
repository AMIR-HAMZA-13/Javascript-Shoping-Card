/*
// simple way

// for Black button plus button increase total Amount added
document.getElementById('black-phn-plus-btn').addEventListener('click', function(){
    const blackInput = document.getElementById('black-phn-input');
    const blackCount = parseInt(blackInput.value);
    const blackNewCount = blackCount + 1;
    blackInput.value = blackNewCount;
    const blackTotalAmount = blackNewCount  * 1219; 
    document.getElementById('black-phn-amount').innerText = '$' + blackTotalAmount;
});

//for Black button plus button decrement total Amount added
document.getElementById('black-phn-decrease').addEventListener('click', function(){
    const blackInput = document.getElementById('black-phn-input');
    const blackCount = parseInt(blackInput.value);
    const blackNewCount =blackCount -1;
    blackInput.value = blackNewCount;
    const blackTotalAmount = blackNewCount * 1219;
    document.getElementById('black-phn-amount').innerText = '$' + blackTotalAmount;

})
*/


// functionality way code simple
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount; // let for condition change able
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
}

// total calculate
function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const granTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + granTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}