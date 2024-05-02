input.onButtonPressed(Button.A, function () {
    time_start = input.runningTime()
    while (input.runningTime() - time_start < 60000) {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P2),
        1023
        )
        datalogger.log(datalogger.createCV("Pulse_Sensor_Data", pins.analogReadPin(AnalogPin.P2)))
    }
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    datalogger.deleteLog()
    basic.showIcon(IconNames.Skull)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
})
let time_start = 0
datalogger.setColumnTitles("Pulse_Sensor_Data")
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . . # .
    . . # . .
    . . . . .
    . . # . .
    `)
