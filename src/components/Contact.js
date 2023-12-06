export const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="font-bold  text-2xl m-3 p-3">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
                <button className="p-2 m-2 bg-gray-900 text-green-400 rounded-lg">Submit</button>
            </form>    
        </div>        
    )
}