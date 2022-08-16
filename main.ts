radio.setGroup(50)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showLeds(`
                . # # . .
                . . # . .
                . . # . .
                . . # . .
                . # # # .
                `)
            radio.setGroup(1)
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showLeds(`
                    . # # # #
                    . . . . #
                    . # # # #
                    . # . . .
                    . # # # #
                    `)
                radio.setGroup(2)
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    }
})
