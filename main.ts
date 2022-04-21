radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 11) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else if (receivedNumber == 10) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
    	
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
radio.setGroup(20)
basic.forever(function () {
	
})
