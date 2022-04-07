// DISPLAYING SLIDER VALUE
var slider = document.getElementById("boxRange");
var boxOutput = document.getElementById("boxValue");
boxOutput.innerHTML = slider.value;

slider.oninput = function () {
    boxOutput.innerHTML = this.value;
}

var slider = document.getElementById("bagRange");
var bagOutput = document.getElementById("bagValue");
bagOutput.innerHTML = slider.value;

slider.oninput = function () {
    bagOutput.innerHTML = this.value;
}

var slider = document.getElementById("weekRange");
var weekOutput = document.getElementById("weekValue");
weekOutput.innerHTML = slider.value;

slider.oninput = function () {
    weekOutput.innerHTML = this.value;
}


var calcPrice = document.getElementById('calcPrice')
var price = document.getElementById('price')
var showAfter = document.getElementById('show-after')

calcPrice.addEventListener('click', (e) => {
    e.preventDefault()
    const numBoxes = parseInt(boxOutput.innerHTML)
    const numBags = parseInt(bagOutput.innerHTML)
    const numWeeks = parseInt(weekOutput.innerHTML)

    const costOfBoxes = costForBoxes(numBoxes)
    const costOfBags = costForBags(numBags)
    const costPerWeek = costOfBoxes + costOfBags

    const totalWeekCost = costPerWeek * numWeeks

    let finalTotal;

    if (numWeeks == 2) {
        finalTotal = totalWeekCost + 30
    }

    if (numWeeks == 3) {
        finalTotal = totalWeekCost + 20
    }

    if (numWeeks > 3) {
        finalTotal = totalWeekCost
    }

    price.innerHTML = `${numBoxes}x boxes and ${numBags}x bags for ${numWeeks} weeks is <b>£${finalTotal}</b>. This includes delivery to and from.`
    calcPrice.innerHTML = 'Recalculate Price'
    showAfter.style.display = 'block'
})


const costForBoxes = (num) => {
    return num * 3
}

const costForBags = (num) => {
    return num * 4.5
}