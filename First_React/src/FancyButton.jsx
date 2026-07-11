

const FancyButton = (props) => {
    const { children, large } = props

    const largeStyle = large ? 'text-3xl rounded-full' : 'text-base rounded-md'
    return <button className={`border-2 border-blue-700 bg-blue-200 text-blue-700 px-10 py-2 m-4 rounded-md ${largeStyle}`}>{children}</button>

}

export default FancyButton
























