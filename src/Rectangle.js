function Rectangle({ color, xFigureLocation, yFigureLocation }) {
    return <rect x={xFigureLocation} y={yFigureLocation} width="100" height="100" stroke={color} fill={color} strokeWidth="5" />
}

export { Rectangle }