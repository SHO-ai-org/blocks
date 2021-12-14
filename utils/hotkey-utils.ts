import { isKeyHotkey } from 'is-hotkey'

/**
 * Executes a given function on a specific hotkey and stop Browser's default events.
 *
 * @param {string} hotkey
 * @param {function} callback
 * @param {object} event
 */
export const executeFunctionOnHotKey = (hotkey, callback, event): void => {
  if (event.code && isKeyHotkey(hotkey)(event)) {
    callback()
    // Stop hotkey propagation to Browser's hotkey mapping.
    event.preventDefault()
  }
}
