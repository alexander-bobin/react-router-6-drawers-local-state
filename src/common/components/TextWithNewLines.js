function TextWithNewLines ({ text }) {
  return text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))
}

export default TextWithNewLines
