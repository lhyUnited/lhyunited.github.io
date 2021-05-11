/** 储存用户所选模式 */
export default class ModeStore {
  constructor(mode) {
    this.mode = mode
  }

  // 从localstorage读取用户mode
  getMode() {
    const mode = window.localStorage.getItem('mode')
    return mode
  }

  // 设置localstorage
  setMode (mode) {
    window.localStorage.setItem('mode', mode)
  }
}
