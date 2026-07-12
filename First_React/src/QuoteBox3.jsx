

const QuoteBox3 = ( props ) => {
    const { quote } = props;

    return <div className="flex flex-col m-4 w-[450px]">
        <div className=" p-4 bg-pink-700 py-8 text-cyan-200 rounded-tl-lg rounded-r-lg" >{quote.text} </div>
        
        <div className=" flex flex-col p-3 bg-pink-100 rounded-bl-lg rounded-br-lg w-[300px] ">
            <div className="text-xl flex items-left text-pink-800 ">
                {quote.author}
            </div>
            <div className="text-pink-500 flex items-left ">
                {quote.bio}
            </div>
        </div>
</div>

}

export default QuoteBox3




























