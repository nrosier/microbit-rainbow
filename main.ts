let ring = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
ring.showRainbow(1, 360)
basic.forever(function () {
    ring.show()
    ring.rotate(1)
    basic.pause(100)
})
