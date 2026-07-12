

const SearchCompGoog = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center bg-orange-100">
            <div className="text-5xl text-orange-500 mb-4"> FOOGLE </div>
            <div className="bg-orange border border-orange-300 p-2 rounded-full w-80 flex items-center"><i className="fa-solid fa-magnifying-glass text-orange-500 ml-2"></i>
            <input className="bg-orange focus:outline-none flex-1 mx-4" placeholder="Search..." />
            </div>
            <div className="flex mt-4">
                <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">Foogle Search</button>
                <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">Image Search</button>
            </div>
        </div>
    )
}       


export default SearchCompGoog




