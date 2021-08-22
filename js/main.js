const memory8GbInput = document.getElementById('memory-8gb-input')

const memory16GbInput = document.getElementById('memory-16gb-input')

const extraMemoryCost = document.getElementById('extra-memoey-cost')

const bestTotalPrice = document.getElementById('best-total-price');

const totalFinalPrice = document.getElementById('total-price');
// Memory 
memory8GbInput.addEventListener('click', function () {
    extraMemoryCost.innerText = "0";
    updateTotal()
})
memory16GbInput.addEventListener('click', function () {
    extraMemoryCost.innerText = "180";
    updateTotal()
})
// Storage 
const storage256GbInput = document.getElementById('storage-input-256gb');

const storage512GbInput = document.getElementById('storage-input-512gb');

const storage1TbInput = document.getElementById('storage-input-1tb');

const extraStorageCost = document.getElementById('extra-storage-cost');

storage256GbInput.addEventListener('click', function () {
    extraStorageCost.innerText = "0";
    updateTotal()
})
storage512GbInput.addEventListener('click', function () {
    extraStorageCost.innerText = "100";
    updateTotal()
})
storage1TbInput.addEventListener('click', function () {
    extraStorageCost.innerText = "180";
    updateTotal()
})
// Delivery Cost 
const freeCostInput = document.getElementById('free-delivery');

const deliveryCostInput = document.getElementById('cost-delivery');

const deliveryCost = document.getElementById('delivery-cost');

freeCostInput.addEventListener('click', function () {
    deliveryCost.innerText = "0";
    updateTotal()
})
deliveryCostInput.addEventListener('click', function () {
    deliveryCost.innerText = "20";
    updateTotal()
})
function updateTotal() {
    //  extra memory 
    const extraMemory = parseInt(extraMemoryCost.innerText);
    const deliveryBestTotal = parseInt(bestTotalPrice.innerText);
    const memoryTotal = extraMemory + deliveryBestTotal;
    bestTotalPrice.innerText = memoryTotal;
    // extra storage 
    const extraStorage = parseInt(extraStorageCost.innerText);
    const storageTotal = extraStorage + deliveryBestTotal;
    bestTotalPrice.innerText = storageTotal;
    // deliveryCost 
    const deliveryCostTotal = parseInt(deliveryCost.innerText);
    const costTotal = deliveryCostTotal + deliveryBestTotal;
    bestTotalPrice.innerText = costTotal;
}
function updateFinalTotal() {
    // extra memory 
    const extraMemory = parseInt(extraMemoryCost.innerText);
    const finalTotal = parseFloat(totalFinalPrice.innerText);
    const memoryTotal = extraMemory + finalTotal;
    totalFinalPrice.innerText = memoryTotal;
    // extra storage 
    const extraStorage = parseInt(extraStorageCost.innerText);
    const storageTotal = extraStorage + finalTotal;
    totalFinalPrice.innerText = storageTotal;
    // delivery cost 
    const deliveryCostTotal = parseInt(deliveryCost.innerText);
    const deliveryTotal = deliveryCostTotal + totalFinalPrice;
    totalFinalPrice.innerText = deliveryTotal;
}


