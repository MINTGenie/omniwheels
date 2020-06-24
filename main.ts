function right () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M1B,
    150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M2B,
    -150
    )
    basic.pause(1000)
}
function rearaxisleft () {
    robotbit.MotorRun(robotbit.Motors.M1A, -200)
    robotbit.MotorRun(robotbit.Motors.M1B, 200)
}
function leftdiagfwd (speed: number) {
    robotbit.MotorRun(robotbit.Motors.M1A, 200)
    robotbit.MotorRun(robotbit.Motors.M2B, 200)
}
function fwd () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M1B,
    150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M2B,
    150
    )
    basic.pause(1000)
}
function left () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M1B,
    -150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -150,
    robotbit.Motors.M2B,
    150
    )
    basic.pause(1000)
}
function turnaround () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    150,
    robotbit.Motors.M1B,
    -150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M2B,
    -150
    )
    basic.pause(3000)
}
function rearaxisright () {
    robotbit.MotorRun(robotbit.Motors.M1A, 200)
    robotbit.MotorRun(robotbit.Motors.M1B, -200)
}
function righttdiagrev () {
    robotbit.MotorRun(robotbit.Motors.M1B, -200)
    robotbit.MotorRun(robotbit.Motors.M2A, -200)
}
function rev () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M1B,
    -150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -150,
    robotbit.Motors.M2B,
    -150
    )
    basic.pause(1000)
}
function cornerleft () {
    robotbit.MotorRun(robotbit.Motors.M1B, 200)
    robotbit.MotorRun(robotbit.Motors.M2B, 200)
}
function righttdiagfwd () {
    robotbit.MotorRun(robotbit.Motors.M1B, 200)
    robotbit.MotorRun(robotbit.Motors.M2A, 200)
}
function cornerright () {
    robotbit.MotorRun(robotbit.Motors.M1A, 200)
    robotbit.MotorRun(robotbit.Motors.M2A, 200)
}
function leftdiagrev () {
    robotbit.MotorRun(robotbit.Motors.M1A, -200)
    robotbit.MotorRun(robotbit.Motors.M2B, -200)
}
basic.forever(function () {
    fwd()
    basic.pause(200)
    rev()
    basic.pause(200)
    left()
    basic.pause(200)
    right()
    basic.pause(200)
    robotbit.MotorStopAll()
    leftdiagfwd(1)
    basic.pause(1000)
    robotbit.MotorStopAll()
    righttdiagfwd()
    basic.pause(1000)
    robotbit.MotorStopAll()
    basic.pause(1000)
    turnaround()
    robotbit.MotorStopAll()
    basic.pause(100)
    cornerleft()
    basic.pause(2000)
    robotbit.MotorStopAll()
    cornerright()
    basic.pause(2000)
    robotbit.MotorStopAll()
    rearaxisleft()
    basic.pause(2000)
    robotbit.MotorStopAll()
    rearaxisright()
    basic.pause(2000)
    robotbit.MotorStopAll()
})
