import Header from './components/Header.js'
import Button from './components/Button.js'
const app = new Vue({
  el: '#app',
  components: {
    'MyHeader': Header,
    Button: Button,
  },
  data () {
    return {
      msg: 'LHY💓HY'
    }
  }
})