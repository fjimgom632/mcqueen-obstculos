let izquierda = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        izquierda = 1
        if (izquierda == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
        if (izquierda == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    }
})
