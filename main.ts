input.onButtonPressed(Button.B, function () {
    datalogger.deleteLog()
    basic.showIcon(IconNames.Skull)
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
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
    if (input.buttonIsPressed(Button.A)) {
        time_start = input.runningTime()
        while (input.runningTime() - time_start < 60000) {
            led.plotBarGraph(
            pins.analogReadPin(AnalogPin.P2),
            1023
            )
            datalogger.log(datalogger.createCV("Pulse_Sensor_Data", pins.analogReadPin(AnalogPin.P2)))
        }
    }
})
