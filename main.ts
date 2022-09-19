input.onButtonPressed(Button.A, function () {
    basic.showNumber(num1)
    num1 += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num1)
    num1 += -1
})
let num1 = 0
basic.showIcon(IconNames.SmallHeart)
num1 = randint(1, 25)
