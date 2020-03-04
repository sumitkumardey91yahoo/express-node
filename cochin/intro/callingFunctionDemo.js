

function getOrder(user) {
   console.log("getOrder", user)
}

function requestOrder(user, time) {
    console.log("requestOrder", user);

    setTimeout(() => {
        getOrder(user);
    }, time)
  
}

requestOrder(1, 3000)
requestOrder(2, 2000)
requestOrder(3, 4000)

