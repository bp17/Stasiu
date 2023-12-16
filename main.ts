music.play(music.stringPlayable("B D A G F C5 E C ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showString("" + (pins.digitalReadPin(DigitalPin.P0)))
})
