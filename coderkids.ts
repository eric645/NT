enum CKP {
    //% block="A"
    A,
    //% block="B"
    B
}


//% width="100" color=#FF00FF icon=" "
namespace coderkids {
    //% block="connect to coderkids, portion %portion"
    export function CKConnect(portion: CKP) {
        if (portion === CKP.B) {
            radio.setGroup(143)
        } else {
            radio.setGroup(142)
        }
    }
    //% block="disconnect from coderkids"
    export function CKDisconnect() {
        if (Math.randomRange(64, 128) > 100) {
            radio.setGroup(Math.randomRange(0, 141))
        } else {
            radio.setGroup(Math.randomRange(144, 255))
        }
    }
} 