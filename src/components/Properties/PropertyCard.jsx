import { FaBookmark } from 'react-icons/fa'

import { Image } from 'custom/components'
import fallbackHouseImage from 'images/default-house.jpeg'

const PropertyCard = ({
  property,
  isSavedToBookmark,
  saveToBookmarks,
  removeFromBookmarks,
}) => {
  const toggleSavingToBookmarks = () => {
    isSavedToBookmark
      ? removeFromBookmarks(property?.property_id)
      : saveToBookmarks(property?.property_id)
  }

  return (
    <div className="overflow-hidden shadow-xl bg-gray-50 group">
      <div className="relative">
        <Image
          src={`https://mr0.homeflow.co.uk/${property.photos[0]}`}
          fallbackImage={fallbackHouseImage}
          alt={property.display_address}
        />

        <button
          className="absolute top-0 right-2"
          title="Click to bookmark this property"
          onClick={toggleSavingToBookmarks}
        >
          <FaBookmark
            className={isSavedToBookmark ? 'text-red-600' : 'text-yellow-400'}
            size="40"
          />
        </button>

        <p className="absolute bottom-0 right-0 translate-x-[calc(100%-2rem)] group-hover:translate-x-0 transition-transform duration-300 border-t border-l bg-gray-50">
          <span className="inline-block w-8 px-2 py-1 text-center bg-blue-800 text-slate-50">
            £
          </span>
          <span className="inline-block px-2 py-1">{property.price}</span>
        </p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  )
}

export default PropertyCard
