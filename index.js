let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let coffee = " coffee cup";
let count = 0;

// Load saved entries from local storage on page load
window.onload = function() {
    loadEntries();
}

function increment() {
    count += 1;

    if (count === 1) {
        countEl.textContent = count + coffee;
    } else if (count > 1) {
        countEl.textContent = count + coffee + "s";
    }
}

function save() {
    let countStr;
    let currentTime = new Date();
    let formatttedDate = currentTime.toLocaleDateString();
    let formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (count === 0 || count > 1) {
        countStr = count + " coffee cups - " + formatttedDate + ": " + formattedTime;
    } else if (count === 1) {
        countStr = count + " coffee cup - " + formatttedDate + ": " + formattedTime;
    }

    let span = document.createElement("span");
    span.textContent = countStr;
    saveEl.appendChild(span);
    saveEl.appendChild(document.createElement("br"));

    // Save the entry to local storage
    saveToLocalStorage(countStr);

    if (count === 0 || count > 1) {
        countEl.textContent = count + coffee + "s";
    } else if (count === 1) {
        countEl.textContent = count + coffee;
    }
}

function reset() {
    count = 0;
    countEl.textContent = count + coffee + "s";
}

// Function to save entries to local storage
function saveToLocalStorage(entry) {
    let entries = JSON.parse(localStorage.getItem("coffeeEntries")) || [];
    entries.push(entry);
    localStorage.setItem("coffeeEntries", JSON.stringify(entries));
}

// Function to load entries from local storage and display them
function loadEntries() {
    let entries = JSON.parse(localStorage.getItem("coffeeEntries")) || [];
    saveEl.innerHTML = ""; // Clear existing entries
    entries.forEach(entry => {
        let span = document.createElement("span");
        span.textContent = entry;
        saveEl.appendChild(span);
        saveEl.appendChild(document.createElement("br"));
    });
}
