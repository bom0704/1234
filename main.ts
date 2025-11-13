input.onGesture(Gesture.TiltRight, function () {
    도구.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    도구.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    도구.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    그림 = game.createSprite(도구.get(LedSpriteProperty.X), 도구.get(LedSpriteProperty.Y))
})
input.onGesture(Gesture.LogoUp, function () {
    도구.change(LedSpriteProperty.Y, 1)
})
let 그림: game.LedSprite = null
let 도구: game.LedSprite = null
도구 = game.createSprite(2, 2)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
