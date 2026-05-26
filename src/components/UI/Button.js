const Button = ({ textOnly = false, text, onClick }) => {
  const buttonClass = textOnly ? "text-button" : "button"

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  )
}
export default Button