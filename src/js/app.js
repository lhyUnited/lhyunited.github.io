import Header from './components/Header.js'
import Button from './components/Button.js'
import myCanvas from './canvasMethods/index.js'
const app = new Vue({
  el: '#app',
  components: {
    'MyHeader': Header,
    Button: Button,
  },
  data () {
    return {
      msg: 'Hello World'
    }
  },
  mounted () {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')
    myCanvas.init(canvas, ctx)
  }
})