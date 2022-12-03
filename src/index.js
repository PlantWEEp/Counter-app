let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let refreshEl = document.getElementById("re-btn")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
    console.log(count)
}

function refresh() {
    window.location.reload("Refresh")
}