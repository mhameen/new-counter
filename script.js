let rootEl = document.getElementById("root")

let countEl = document.createElement("h1")
countEl.innerText = 0;

let incrementBtn = document.createElement("button")
incrementBtn.setAttribute("onClick" , "increment()")
incrementBtn.innerText = "increment"

let decrementBtn = document.createElement("button")
decrementBtn.setAttribute("onClick" , "decrement()")
decrementBtn.innerText ="decrement"

let resetBtn = document.createElement("button")
resetBtn.setAttribute("onClick" , "reset()")
resetBtn.innerText ="reset"

rootEl.appendChild(countEl)
rootEl.appendChild(incrementBtn)
rootEl.appendChild(decrementBtn)
rootEl.appendChild(resetBtn)





function increment(){
    // let countEl = document.getElementById("number")
    let currentCount= countEl.innerText;
    let updatedCount=parseInt(currentCount)+1 ;
    countEl.innerText = updatedCount;
}
function decrement(){
    // let countEl = document.getElementById("number")
    let currentCount= countEl.innerText;
    let updatedCount=parseInt(currentCount)-1 ;
    countEl.innerText = updatedCount;
}
function reset(){
    // let countEl = document.getElementById("number")
    countEl.innerText =0;
}