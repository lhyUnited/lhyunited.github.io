import Button from './Button.js'
const Header = {
  template: `<div>
  <h1>{{msg}}</h1>
  <Button :value="value"></Button>
  </div>`,
  components: {
    'Button': Button,
  },
  props: ['msg'],
  data () {
    return {
      value: 'lhyUnited'
    }
  }
}
export default Header