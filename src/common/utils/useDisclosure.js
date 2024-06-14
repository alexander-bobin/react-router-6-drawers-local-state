import { callAllHandlers } from './function'
import { useCallback, useMemo, useState } from 'react'

/**
 * A simple React hook to manage open/close states for overlay components like a Drawer or Dialog. Can be
 * used in a controlled or uncontrolled manner.
 *
 * @param options.defaultIsOpen {boolean} the default open state for an uncontrolled disclosure
 * @param options.id {string} the ID of the disclosure
 * @param options.isOpen {boolean} the current open state for a controlled disclosure
 * @param options.onClose {function} a function to call when the disclosure should be closed
 * @param options.onOpen {function} a function to call when the disclosure should be opened
 *
 * @returns an object with the following interface:
 *  - `getDisclosureProps` — function that returns props that should be supplied to the disclosure
 *  - `getTriggerProps` — function that returns props that should be supplied to the trigger for the disclosure
 *  - `isOpen` — whether the disclosure is currently open or not
 *  - `isControlled` — whether the disclosure's open state is controlled or not
 *  - `onClose` — closes the disclosure
 *  - `onOpen` — opens the disclosure
 */
function useDisclosure(options = {}) {
  const { defaultIsOpen = false, id, isOpen: isOpenOption, onClose: onCloseOption, onOpen: onOpenOption } = options

  const [isOpenState, setIsOpenState] = useState(defaultIsOpen)
  const isControlled = isOpenOption !== undefined
  const isOpen = isControlled ? isOpenOption : isOpenState

  /**
   * Close/hide the disclosure. If the disclosure is controlled, we just call the supplied onClose callback
   * as the consumer will be expected to update it's own state. If the disclosure is controlled, we
   * update our internal open state as well. We allow the onCloseOption to prevent the default behaviour
   * when the disclosure is uncontrolled via callAllHandlers.
   */
  const onClose = useMemo(
    () => callAllHandlers(onCloseOption, () => !isControlled && setIsOpenState(false)),
    [isControlled, onCloseOption],
  )

  /**
   * Open/show the disclosure. If the disclosure is controlled, we just call the supplied onClose callback
   * as the consumer will be expected to update it's own state. If the disclosure is controlled, we
   * update our internal open state as well. We allow the onOpenOption to prevent the default behaviour
   * when the disclosure is uncontrolled via callAllHandlers.
   */
  const onOpen = useMemo(
    () => callAllHandlers(onOpenOption, () => !isControlled && setIsOpenState(true)),
    [isControlled, onOpenOption],
  )

  /**
   * Open/show or close/hide the disclosure based on it's current state.
   */
  const onToggle = useCallback(
    (...args) => {
      const action = isOpen ? onClose : onOpen
      action(...args)
    },
    [isOpen, onOpen, onClose],
  )

  return useMemo(
    () => ({
      getDisclosureProps: (props = {}) => ({
        ...props,
        id,
        isOpen,
        onClose: callAllHandlers(props.onClose, onClose),
      }),
      getTriggerProps: (props = {}) => ({
        ...props,
        'aria-expanded': String(isOpen),
        'aria-controls': id,
        onClick: callAllHandlers(props.onClick, onToggle),
      }),
      isOpen: Boolean(isOpen),
      isControlled,
      onOpen,
      onClose,
    }),
    [id, isControlled, isOpen, onClose, onOpen, onToggle],
  )
}

export default useDisclosure
