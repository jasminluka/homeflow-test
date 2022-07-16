import { useCallback } from 'react'
import { useQuery } from 'react-query'

import PropertyCard from './PropertyCard'
import { useSearchInput } from 'contexts/Search'
import { getProperties } from 'api/properties'
import { useLocalStorage, useDebounce } from 'custom/hooks'

const Properties = () => {
  const {
    isLoading,
    error,
    data: properties,
  } = useQuery(['properties'], getProperties)

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useLocalStorage(
    'savedProperties',
    []
  )

  const [searchInput] = useSearchInput()

  const debouncedSearchInput = useDebounce(searchInput, 300)
  const matchWord = new RegExp(debouncedSearchInput, 'i')
  const filteredProperties = properties?.filter(
    (property) => property?.short_description?.search(matchWord) !== -1
  )

  const saveToBookmarks = useCallback(
    (propertyId) => {
      setSavedProperties((prevSavedProperties) => [
        ...prevSavedProperties,
        propertyId,
      ])
    },
    [setSavedProperties]
  )

  const removeFromBookmarks = useCallback(
    (propertyId) => {
      setSavedProperties((prevSavedProperties) =>
        prevSavedProperties?.filter(
          (prevSavedProperty) => prevSavedProperty !== propertyId
        )
      )
    },
    [setSavedProperties]
  )

  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error.message}`

  const propertiesToShow = searchInput ? filteredProperties : properties

  return (
    <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {propertiesToShow?.length > 0 ? (
        propertiesToShow?.map((property) => {
          const isSavedToBookmark = savedProperties?.find(
            (savedProperty) => savedProperty === property?.property_id
          )

          return (
            <PropertyCard
              {...{
                key: property.property_id,
                property,
                isSavedToBookmark,
                saveToBookmarks,
                removeFromBookmarks,
              }}
            />
          )
        })
      ) : (
        <p className="text-xl font-light tracking-wider">
          No properties found...
        </p>
      )}
    </div>
  )
}

export default Properties
