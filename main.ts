enum ActionKind {
    Walking,
    Idle,
    Jumping,
    WalkingLeft,
    WalkingRight,
    WalkingUp,
    WalkingDown,
    FireIdle
}
namespace SpriteKind {
    export const Pet = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const BaseFood = SpriteKind.create()
    export const InventoryChest = SpriteKind.create()
}
function spawnBaseFood () {
    MegaShroom = sprites.create(img`
        ......fffffff.....
        ....ffaaaaaaaff...
        ...f1aaadaabbaaf..
        ..f11aaaaaabbaaaf.
        ..faaaacaaaaaaa1f.
        .fbbaaaaaaaaaaa11f
        .faaaaaaaaadaaaaaf
        .faaaa11aaaaaaaaaf
        .faaaa11aaaaaa1aaf
        ..ffffcbbdbcdffff.
        .....fcdcdbcdf....
        .....fcdcdbcdf....
        .....fbdbdbcdf....
        .....fbdbdbcdf....
        .....fbbcdbcdf....
        .....fcbcdbbdf..7.
        .7..7fcbbbb77767..
        .67.67fcccc67.67..
        .67.67.ffff67.67..
        `, SpriteKind.BaseFood)
    tiles.placeOnTile(MegaShroom, tiles.getTileLocation(6, 7))
    tiles.placeOnRandomTile(MegaShroom, assets.tile`myTile4`)
}
function DrawStatSpriteMeter (percent: number, StatSprite: Sprite, onColor: number, offColor: number) {
    StatSprite.image.fill(offColor)
    FillWidth = percent * MeterWidth / 100
    StatSprite.image.fillRect(0, 0, FillWidth, StatSprite.height, onColor)
}
function closeInventory () {
    inventoryVisible = false
    controller.moveSprite(Survivor)
}
function baseFire () {
    FireIdle = sprites.create(img`
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
        `, SpriteKind.Fire)
    animation.runImageAnimation(
    FireIdle,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 4 . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . 2 . . 4 . 2 2 . . . 2 . . . . 
        . . . . 2 2 2 2 5 . . . . . . . 
        2 . . . 2 2 4 2 2 . 2 . . . . . 
        . . . 5 2 2 5 2 2 2 . 2 . . . . 
        . . 2 . 2 4 5 5 2 2 4 2 . . . . 
        . . 2 2 2 4 5 5 4 2 2 2 . . . . 
        . . 4 2 4 5 5 5 5 4 2 . . . . . 
        . . 2 2 4 5 5 5 5 4 2 . . . . . 
        . . c c c c c f c c c c . . . . 
        f c c f c c c c c f c c c f . . 
        f f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 5 . . . . . . . . 
        . . 2 . 2 . . . . . . . . . . . 
        . . . . 2 . . 2 . . . . . . . . 
        . . . . 2 . 5 2 . 4 . . . . . . 
        . 2 . . 2 2 2 2 . . . 2 . . . . 
        . . . 4 2 2 4 2 2 . . . . . . . 
        . . . . 2 2 5 2 2 2 . 2 . . . . 
        . . . . 2 4 5 5 2 5 . 2 . . . . 
        . 4 5 2 2 4 5 5 4 2 4 2 . . . . 
        . . 2 2 4 5 5 5 5 4 2 . . . . . 
        . 2 2 2 4 5 5 5 5 4 2 . . . . . 
        . . c f c c c c f c c c . . . . 
        f c c c c f c c c c c c c f . . 
        f f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . 4 2 . . . . . . . . . 
        . . 5 4 2 . 2 . 2 2 5 . . . . . 
        . . 2 . 2 2 2 2 2 . . . . . . . 
        . . . . 2 5 4 2 2 4 . . 2 . . . 
        . 5 2 . 2 2 5 2 2 2 . 2 . . . . 
        . . 2 2 2 4 5 5 2 5 . 2 . . . . 
        . . 4 2 2 4 5 5 4 2 5 2 . . . . 
        . . . 2 4 5 5 5 5 4 2 2 . . . . 
        . . 2 2 4 5 5 5 5 4 2 2 . . . . 
        . . c c c f c c c c c c . . . . 
        f c c f c c c c c c f c c f . . 
        f f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    180,
    true
    )
    tiles.placeOnTile(FireIdle, tiles.getTileLocation(6, 4))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    controller.moveSprite(Survivor, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    currentTile = tiles.locationOfSprite(Survivor)
    if (tiles.tileIs(currentTile, assets.tile`myTile7`)) {
        tiles.setTileAt(currentTile, assets.tile`myTile9`)
        Gold = sprites.create(img`
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
            `, SpriteKind.Player)
        Iron = sprites.create(img`
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
            `, SpriteKind.Player)
        Copper = sprites.create(img`
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
            `, SpriteKind.Player)
    }
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.door0, function (sprite, location) {
    tiles.loadConnectedMap(ConnectionKind.Door1)
    tiles.placeOnRandomTile(sprite, tiles.util.door0)
    if (tiles.getLoadedMap() == Regular_Cave) {
        Survivor.y += 16
    } else {
        Survivor.y += -16
    }
})
tiles.onMapLoaded(function (tilemap2) {
    tiles.coverAllTiles(tiles.util.door0, sprites.dungeon.stairSouth)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selectorIndex = Math.max(selectorIndex - 1, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    controller.moveSprite(Survivor, 70, 70)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    controller.moveSprite(Survivor, 75, 75)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    selectorIndex = Math.min(selectorIndex + 1, Tools.length - 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BaseFood, function (sprite, otherSprite) {
    hungerPercent += 5
    if (hungerPercent > 101) {
        hungerPercent = 100
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryVisible) {
        closeInventory()
    } else {
        openInventory()
    }
})
function openInventory () {
    inventoryVisible = true
    controller.moveSprite(Survivor, 0, 0)
    selectorIndex = 0
}
function SpriteMovements () {
    Survivor = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Survivor)
    scene.cameraFollowSprite(Survivor)
    Idle = animation.createAnimation(ActionKind.Idle, 400)
    animation.attachAnimation(Survivor, Idle)
    Idle.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    Idle.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 f f d d f f 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    Idle.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b b 4 4 b b f e f f . 
        . f e e 4 f f d d f f 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . 4 e f e e 4 4 4 4 e e f e 4 . 
        4 d 4 . f 2 2 2 2 2 2 f . 4 d 4 
        4 4 4 . f 2 2 2 2 2 2 f . 4 4 4 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    animation.setAction(Survivor, ActionKind.Idle)
    WalkingLeft = animation.createAnimation(ActionKind.WalkingLeft, 150)
    animation.attachAnimation(Survivor, WalkingLeft)
    WalkingLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    WalkingLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f e e d e e e e e f . . . 
        . . . e d d e 2 2 f f . . . . . 
        . . . e d d e 5 5 f f . . . . . 
        . . f f e e f f f f f . . . . . 
        . . f f f f f f f f f f . . . . 
        . . . . f f . . f f f . . . . . 
        `)
    animation.setAction(Survivor, ActionKind.WalkingLeft)
    WalkingRight = animation.createAnimation(ActionKind.WalkingRight, 150)
    animation.attachAnimation(Survivor, WalkingRight)
    WalkingRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
    WalkingRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d e e f . . . 
        . . . . . f f 2 2 e d d e . . . 
        . . . . . f f 5 5 e d d e . . . 
        . . . . . f f f f f e e f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f f . . f f . . . . 
        `)
    animation.setAction(Survivor, ActionKind.WalkingRight)
    Walking_Up = animation.createAnimation(ActionKind.WalkingUp, 150)
    animation.attachAnimation(Survivor, Walking_Up)
    Walking_Up.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `)
    Walking_Up.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `)
    animation.setAction(Survivor, ActionKind.WalkingUp)
    Walking_Down = animation.createAnimation(ActionKind.WalkingDown, 150)
    animation.attachAnimation(Survivor, Walking_Down)
    Walking_Down.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `)
    Walking_Down.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `)
    animation.setAction(Survivor, ActionKind.WalkingDown)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    hungerPercent += 10
    if (hungerPercent > 100) {
        hungerPercent = 100
    }
    otherSprite.destroy(effects.disintegrate, 500)
    if (warmthPercent == 0) {
        warmthPercent = 0
    }
})
function initStatBAR (StatSprite: Sprite) {
    StatSprite.z = 101
    StatSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    StatSprite.setImage(image.create(MeterWidth, 4))
    StatSprite.left = 20
}
spriteutils.createRenderable(100, function (screen2) {
    if (inventoryVisible) {
        screen2.fillRect(10, 10, 140, 100, 11)
        screen2.drawRect(10, 10, 140, 100, 14)
        images.print(screen2, "Inventory", 14, 14, 15)
        images.print(screen2, toolNames[selectorIndex], 74, 14, 12)
        screen2.fillRect(14, 23, 132, 1, 13)
        toolTop = 26
        for (let index = 0; index <= Tools.length - 1; index++) {
            spriteutils.drawTransparentImage(Tools[index], screen2, 18 + index * 24, toolTop)
        }
        spriteutils.drawTransparentImage(assets.image`Selector`, screen2, 18 + selectorIndex * 24 - 2, toolTop - 2)
    }
})
let lightbandwidth = 0
let distancefromFire = 0
let msuhroom: Sprite = null
let toolTop = 0
let Walking_Down: animation.Animation = null
let Walking_Up: animation.Animation = null
let WalkingRight: animation.Animation = null
let WalkingLeft: animation.Animation = null
let Idle: animation.Animation = null
let selectorIndex = 0
let Copper: Sprite = null
let Iron: Sprite = null
let Gold: Sprite = null
let currentTile: tiles.Location = null
let FireIdle: Sprite = null
let inventoryVisible = false
let FillWidth = 0
let MegaShroom: Sprite = null
let toolNames: string[] = []
let Tools: Image[] = []
let Survivor: Sprite = null
let warmthPercent = 0
let hungerPercent = 0
let MeterWidth = 0
let Regular_Cave: tiles.WorldMap = null
Regular_Cave = tiles.createMap(tilemap`level2`)
let Shelter_Map = tiles.createMap(tilemap`level3`)
tiles.loadMap(Regular_Cave)
tiles.connectMapById(Regular_Cave, Shelter_Map, ConnectionKind.Door1)
SpriteMovements()
let WarmthBar = sprites.create(img`
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
    `, SpriteKind.StatusBar)
