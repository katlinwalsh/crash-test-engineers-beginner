// Show number of soft landings
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Soft_Landing)
})
// Reset Count
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    Hard_Landing = 0
    Soft_Landing = 0
})
// Show number of hard landings
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Hard_Landing)
})
let Soft_Landing = 0
let Hard_Landing = 0
Hard_Landing = 0
Soft_Landing = 0
basic.forever(function () {
    // If more than 80% certain the landing is hard, increase variable and display an icon
    // If more than 80% certain the landing is soft, increase variable and display an icon
    if (ml.getCertainty(ml.event.Hard) >= 80) {
        basic.showIcon(IconNames.Square)
        Hard_Landing += 1
        basic.pause(200)
    } else if (ml.getCertainty(ml.event.Soft) >= 80) {
        basic.showIcon(IconNames.SmallSquare)
        Soft_Landing += 1
        basic.pause(200)
    } else {
        // If not crashing, show an icon
        basic.showIcon(IconNames.Heart)
    }
})
