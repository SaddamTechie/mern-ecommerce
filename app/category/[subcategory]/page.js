import React from 'react'

const Subcategory = async ({params}) => {
    const category = (await params).subcategory;
  return (
    <div>Subcategory {category}</div>
  )
}

export default Subcategory