function Rectangle(props) {
    return <rect {...props}>{props.children}</rect>
}

export { Rectangle }