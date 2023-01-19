def on_button_pressed_a():
    if ennemieA:
        if padletA.get(LedSpriteProperty.X) > 0:
            padletA.change(LedSpriteProperty.X, -1)
            padletB.change(LedSpriteProperty.X, -1)
            radio.send_value("x", padletA.get(LedSpriteProperty.X))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if ennemieA:
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
host = 0
ennemieA: game.LedSprite = None
padletB: game.LedSprite = None
padletA: game.LedSprite = None
padletA = game.create_sprite(2, 4)
padletA.set(LedSpriteProperty.BRIGHTNESS, 50)
padletB = game.create_sprite(3, 4)
padletB.set(LedSpriteProperty.BRIGHTNESS, 50)
game.set_life(10)
if not (ennemieA):
    host = 1
    if host == 1:
        ball = game.create_sprite(2, 2)

def on_every_interval():
    global score
    radio.send_value("x", padletA.get(LedSpriteProperty.X))
    if ennemieA:
        score += 1
loops.every_interval(1000, on_every_interval)

