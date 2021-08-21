// calculate the memory cost 
function calculateMemoryCost(is8gb) {
    const memory = document.getElementById('memory-cost');
    if (is8gb) {
        memory.innerText = 0;
    }
    else {
        memory.innerText = 180;
    }
    total();
}

//Storage cost 
function calculateStorageCost(x) {
    const storage = document.getElementById('storage-cost');
    if (x == 256) {
        storage.innerText = 0;
    }
    else if (x == 512) {
        storage.innerText = 100;
    }
    else if (x == 1) {
        storage.innerText = 180;
    }
    total();
}

//delivery cost
function deliveryCost(isFree) {
    const delivery = document.getElementById('delivery-cost');
    if (isFree) {
        delivery.innerText = 0;
    }
    else {
        delivery.innerText = 20;
    }
    total();
}

//total amount
function total() {
    const total = document.getElementById('total-cost');
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalAmount = 1299 + memoryCost + storageCost + deliveryCost;
    total.innerText = totalAmount;
    const grandtotal = document.getElementById('grand-total-cost');
    grandtotal.innerText = totalAmount;


}
// 8gb memory event handler
document.getElementById('8gb-memory').addEventListener('click', function () {
    calculateMemoryCost(true);


})
// 16gb memory event handler
document.getElementById('16gb-memory').addEventListener('click', function () {
    calculateMemoryCost();

})

//256GB SSD event handler
document.getElementById('256gb-ssd').addEventListener('click', function () {
    calculateStorageCost(256);

})

//512GB SSD event handler
document.getElementById('512gb-ssd').addEventListener('click', function () {
    calculateStorageCost(512);
})

//1TB SSD event handler
document.getElementById('1tb-ssd').addEventListener('click', function () {
    calculateStorageCost(1);

})

//free delivery cost event handler
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCost(true);

})

//unfree delivery cost event handler
document.getElementById('unFree-delivery').addEventListener('click', function () {
    deliveryCost();
})

//promo apply button event handler
document.getElementById('promo-apply-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    promoInputText = (promoInput.value).toLowerCase();
    promoInput.value = '';
    const promocode = 'stevekaku';
    if (promoInputText == promocode) {
        const grandtotal = document.getElementById('grand-total-cost');
        const previousGrandtotal = parseInt(grandtotal.innerText);
        grandtotal.innerText = (previousGrandtotal * 8) / 10;
    }
})
