function App() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-200 font-poppins">
      <div className="flex flex-col p-6 mx-4 my-6 bg-white shadow-lg rounded-xl md:flex-row">
        <div className="flex items-start justify-center p-6">
          <img className="duration-300 transform w-72 hover:scale-105" src={require("./images/headphone.png")} alt="headphone" />
        </div>
        <div className="p-2 space-y-6 text-center md:p-6 md:text-left">
          <div className="px-3 py-1 mx-auto text-white bg-black rounded-full md:mx-0 w-fit">
            Free Shipping
          </div>
          <h1 className="text-2xl font-semibold">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </h1>
          <p className="line-through">$799</p>
          <strong className="text-5xl font-bold">$599</strong>
          <p className="text-gray-500">This offer is valid until April 3rd or as long as stock lasts!</p>
          <button className="w-full py-5 text-white capitalize transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-700">
            Add to card
          </button>
          <div className="flex flex-row items-center justify-start gap-4 group">
            <div className="w-5 h-5 bg-green-500 rounded-full group-hover:animate-ping"></div>
            <p>50+ pcs. in stock</p>
          </div>
          <div className="flex flex-col space-y-4 text-xl md:flex-row md:space-y-0 md:space-x-4">
            <button className="flex flex-row items-center justify-center w-full py-3 space-x-3 border-2 rounded-2xl border-slate-300"><img className="w-8" src={require('./images/weight.png')} alt='weight' /><span>Add to card</span></button>
            <button className="flex flex-row items-center justify-center w-full py-3 space-x-3 border-2 rounded-2xl border-slate-300"><img className="w-8" src={require('./images/heart.png')} alt='heart' /><span>Add to card</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
