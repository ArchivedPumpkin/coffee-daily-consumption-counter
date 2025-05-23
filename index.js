let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let nounEl = document.getElementById("noun")
let saveBtn = document.getElementById("save-btn")
let totalEl = document.getElementById("total-count")
let count = 0
let totalCount = 0

function updateDisplay() {
    let noun = (count === 0 || count === 1) ? "coffee" : "coffees"
    countEl.textContent = count
    nounEl.textContent = noun
    saveBtn.disabled = (count < 1)
}

updateDisplay()

function increment() {
    count += 1
    updateDisplay()
}

function decrease() {
    if (count > 0) {
        count -= 1
    }
    updateDisplay()
}

function save() {
    let time = new Date().toLocaleString(undefined, { hour12: false }).slice(0, 16)
    let unit = (count === 1) ? " cup": " cups"
    let countStr = time + " - " + count + unit

    if (count > 0) {
        let entry = document.createElement("div")
        entry.textContent = countStr
        entry.classList.add("entry")
        saveEl.appendChild(entry)
        totalCount += count
        totalEl.textContent = totalCount
    }
    countEl.textContent = 0
    count = 0
    updateDisplay()
}


save()

function reset() {
    count = 0
    updateDisplay()
}

