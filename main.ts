input.onButtonPressed(Button.A, function () {
    onAnyButton(0)
})
input.onButtonPressed(Button.AB, function () {
    onAnyButton(2)
})
input.onButtonPressed(Button.B, function () {
    onAnyButton(1)
})
function onAnyButton (num: number) {
    if (list.shift() != num) {
        game.gameOver()
    }
    if (list.length == 0) {
        basic.showIcon(IconNames.Yes)
        gameLoop = true
        count += 1
    }
}
let button = 0
let list: number[] = []
let gameLoop = false
gameLoop = true
let count = 1
list = []
let pressed = 0
basic.forever(function () {
    if (gameLoop) {
        for (let index = 0; index < count; index++) {
            button = randint(0, 2)
            if (button == 0) {
                basic.showLeds(`
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    `)
            } else if (button == 1) {
                basic.showLeds(`
                    . . # # #
                    . . # # #
                    . . # # #
                    . . # # #
                    . . # # #
                    `)
            } else {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            }
            basic.pause(500)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            list.push(button)
        }
    }
    gameLoop = false
})
