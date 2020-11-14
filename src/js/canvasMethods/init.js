// 初始化
function init (canvas, ctx) {
  fullScreen(canvas, ctx);
  draw(canvas, ctx)
  window.addEventListener('resize', () => { reset(canvas, ctx) });
  document.addEventListener('mousemove', (e) => {
    handleMousemove(e, canvas, ctx)
  })
}
function handleMousemove (e, canvas, ctx) {
  reset(canvas, ctx)
  const fillStyle = 'rgb(0,0,0)'
  console.log(e)
  // if (e.clientX > 511)
  drawRect(ctx,
    {
      w: e.clientX,
      h: e.clientY,
    }, fillStyle, {
    x: e.clientX,
    y: e.clientY,
  })
}
function draw (canvas, ctx) {
  const fillStyle = 'rgb(255,255,0)';
  const pos = { x: 0, y: 0 };
  const rect = { w: canvas.width, h: canvas.height };
  drawRect(ctx, rect, fillStyle, pos);
}
function reset (canvas, ctx) {
  ctx.beginPath()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.closePath()
  fullScreen(canvas, ctx)
  draw(canvas, ctx)
}
function fullScreen (canvas, ctx) {
  canvas.height = document.body.offsetHeight
  canvas.width = document.body.offsetWidth
}
function drawRect (ctx, rect, fillStyle, pos) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.rect(pos.x, pos.y, rect.w, rect.h);
  ctx.fill();
  ctx.closePath();
}
export default init