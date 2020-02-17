var path = require('path');

function deliveryFood(id) {
    console.log("request food delvery", id)
}
function orderFood(userId, time) {
    console.log("request order id", userId);
    setTimeout(() => {
        deliveryFood(userId);
    }, time)

}


orderFood(1, 5000);
orderFood(2, 1000);
orderFood(3, 3000);
orderFood(4, 500);
