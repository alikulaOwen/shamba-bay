import React, { Fragment, useEffect } from 'react'
//import Product from '../../../components/product';
import { useDispatch, useSelector } from 'react-redux';

import {getProduct} from '../../../../../actions/productActions'
import Product from '../../../components/product';

export default function Main() {
  const dispatch = useDispatch()

  const  products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProduct)
  },[dispatch])
    return(<Fragment>
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
      
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {[products].map((product) => (
                  <Product key={product._id} product= {product} />
                ))}

                
              </div>
            </div>
          </div>
          </Fragment>
        );      
}
