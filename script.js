let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i + 1));
    }

}

let lightColor = (element,number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('.selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('.selected');
    })
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`A SUA PONTUAÇÃO É DE: ${score}\n!!! Vamos para o proximo nível agora!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })

    checkOrder();
}

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

