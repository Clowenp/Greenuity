 console.log("ok")

 var level = 1
 var balance = 20000
 var tasksAvailable = 10

 function changeValueLevel(){
    var levelDisplay = document.getElementById("levelElement")
    levelDisplay.innerHTML=(level)
 }
 changeValueLevel()

 function changeBalanceValue(){
    var balanceDisplay = document.getElementById("balanceElement")
    let text1 = "$"
    balanceDisplay.innerHTML=(text1.concat(balance-20000))
 }
 changeBalanceValue()

 function tasksValue(){
    var balanceDisplay = document.getElementById("taskElement")
    let text1 = "4"
    balanceDisplay.innerHTML=(text1.concat(" ", "Available"))
 }
 tasksValue()

 function addLevel(){
    level += 1
 }

 //Goal Page
 function completeGoal1(){
    balance += 5000
    var goal1Button = document.getElementById("goal1")
    goal1Button.innerText=("Completed!")
 }
 function completeGoal2(){
    balance += 5000
    var goal2Button = document.getElementById("goal2")
    goal2Button.innerText=("Completed!")
 }
 function completeGoal3(){
    balance += 5000
    var goal3Button = document.getElementById("goal3")
    goal3Button.innerText=("Completed!")
 }
 function completeGoal4(){
    balance += 5000
    var goal4Button = document.getElementById("goal4")
    goal4Button.innerText=("Completed!")
 }

 //Upgrade Page
 function buyAppartment(){
    if(balance>=20000){
        var buyAppartmentButton = document.getElementById("buy-appartment")
        balance = balance-20000
        buyAppartmentButton.innerText=("Bought")
    }else{
        var buyAppartmentButton = document.getElementById("buy-appartment")
        buyAppartmentButton.innerText=("Not Enough Money!")
    }
 }

 function buyBungalow(){
    if(balance>=50000){
        var buyAppartmentButton = document.getElementById("buy-bungalow")
        balance = balance-50000
        buyAppartmentButton.innerText=("Bought")
    }else{
        var buyAppartmentButton = document.getElementById("buy-bungalow")
        buyAppartmentButton.innerText=("Not Enough Money!")
    }
 }

 function buy3Bed(){
    if(balance>=100000){
        var buyAppartmentButton = document.getElementById("buy-3bed")
        balance = balance-100000
        buyAppartmentButton.innerText=("Bought")
    }else{
        var buyAppartmentButton = document.getElementById("buy-3bed")
        buyAppartmentButton.innerText=("Not Enough Money!")
    }
 }

 function buy5Bed(){
    if(balance>=1000000){
        var buyAppartmentButton = document.getElementById("buy-5bed")
        balance = balance-1000000
        buyAppartmentButton.innerText=("Bought")
    }else{
        var buyAppartmentButton = document.getElementById("buy-5bed")
        buyAppartmentButton.innerText=("Not Enough Money!")
    }
 }

 function buyMansion(){
    if(balance>=15000000){
        var buyAppartmentButton = document.getElementById("buy-mansion")
        balance = balance-15000000
        buyAppartmentButton.innerText=("Bought")
    }else{
        var buyAppartmentButton = document.getElementById("buy-mansion")
        buyAppartmentButton.innerText=("Not Enough Money!")
    }
 }



 