let HungerBar = sprites.create(img`
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
    `, SpriteKind.StatusBar)
HungerBar.top = scene.screenHeight() - 12
WarmthBar.top = scene.screenHeight() - 6
MeterWidth = scene.screenWidth() - 26
initStatBAR(HungerBar)
initStatBAR(WarmthBar)
hungerPercent = 100
warmthPercent = 100
spawnBaseFood()
Survivor.z = 20
baseFire()
Tools = [img`
    11fffffff1........
    1fcccccccf1.......
    fcddddd11cf.......
    fcd.....1cf.......
    fcd.....dcf.......
    fcd.....dcf.......
    fcd.....dcf.......
    fc1.....dcf.......
    fc11dddddfff......
    1fccccccffccf.....
    .1fffffffbcccf....
    ........fcbcccf...
    .........fcbcccf..
    ..........fcbcccf.
    ...........fcbcccf
    ............fcbccf
    .............fcbbf
    ..............fff1
    `, img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . e e e . e e e . . . . . 
    . . . . e e e e . e e e e . . . . 
    . . . . e e e e . e e e e . . . . 
    . . . e e e e e e e e e e e . . . 
    . . e e e e e e e e e e e e . . . 
    . e e 9 9 1 e e e e e 9 9 1 e . . 
    . e 9 9 9 1 1 e . e 9 9 9 1 1 e . 
    . e 9 9 9 9 9 e . e 9 9 9 9 9 e . 
    . e 9 9 9 9 9 e . e 9 9 9 9 9 e . 
    . . e 9 9 9 e . . . e 9 9 9 e . . 
    . . . e e e . . . . . e e e . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, img`
    ..........22...2..
    .....2..4.25242...
    ......2..22222...2
    ........4.24252.42
    .......2..224425..
    .........24245422.
    .......2..2245542.
    ...........4515...
    ...........ce4....
    ..........ce4.....
    .........ce4..b...
    ........ce4.......
    .......ce4.b...b..
    ......ce4.........
    .....ce4....b.b...
    ....ce4...........
    ...ce4.....b...b..
    ...c4.............
    `]
