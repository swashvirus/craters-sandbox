import CRATERS from "craters"
const map2dTilemap = "./assets/tilemap.json";
(async function main() {
  const canvas2DRenderer = new CRATERS.WebGLRenderer(800, 668)
  const tilemapManager = new CRATERS.TilemapManager(canvas2DRenderer)
  const platformerTilemap = await tilemapManager.load(map2dTilemap)
  const renderLoop = new CRATERS.RenderLoop(function (renderLoop: typeof CRATERS.RenderLoop) {
    canvas2DRenderer.clear()
    platformerTilemap.draw()
  })
  document.body.append(canvas2DRenderer.canvasElement)
})()