input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (ennemieA) {
        if (padletA.get(LedSpriteProperty.X) > 0) {
            padletA.change(LedSpriteProperty.X, -1)
            padletB.change(LedSpriteProperty.X, -1)
            radio.sendValue("x", padletA.get(LedSpriteProperty.X))
        }
        
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (ennemieA) {
        if (padletB.get(LedSpriteProperty.X) < 4) {
            padletA.change(LedSpriteProperty.X, 1)
            padletB.change(LedSpriteProperty.X, 1)
            radio.sendValue("x", padletA.get(LedSpriteProperty.X))
        }
        
    }
    
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
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
let score = 0
let ennemieB : game.LedSprite = null
let ball : game.LedSprite = null
let host = 0
let ennemieA : game.LedSprite = null
let padletB : game.LedSprite = null
let padletA : game.LedSprite = null
padletA = game.createSprite(2, 4)
padletA.set(LedSpriteProperty.Brightness, 50)
padletB = game.createSprite(3, 4)
padletB.set(LedSpriteProperty.Brightness, 50)
game.setLife(10)
if (!ennemieA) {
    host = 1
    if (host == 1) {
        ball = game.createSprite(2, 2)
    }
    
}

loops.everyInterval(1000, function on_every_interval() {
    
    radio.sendValue("x", padletA.get(LedSpriteProperty.X))
    if (ennemieA) {
        score += 1
    }
    
})
