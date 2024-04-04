import css from '../style/variables.scss?inline'

const cssVars = (() => {
  return css.match(/(--.*):/g).map((variable) => variable.replace('--', '').replace(':', ''))
})()

export default cssVars
