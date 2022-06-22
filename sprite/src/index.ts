import CRATERS from "craters"
(async function main() {
    const assetsManager = new CRATERS.AssetsManager()
    await assetsManager.loadImage("./images/spritesheet.png")
        .then(function(spritesheet) {
            const canvas2DRenderer = new CRATERS.WebGLRenderer(500, 500)
            const frames = [
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 0],
                [1, 1],
            ]
            const sprite = new CRATERS.Sprite(canvas2DRenderer, spritesheet, 214, 282, frames, 1 / 25, 107, 140)
            const renderLoop = new CRATERS.RenderLoop(function(renderLoop: any) {
                canvas2DRenderer.clear()
                sprite.draw(100, 100, renderLoop)
            })
            document.body.append(canvas2DRenderer.canvasElement)
        })
        .catch(function(err) {
            throw err
        })
})()