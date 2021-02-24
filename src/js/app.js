import Footer from './components/Footer.js'
import myCanvas from './canvasMethods/index.js'
const app = new Vue({
  el: '#app',
  components: {
    'MyFooter': Footer,
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