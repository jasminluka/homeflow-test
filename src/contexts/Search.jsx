import { createContext, useState, useContext } from 'react'

const SearchContext = createContext(null)

const SearchProvider = ({ children }) => {
  const searchInput = useState('')

  return (
    <SearchContext.Provider value={searchInput}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider

export const useSearchInput = () => useContext(SearchContext)
