import '../Searchimage.css'
function Searchimage({searchQuery,setSearchQuery}){

    return (
            <div className='search-head'>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='search-input' placeholder='Search' />
            </div>
    );
};

export default Searchimage;