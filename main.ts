let padletA = game.createSprite(2, 4)
padletA.set(LedSpriteProperty.Brightness, 50)
let padletB = game.createSprite(3, 4)
padletB.set(LedSpriteProperty.Brightness, 50)
game.setLife(10)
let score = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (padletA.get(LedSpriteProperty.X) > 0) {
        padletA.change(LedSpriteProperty.X, -1)
        padletB.change(LedSpriteProperty.X, -1)
        radio.sendValue("x", padletA.get(LedSpriteProperty.X))
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (padletB.get(LedSpriteProperty.X) < 4) {
        padletA.change(LedSpriteProperty.X, 1)
        padletB.change(LedSpriteProperty.X, 1)
        radio.sendValue("x", padletA.get(LedSpriteProperty.X))
    }
    
})
loops.everyInterval(1000, function onEvery_interval() {
    radio.sendValue("x", padletA.get(LedSpriteProperty.X))
    let score = +1
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    let ennemieA: game.LedSprite;
    let ennemieB: game.LedSprite;
    if (!ennemieA) {
        ennemieA = game.createSprite(2, 0)
        ennemieA.set(LedSpriteProperty.Brightness, 60)
        ennemieB = game.createSprite(3, 0)
        ennemieB.set(LedSpriteProperty.Brightness, 60)
    }
    
    if (name == "x") {
        ennemieA.set(LedSpriteProperty.X, value)
        ennemieB.set(LedSpriteProperty.X, 1 + value)
    }
    
})
