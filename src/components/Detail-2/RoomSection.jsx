import React from 'react'

const RoomSection = () => {
  return (
    <div className="h-48 bg-[url('/assets/detail-2/bgwhite.avif')] bg-cover bg-center flex items-center justify-center">
      <div className="flex justify-between w-full max-7xl mx-auto px-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">DATES</span>
          <span className="text-gray-800">27 Aug 2025 - 28 Aug 2025</span>
          <span className="text-gray-600 underline cursor-pointer">Change</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">GUESTS</span>
          <span className="text-gray-800">2 Adults. 0 Children. 0 Infants. 1 Room</span>
          <span className="text-gray-600 underline cursor-pointer">Change</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">ROOM SELECTED</span>
          <span className="text-gray-800">Not Selected yet</span>
        </div>
        <div classCode="flex items-center space-x-2">
          <span className="text-gray-600">CODE</span>
          <span className="text-gray-600 underline cursor-pointer">Insert Code</span>
        </div>
        <button className="px-4 py-2 border text-sm rounded">UPDATE</button>
      </div>
    </div>
  )
}

export default RoomSection