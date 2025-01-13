// import './Button.css'

function Button({textOnly, onClick, children}) {
    return (
        <button className={textOnly === true ? 'text-button' : 'button'} type={'button'} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button