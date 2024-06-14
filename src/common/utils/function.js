/**
 * Creates a function that will call each handler in turn until all have been
 * run or one of the handlers cancels the event. If any particular handler is
 * asynchronous, it will be awaited before moving to the next handler.
 *
 * @returns An async function
 */
export function callAllHandlers(...fns) {
  return async function func(event, ...args) {
    if (event?.defaultPrevented) {
      // If the event is already cancelled, bail early as there's no need
      // to run any of the handlers. This is possible if a native event
      // listener cancels the event prior to any React handlers firing.
      return
    }

    for (let fn of fns) {
      if (fn) {
        await fn(event, ...args)
        if (event?.defaultPrevented) {
          break
        }
      }
    }
  }
}
