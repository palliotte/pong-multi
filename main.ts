let x: number;
let y: number;
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
let ennemieA : game.LedSprite = null
let padletB : game.LedSprite = null
let padletA : game.LedSprite = null
padletA = game.createSprite(2, 4)
padletA.set(LedSpriteProperty.Brightness, 50)
padletB = game.createSprite(3, 4)
padletB.set(LedSpriteProperty.Brightness, 50)
game.setLife(10)
if (!ennemieA) {
    ball = game.createSprite(2, 2)
    x = randint(-1, 1)
    y = 1
    while (true) {
        game.pause()
        if (ennemieA) {
            game.resume()
            break
        }
        
    }
}

loops.everyInterval(1000, function on_every_interval() {
    
    radio.sendValue("x", padletA.get(LedSpriteProperty.X))
    score += 1
})
basic.forever(function on_forever() {
    let directionY: number;
    let directionX: number;
    ball.change(LedSpriteProperty.X, directionX)
    ball.change(LedSpriteProperty.Y, directionY)
    pause(200)
    if (ball.isTouching(padletA) || ball.isTouching(padletB)) {
        ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
    } else if (ball.get(LedSpriteProperty.Y) >= 4) {
        ball.set(LedSpriteProperty.Blink, 0)
        basic.pause(2000)
        game.gameOver()
    }
    
    if (ball.get(LedSpriteProperty.X) <= 0) {
        directionX = 1
    } else if (ball.get(LedSpriteProperty.X) >= 4) {
        directionX = -1
    }
    
    if (ball.get(LedSpriteProperty.Y) <= 0) {
        directionY = 1
    }
    
    basic.pause(100)
})
