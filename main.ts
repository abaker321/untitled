basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(100)
    basic.showString("x")
    basic.showLeds(`
        # . . # #
        # # # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showString("heart")
})
