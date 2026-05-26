const Button = ({ textOnly = false, text }) => {
  const buttonClass = textOnly ? "text-button" : "button"

  return (
    <button className={buttonClass}>
      {text}
    </button>
  )
}
export default Button