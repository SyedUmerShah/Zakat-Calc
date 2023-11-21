function process() {
    var gold = document.getElementById("gold")
    var silver = document.getElementById("silver")
    var other = document.getElementById("other")
    var amount = document.getElementById("amount")
    var error = document.getElementById("error")
    var total = 0
    total = (Number(gold.value * 210600)) + (Number(silver.value * 2679)) + Number(other.value)
    if (total === 0) {
        amount.innerHTML = total
        error.innerHTML = "Please enter amount to process Zakat!"
    }
    else if (total < 2679 * 52.5) {
        amount.innerHTML = total
        error.innerHTML = "Your amount is below Zakat threshold!"
    }
    else {
        amount.innerHTML = Math.round(total / 40)
    }
    event.preventDefault()
}
