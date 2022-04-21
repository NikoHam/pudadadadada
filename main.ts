radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 11) {
        Svetlo = 1
    } else if (receivedNumber == 10) {
        Svetlo = 0
    }
    if (receivedNumber == 20) {
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (receivedNumber == 21) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
    	
    }
    if (receivedNumber == 30) {
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (receivedNumber == 31) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
    	
    }
})
let Svetlo = 0
radio.setGroup(20)
let LED1 = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let LED2 = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
let LED3 = neopixel.create(DigitalPin.P12, 1, NeoPixelMode.RGB)
Svetlo = 0
basic.forever(function () {
    if (1 == Svetlo) {
        LED1.showColor(neopixel.colors(NeoPixelColors.White))
        LED2.showColor(neopixel.colors(NeoPixelColors.White))
        LED3.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        LED1.showColor(neopixel.colors(NeoPixelColors.Black))
        LED2.showColor(neopixel.colors(NeoPixelColors.Black))
        LED3.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
