class player:
    def __init__(self, ab):
        self.sprite = game.create_sprite(ab,4)
        self.sprite.set(LedSpriteProperty.BRIGHTNESS, 50)
    def move(self, move):
        self.sprite.change(LedSpriteProperty.X, move)

padletA = player(2)
padletB = player(3)

def on_button_pressed_a():
    if padletA.sprite.get(LedSpriteProperty.X) > 0:
        padletA.move(-1)
        padletB.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if padletB.sprite.get(LedSpriteProperty.X) < 4:
        padletA.move(1)
        padletB.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)