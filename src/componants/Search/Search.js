import './search.css';
function Search() {
  return (
    <div className='contaner'>
   <form>
        <input type="text" placeholder="Search..." className="search-input"/>
        <button type="submit" className="search-button">Search</button>
</form>
    </div>
  );
}

export default Search;
