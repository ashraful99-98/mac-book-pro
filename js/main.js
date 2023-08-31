function updatePrice(id) {
    if (id === '8gb') {
        // update span price
        updateSpanText("extra-memoey-cost", 0);
    }
    else if (id === '16gb') {
        updateSpanText("extra-memoey-cost", 180);
    }
    else if (id === '256gb') {
        updateSpanText("extra-storage-cost", 0);
    }
    else if (id === '512gb') {
        updateSpanText("extra-storage-cost", 100);
    }
    else if (id === '1tb') {
        updateSpanText("extra-storage-cost", 180);
    }
    else if (id === 'free') {
        updateSpanText("delivery-cost", 0);
    }
    else if (id === 'cost') {
        updateSpanText("delivery-cost", 20);
    }
    subTotal();
}
// updata span tag 
function updateSpanText(id, price) {
    document.getElementById(id).innerText = price;
}
function getSpanText(id) {
    const price = document.getElementById(id).innerText;
    return parseInt(price);

}

function subTotal() {
    const total = 1299 + getSpanText("extra-memoey-cost") + getSpanText("extra-storage-cost") + getSpanText("delivery-cost");
    updateSpanText("best-total-price", total);
    updateSpanText("discount-total", total);
}

function couponHandel() {
    const couponCode = document.getElementById('pomo-code').value;
    if (couponCode === 'stevekaku') {
        const total = getSpanText("best-total-price");
        const discountTotal = total * .80;
        updateSpanText('discount-total', discountTotal);
    }
}