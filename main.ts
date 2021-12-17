input.onButtonPressed(Button.A, function () {
    if (contador == 7) {
        bloqueo = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (control.millis() - tiempo < 1300) {
        contador += 1
        tiempo = control.millis()
    } else {
        while (true) {
            basic.showIcon(IconNames.Skull)
            basic.pause(100)
        }
    }
})
let bloqueo = 0
let tiempo = 0
let contador = 0
basic.showString("CONTRASEÑA???")
contador = 0
tiempo = control.millis()
bloqueo = 0
basic.forever(function () {
    if (bloqueo == 1) {
        basic.showString("Hello!")
    } else {
        if (true) {
            basic.showIcon(IconNames.Skull)
            while (true) {
                basic.pause(100)
            }
        }
    }
})
