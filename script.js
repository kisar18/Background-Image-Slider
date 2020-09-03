var lBtn = document.getElementById('btn-l')
var rBtn = document.getElementById('btn-r')
var cont = document.getElementsByClassName('container')[0]

var value = 0

function checkValue() {
    if (value < 0) {
        value = 4
    }
    else if (value > 4) {
        value = 0
    }
    else {
        value += 0
    }
}

var images = ["contBcg-0.jpeg", "contBcg-1.jpeg", "contBcg-2.jpeg", "contBcg-3.jpeg", "contBcg-4.jpeg"]

lBtn.addEventListener('click', () => {
    value -= 1
    checkValue()
    cont.style.background = "url(images/" + images[value] + ") center/cover no-repeat"

})
rBtn.addEventListener('click', () => {
    value += 1
    checkValue()
    cont.style.background = "url(images/" + images[value] + ") center/cover no-repeat"
})
