import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Drawer as MuiDrawer } from '@mui/material'

const DrawerLayout = styled('div', {
  shouldForwardProp: (prop) => prop !== 'size',
})(({ size }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: size === 'small' ? '320px' : size === 'medium' ? '480px' : '640px',
  padding: '20px',
}))

/**
 * The Drawer is a low level component that slides a panel in from the right side of the screen. It is typically used in conjunction with `Drawer.Header`, `Drawer.Body` and/or `Drawer.FormFooter`.
 *
 * It's quite likely you do not need to use this component directly. Instead, consider using higher level components like `DetailsDrawer` or `FormDrawer` (if they exist).
 */
const Drawer = forwardRef(function Drawer({ isOpen = false, onClose, children, size = 'medium', id }, ref) {
  const props = {
    anchor: 'right',
    open: isOpen,
    onClose,
    elevation: 8,
    id,
  }
  return (
    <MuiDrawer ref={ref} {...props}>
      <DrawerLayout size={size}>{children}</DrawerLayout>
    </MuiDrawer>
  )
})

Drawer.propTypes = {
  /**
   * The contents of the drawer. Will typically include DrawerHeader, DrawerBody and/or DrawerFooter.
   */
  children: PropTypes.node.isRequired,
  /**
   * The id of the drawer. This is used to ensure that the drawer is accessible to screen readers. It should be unique in the document.
   */
  id: PropTypes.string.isRequired,
  /**
   * If true, the drawer is open. Defaults to false.
   */
  isOpen: PropTypes.bool,
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: PropTypes.func,
  /**
   * The width of the drawer. Defaults to medium.
   *
   * Small should only be used for filter drawers.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Drawer
