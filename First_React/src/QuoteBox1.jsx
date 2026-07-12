

const QuoteBox1 = (props) => {
    const { quote } = props;
    console.log(quote);

return (
    <div className="flex flex-col m-4 w-[400px]">
        <div className=" p-4 bg-cyan-600 py-8 text-cyan-200 rounded-t-lg">{quote.text}</div>
        <div className=" p-4 bg-stone-100 p-4 flex flex-col items-center rounded-b-lg ">
        <div className="text-cyan-700 py-2 text-2xl mb-2"> {quote.author}</div>
        <div className="text-slate-400"> {quote.bio} </div>
    </div>
    </div>
);
};

export default QuoteBox1;
