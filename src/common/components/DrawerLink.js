// Note: We are making a button look like a link
function DrawerLink ({ className, children, onClick }) {
  return <button onClick={onClick} className={`text-blue-500 hover:underline ${className}`}>
    {children}
  </button>
}

export default DrawerLink
