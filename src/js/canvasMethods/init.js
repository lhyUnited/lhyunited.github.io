let titleConfig
let _canvas
let _ctx
// 初始化
function init (canvas, ctx) {
  _canvas = canvas
  _ctx = ctx
  fullScreen(canvas, ctx);
  // h1标题的宽高
  const h1 = document.querySelector('.title h1')
  titleConfig = h1.getBoundingClientRect()
  draw(canvas, ctx)
  window.addEventListener('resize', reset);
  document.addEventListener('mousemove', handleMousemove)
}

function handleMousemove (e) {
  reset()
  const fillStyle = 'rgb(0,0,0)'
  // console.log(e.clientX, e.clientY)
  // if (e.clientX > 511)
  drawRect(_ctx,
    {
      w: e.clientX,
      h: e.clientY,
    }, fillStyle, {
    x: e.clientX,
    y: e.clientY,
  })

  if ((e.clientX < titleConfig.x + 25 && e.clientX > titleConfig.x - 25) &&
      (e.clientY < titleConfig.y + 25 && e.clientY > titleConfig.y - 25)) {
    // alert('yes')
    // 锁住鼠标
    block(e, titleConfig)
  }
}
function draw (canvas, ctx) {
  const fillStyle = 'rgb(255,255,0)';
  const pos = { x: 0, y: 0 };
  const rect = { w: canvas.width, h: canvas.height };
  drawRect(ctx, rect, fillStyle, pos);
}
function reset () {
  _ctx.beginPath()
  _ctx.clearRect(0, 0, _canvas.width, _canvas.height)
  _ctx.closePath()
  fullScreen(_canvas, _ctx)
  draw(_canvas, _ctx)
}
function fullScreen (canvas, ctx) {
  canvas.height = document.body.offsetHeight - 180
  // 减去底部180px
  canvas.width = document.body.offsetWidth
}
function drawRect (ctx, rect, fillStyle, pos) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.rect(pos.x, pos.y, rect.w, rect.h);
  ctx.fill();
  ctx.closePath();
}
// 需要一个函数，当用户手滑的差不多时，直接将标题锁死
function block (e, titleConfig) {
  // 移除事件
  window.removeEventListener('resize', reset)
  document.removeEventListener('mousemove',handleMousemove)
  // 重新绘制一个矩形
  reset()
  drawRect(_ctx, {
    w: titleConfig.width + 10,
    h: titleConfig.height+ 10
  }, 'rgb(0,0,0)', {
    x: titleConfig.x - 5,
    y: titleConfig.y - 5
  })
}
export default init