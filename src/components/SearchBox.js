const SearchBox = ({ value, setSearchValue }) => {
  return (
    <div className='col col-sm-4'>
      <input 
        className='form-control' 
        placeholder='Type to search...'
        value={value}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  )
}

export default SearchBox