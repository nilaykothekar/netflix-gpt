const GPTSearch = () => {
  return (
    <form className="bg-black w-1/2 p-8 rounded-lg shadow-2xl">
      <h1 className="text-white font-bold text-2xl mb-8">Netflix Search</h1>
      <div className="grid grid-cols-12">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="bg-gray-800 py-2 px-4 rounded-l-2xl text-white col-span-10"
        />
        <button className="bg-red-700 col-span-2 rounded-r-2xl text-white py-2">
          Search
        </button>
      </div>
    </form>
  );
};

export default GPTSearch;