toolNames = ["Mag. Glass", "Binoculars", "Torch"]
let barLabels = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . 
    . f 7 7 7 7 f 7 7 7 7 f 7 7 7 7 f 7 7 7 f . . 
    . f 7 f f f f 7 f f 7 f 7 f f 7 f 7 f f 7 . . 
    . f 7 7 7 f f 7 f f 7 f 7 f f 7 f 7 f f 7 . . 
    . f 7 f f f f 7 f f 7 f 7 f f 7 f 7 f f 7 . . 
    . f 7 f f f f 7 7 7 7 f 7 7 7 7 f 7 7 7 f . . 
    . f f f f f f f f f f f f f f f f f f f f . . 
    . f 6 f f 6 f 6 6 6 f f 6 6 f f 6 6 6 6 6 . . 
    . f 6 f f 6 f 6 f f f 6 f f 6 f f f 6 f f . . 
    . f 6 6 6 6 f 6 6 f f 6 6 6 6 f f f 6 f f . . 
    . f 6 f f 6 f 6 f f f 6 f f 6 f f f 6 f f . . 
    . f 6 f f 6 f 6 6 6 f 6 f f 6 f f f 6 f f . . 
    . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
barLabels.setFlag(SpriteFlag.RelativeToCamera, true)
barLabels.setPosition(10, scene.screenHeight() - 7)
lantern.startLanternEffect(Survivor)
game.onUpdate(function () {
    if (Survivor.vx > 0) {
        animation.setAction(Survivor, ActionKind.WalkingRight)
    } else if (Survivor.vx < 0) {
        animation.setAction(Survivor, ActionKind.WalkingLeft)
    } else if (Survivor.vy < 0) {
        animation.setAction(Survivor, ActionKind.WalkingUp)
    } else if (Survivor.vy > 0) {
        animation.setAction(Survivor, ActionKind.WalkingDown)
    } else {
        animation.setAction(Survivor, ActionKind.Idle)
    }
})
game.onUpdate(function () {
    if (warmthPercent <= 0) {
        game.splash("You Froze to Death!")
        game.over(false)
    } else if (hungerPercent <= 0) {
        game.splash("You're not immortal! Try finding some mushrooms.")
        game.over(false)
    }
    lantern.setLightBandWidth(17.5)
})
game.onUpdateInterval(2000, function () {
    msuhroom = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 1 1 2 . . . . . 
        . . . 1 2 2 2 2 2 1 2 2 . . . . 
        . . 1 1 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 1 1 2 2 . . 
        . 2 2 2 2 2 1 2 2 2 1 1 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 1 1 2 2 2 2 2 2 2 2 2 1 . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . . b d d d b . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(msuhroom, assets.tile`myTile13`)
    msuhroom.lifespan = 10000
})
game.onUpdateInterval(500, function () {
    distancefromFire = Math.sqrt((Survivor.x - FireIdle.x) ** 2 + (Survivor.y - FireIdle.y) ** 2)
    if (distancefromFire < 48) {
        warmthPercent += 1
        if (warmthPercent > 100) {
            warmthPercent = 100
        }
    } else {
        warmthPercent += -1
        lightbandwidth = 60 + (distancefromFire + 6)
    }
    hungerPercent += -1
    DrawStatSpriteMeter(warmthPercent, WarmthBar, 6, 0)
    DrawStatSpriteMeter(hungerPercent, HungerBar, 7, 0)
})
