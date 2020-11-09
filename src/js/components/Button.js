export default {
  name: 'Button',
  template: `
  <div>
    <button @click="gotoGITHUB">{{value}}</button>
  </div>`,
  props: ['value'],
  methods: {
    gotoGITHUB () {
      window.open('https://github.com/lhyUnited/lhyUnited.github.io')
    },
  }
}