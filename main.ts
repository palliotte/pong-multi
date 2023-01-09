class player {
    sprite: game.LedSprite
    constructor(ab: number) {
        this.sprite = game.createSprite(ab, 4)
        this.sprite.set(LedSpriteProperty.Brightness, 50)
    }
    
    public move(move: number) {
        this.sprite.change(LedSpriteProperty.X, move)
    }
    
}

let padletA = new player(2)
let padletB = new player(3)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (padletA.sprite.get(LedSpriteProperty.X) > 0) {
        padletA.move(-1)
        padletB.move(-1)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (padletB.sprite.get(LedSpriteProperty.X) < 4) {
        padletA.move(1)
        padletB.move(1)
    }
    
})
