import React from 'react'
import Header from '../../components/Header'
import Filter from '../../components/Filter'
import Products from '../Products'
import Services from '../../components/Services'


const Shop = ({ products, sortBy, sortOrder, searchQuery, showPerPage, onSortChange, onSearch, onShowChange, totalItemsCount  }) => {
  return (
    <div>
       <Header/>
       <Filter
        onSortChange={onSortChange}
        onSearch={onSearch}
        onShowChange={onShowChange} 
        totalItemsCount={totalItemsCount}
        showPerPage={showPerPage}
      />
       <Products
        products={products}
        sortBy={sortBy}
        sortOrder={sortOrder}
        searchQuery={searchQuery}
        showPerPage={showPerPage}
      />
       <Services />
    </div>
  )
}

export default Shop;
