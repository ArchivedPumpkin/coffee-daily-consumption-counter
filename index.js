let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let coffee = " coffee cup"
let count = 0

function increment() {
    count += 1

    if (count === 1) {
        countEl.textContent = count + coffee
    } else if (count > 1) {
        countEl.textContent = count + coffee + "s"
    }

}

function save() {
    let countStr
    let currentTime = new Date()
    let formatttedDate = currentTime.toLocaleDateString()
    let formattedTime = currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    if (count === 0 || count > 1) {
        countStr = count + " coffee cups - " + formatttedDate + ": " + formattedTime
    } else if (count === 1) {
        countStr = count + " coffee cup - " + formatttedDate + ": " + formattedTime
    } 
    
    let span = document.createElement("span")
    span.textContent = countStr
    saveEl.appendChild(span)
    
    saveEl.appendChild(document.createElement("br"))

    if (count === 0 || count > 1) {
        countEl.textContent = count + coffee + "s"
    } else if (count === 1) {
        countEl.textContent = count + coffee
    }
}

function reset() {
    count = 0
    countEl.textContent = count + coffee + "s"
}
