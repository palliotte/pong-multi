def on_button_pressed_a():
    if padletA.get(LedSpriteProperty.X) > 0:
        padletA.change(LedSpriteProperty.X, -1)
        padletB.change(LedSpriteProperty.X, -1)
        radio.send_value("x", padletA.get(LedSpriteProperty.X))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if padletB.get(LedSpriteProperty.X) < 4:
        padletA.change(LedSpriteProperty.X, 1)
        padletB.change(LedSpriteProperty.X, 1)
        radio.send_value("x", padletA.get(LedSpriteProperty.X))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    global ennemieA, ennemieB
    if not (ennemieA):
        ennemieA = game.create_sprite(2, 0)
        ennemieA.set(LedSpriteProperty.BRIGHTNESS, 60)
        ennemieB = game.create_sprite(3, 0)
        ennemieB.set(LedSpriteProperty.BRIGHTNESS, 60)
    if name == "x":
        ennemieA.set(LedSpriteProperty.X, value)
        ennemieB.set(LedSpriteProperty.X, 1 + value)
radio.on_received_value(on_received_value)

score = 0
ennemieB: game.LedSprite = None
ball: game.LedSprite = None
ennemieA: game.LedSprite = None
padletB: game.LedSprite = None
padletA: game.LedSprite = None
padletA = game.create_sprite(2, 4)
padletA.set(LedSpriteProperty.BRIGHTNESS, 50)
padletB = game.create_sprite(3, 4)
padletB.set(LedSpriteProperty.BRIGHTNESS, 50)
game.set_life(10)
if not (ennemieA):
    ball = game.create_sprite(2, 2)
    x = randint(-1, 1)
    y = 1
    while True:
        game.pause()
        if ennemieA:
            game.resume()
            break

def on_every_interval():
    global score
    radio.send_value("x", padletA.get(LedSpriteProperty.X))
    score += 1
loops.every_interval(1000, on_every_interval)

def on_forever():
    ball.change(LedSpriteProperty.X, directionX)
    ball.change(LedSpriteProperty.Y, directionY)
    pause(200)
    if ball.is_touching(padletA) or ball.is_touching(padletB):
        ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
    elif ball.get(LedSpriteProperty.Y) >= 4:
        ball.set(LedSpriteProperty.BLINK, 0)
        basic.pause(2000)
        game.game_over()
    if ball.get(LedSpriteProperty.X) <= 0:
        directionX = 1
    elif ball.get(LedSpriteProperty.X) >= 4:
        directionX = -1
    if ball.get(LedSpriteProperty.Y) <= 0:
        directionY = 1
    basic.pause(100)
basic.forever(on_forever)
