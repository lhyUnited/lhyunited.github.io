import { isMobile, isShow } from '../utils.js'
let titleConfig
let _canvas
let _ctx
// 初始化
function init (canvas, ctx) {
  _canvas = canvas
  _ctx = ctx
  window.addEventListener('resize', reset);
  document.addEventListener('mousemove', handleMousemove);
  queryTitleConfig();
  fullScreen(canvas, ctx);
  draw(canvas, ctx);
}

function handleMousemove (e) {
  resetCanvas()
  const fillStyle = 'rgb(0,0,0)'
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
    // 锁住鼠标
    block()
  }
}
function draw (canvas, ctx) {
  const fillStyle = 'rgb(255,255,0)';
  const pos = { x: 0, y: 0 };
  const rect = { w: canvas.width, h: canvas.height };
  drawRect(ctx, rect, fillStyle, pos);
}
function queryTitleConfig () {
  // h1标题的宽高
  const h1 = document.querySelector('.title h1')
  titleConfig = h1.getBoundingClientRect()
}
// 窗口大小变化时：
function reset () {
  // 如果是手机访问或屏幕宽度小于992px，则停止重绘
  if (isMobile() || !isShow()) {
    return
  }
  queryTitleConfig()
  resetCanvas()
}
// 单纯重绘canvas
function resetCanvas () {
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
function block () {
  // 移除事件
  window.removeEventListener('resize', reset)
  document.removeEventListener('mousemove',handleMousemove)
  // 让canvas消失
  document.querySelector('#canvas').style.display = 'none'
  document.querySelector('body').style.background = 'rgb(255,255,0)'
  document.querySelector('.title').style.background = '#000'
}
export default init