import { FaSearch } from 'react-icons/fa'

import { useSearchInput } from 'contexts/Search'

const SearchBox = () => {
  const [searchInput, setSearchInput] = useSearchInput()

  return (
    <div className="relative mt-5">
      <input
        placeholder="Enter a search term"
        className="w-full py-3 pl-5 pr-10 border border-gray-400 rounded-lg"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <FaSearch
        className="absolute top-3.5 right-3.5 text-gray-400"
        size={20}
      />
    </div>
  )
}

export default SearchBox
