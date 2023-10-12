info.onCountdownEnd(function () {
    info.stopCountdown()
    controller.player1.moveSprite(mySprite, 125, 200)
    controller.player2.moveSprite(mySprite2, 150, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player2.changeScoreBy(9999)
    game.setGameOverMessage(false, "You Got Killed By The Entity's")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.player1.changeScoreBy(9999999999999)
    game.setGameOverMessage(true, "YOU EXITED LEVEL !")
    game.gameOver(true)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.showLongText("Player 1: Escape Level ! and Escape the Entity's. Player 2: You are the Entity's Kill the player 1 before he/she- -Escapes.", DialogLayout.Center)
scene.setBackgroundColor(2)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(50, 40)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f . . . 
    . f f f f f f f 2 f 2 f 2 f . . 
    . f 2 f 2 f 2 f f 2 f 2 f f . . 
    . f f 2 f 2 f 2 f f 2 f f f . . 
    . f 2 f 2 f 2 f 2 f 2 2 2 f . . 
    . f f 2 f 2 f 2 f 2 f 2 f f . . 
    . f 2 f 2 f 2 f f 2 f 2 2 f . . 
    . f 2 f 2 f 2 f 2 f 2 f 2 f . . 
    . f f 2 f 2 f 2 f 2 f 2 f f . . 
    . f 2 f 2 f 2 f 2 f 2 f f f . . 
    . f 2 2 f 2 f 2 f 2 f f 2 f . . 
    . f f f 2 f 2 f 2 f f 2 f f . . 
    . . f f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
info.startCountdown(2)
mySprite2.setPosition(10, 40)
let mySprite3 = sprites.create(img`
    f 
    f 
    f 
    f 
    f 
    f 
    `, SpriteKind.Enemy)
mySprite3.setPosition(2550, 30)
game.onUpdateInterval(1000, function () {
    info.player1.changeScoreBy(1)
})
