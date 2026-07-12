

const QuoteBox2 = ( props ) => {
    const { quote } = props;

    return <div className="flex m-4 w-[500px]">
        <div className=" p-4 bg-blue-800 py-8 text-cyan-200 rounded-tl-lg">
        <div className="text-xl m-2">{quote.author}</div>
        <div>{quote.bio}</div>
        </div>
        <div className=" flex justify-center items-center bg-blue-100 text-olive-800 rounded-r-full p-6" > {quote.text} </div>


</div>
}
export default QuoteBox2




























