import { PRIMARY, COLOR } from './config'

// Detect whether a color is a hex code/rgba or a paper element style

export function getColor(string) {
  if (string) {
    if (string.indexOf('#') > -1 || string.indexOf('rgba') > -1
        || string.indexOf('rgb') > -1) {
      return string
    }

    if (COLOR[string]) {
      return COLOR[string].color
    }

    if (COLOR[`${string}500`]) {
      return COLOR[`${string}500`].color
    }
  }

  return COLOR[`${PRIMARY}500`].color
}
