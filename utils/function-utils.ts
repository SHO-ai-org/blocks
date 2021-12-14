/**
 *
 * Debouce function. This prevents your UI code from needing to process every event and also drastically reduces the number of API calls sent to your server.
 * documentaiton: https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
 *
 * @param  {void} func: the function to delay execution.
 * @param  {Number} delay: in ms, the delay between calls. Requested calls between the delay will be cancelled.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = (func: Function, delay: number): Function => {
  let inDebounce
  inDebounce = undefined
  return function (...rest) {
    const args = rest
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    clearTimeout(inDebounce)
    return (inDebounce = setTimeout(function () {
      return func.apply(context, args)
    }, delay))
  }
}
