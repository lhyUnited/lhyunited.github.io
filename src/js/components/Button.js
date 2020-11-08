export default {
  name: 'Button',
  template: '<button @click="gotoGITHUB">{{value}}</button>',
  props: ['value'],
  methods: {
    gotoGITHUB () {
      window.open('https://github.com/lhyUnited')
    }
  }
}