controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "UP"
    alien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 1 3 3 3 3 1 1 1 b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b b c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 b b b b b b f 
        . c b b 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b 1 1 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 3 3 b b b b c c d f . 
        f c b b b b b b b c c d d d f . 
        f f c b b b b c c d d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . . . b b f c c c . . . . 
        `)
    animation.runImageAnimation(
    alien,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . b b b b f c c c f . . . 
        . . . . . . . f f d d d f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 1 3 3 3 3 1 1 1 b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b b c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 b b b b b b f 
        . c b b 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b 1 1 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 3 3 b b b b c c d f . 
        f c b b b b b b b c c d d d f . 
        f f c b b b b c c d d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . . . b b f c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c f . . 
        . . . . f b b b f c c c f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    scene.cameraShake(20, 500)
    info.changeLifeBy(-1)
    tiles.setCurrentTilemap(tilemap`level35`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 500, function () {
        if (direction == "UP") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f 7 7 1 1 7 f . . . . . 
                . . . . f 7 7 7 7 1 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . f 1 7 7 7 7 f f f f f . 
                . f f f f f 1 7 7 f f 7 1 7 7 f 
                f 7 7 7 7 f f f f f 7 7 7 1 7 f 
                f 7 7 1 1 7 f . . f 7 7 7 7 7 f 
                f 7 1 7 7 1 f . . f 7 7 7 7 1 f 
                f 7 7 7 7 7 f . . f 7 7 1 1 7 f 
                f 7 7 7 7 7 f . . . f f f f f . 
                . f f f f f . . . . . . . . . . 
                `, alien, 0, -50)
            music.beamUp.play()
        } else if (direction == "DOWN") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f 7 7 1 1 7 f . . . . . 
                . . . . f 7 7 7 7 1 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . f 1 7 7 7 7 f f f f f . 
                . f f f f f 1 7 7 f f 7 1 7 7 f 
                f 7 7 7 7 f f f f f 7 7 7 1 7 f 
                f 7 7 1 1 7 f . . f 7 7 7 7 7 f 
                f 7 1 7 7 1 f . . f 7 7 7 7 1 f 
                f 7 7 7 7 7 f . . f 7 7 1 1 7 f 
                f 7 7 7 7 7 f . . . f f f f f . 
                . f f f f f . . . . . . . . . . 
                `, alien, 0, 50)
            music.beamUp.play()
        } else if (direction == "LEFT") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f 7 7 1 1 7 f . . . . . 
                . . . . f 7 7 7 7 1 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . f 1 7 7 7 7 f f f f f . 
                . f f f f f 1 7 7 f f 7 1 7 7 f 
                f 7 7 7 7 f f f f f 7 7 7 1 7 f 
                f 7 7 1 1 7 f . . f 7 7 7 7 7 f 
                f 7 1 7 7 1 f . . f 7 7 7 7 1 f 
                f 7 7 7 7 7 f . . f 7 7 1 1 7 f 
                f 7 7 7 7 7 f . . . f f f f f . 
                . f f f f f . . . . . . . . . . 
                `, alien, -50, 0)
            music.beamUp.play()
        } else if (direction == "RIGHT") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . f 7 7 1 1 7 f . . . . . 
                . . . . f 7 7 7 7 1 f . . . . . 
                . . . . f 7 7 7 7 7 f . . . . . 
                . . . . f 1 7 7 7 7 f f f f f . 
                . f f f f f 1 7 7 f f 7 1 7 7 f 
                f 7 7 7 7 f f f f f 7 7 7 1 7 f 
                f 7 7 1 1 7 f . . f 7 7 7 7 7 f 
                f 7 1 7 7 1 f . . f 7 7 7 7 1 f 
                f 7 7 7 7 7 f . . f 7 7 1 1 7 f 
                f 7 7 7 7 7 f . . . f f f f f . 
                . f f f f f . . . . . . . . . . 
                `, alien, 50, 0)
            music.beamUp.play()
        }
    })
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, alien)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level34`)
    tiles.placeOnRandomTile(alien, assets.tile`myTile13`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "LEFT"
    alien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `)
    animation.runImageAnimation(
    alien,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 3 3 c . . 
        f b c c c d d d b b 3 3 3 3 c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d c d d d d d d b c 3 3 c 
        . c d d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, alien)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, alien)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "RIGHT"
    alien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `)
    animation.runImageAnimation(
    alien,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 b c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 b c c c c b b f 
        . c 3 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d c d b c . 
        f 3 c c c d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, alien)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level35`)
    tiles.placeOnRandomTile(alien, assets.tile`myTile14`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "DOWN"
    alien.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `)
    animation.runImageAnimation(
    alien,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 b c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 b c c c c b b f 
        . c 3 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d c d b c . 
        f 3 c c c d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    drink.destroy(effects.bubbles, 500)
    tiles.placeOnRandomTile(drink, assets.tile`myTile24`)
    info.changeScoreBy(1)
    timer.after(150000, function () {
        drink = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f e e e e f . . . . . 
            . . . . . f f e e f f . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f 7 1 7 7 7 7 1 7 f . . . 
            . . . f 1 7 7 7 7 7 7 1 f . . . 
            . . . f 7 7 7 7 7 7 7 7 f . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . f 7 7 1 7 7 7 7 7 7 7 f . . 
            . . f 7 1 7 7 7 7 7 7 7 7 f . . 
            . . f 1 7 7 7 7 7 7 7 7 1 f . . 
            . . . f 7 7 7 7 7 7 1 1 f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(drink, assets.tile`myTile24`)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    game.over(true, effects.confetti)
})
let projectile: Sprite = null
let direction = ""
let drink: Sprite = null
let alien: Sprite = null
info.startCountdown(300)
tiles.setTilemap(tilemap`level1`)
alien = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 3 1 1 b c c . 
    . . b 3 3 3 3 3 3 1 1 1 3 c c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 1 1 3 3 3 b c c c c b b f 
    . c c 3 3 3 b b d d d c c c b f 
    c b 3 3 b b d d d d d d b c b f 
    c 3 3 c b d d d d d d d d b c . 
    f 3 c c c d d d d d d c c d c . 
    f b c c c d d c c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c f f b d d d d d c . . 
    . f f f f d d b b d d d b f . . 
    . . . . f d d d b c c f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(alien)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scene.cameraFollowSprite(alien)
tiles.placeOnRandomTile(alien, assets.tile`myTile11`)
drink = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . . . f f e e f f . . . . . 
    . . . . . . f e e f . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f 7 1 7 7 7 7 1 7 f . . . 
    . . . f 1 7 7 7 7 7 7 1 f . . . 
    . . . f 7 7 7 7 7 7 7 7 f . . . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . f 7 7 1 7 7 7 7 7 7 7 f . . 
    . . f 7 1 7 7 7 7 7 7 7 7 f . . 
    . . f 1 7 7 7 7 7 7 7 7 1 f . . 
    . . . f 7 7 7 7 7 7 1 1 f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(drink, assets.tile`myTile24`)
let mexican_guy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
