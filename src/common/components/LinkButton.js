// Note: We are making a button look like a link
function LinkButton ({ className, children, onClick }) {
  return <button onClick={onClick} className={`text-blue-500 hover:underline ${className}`}>
    {children}
  </button>
}

export default LinkButton
