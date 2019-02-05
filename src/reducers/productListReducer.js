import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SAVE_PRODUCT_INIT,
  SAVE_PRODUCT_FAILURE,
  SAVE_PRODUCT_SUCCESS
} from '../actions/types';

import initialState from './initialState';

export default function productListReducer (state = initialState.productList, action) {
  switch (action.type){
    case FETCH_PRODUCTS_INIT:

    case FETCH_PRODUCTS_FAILURE:

    case FETCH_PRODUCTS_SUCCESS:

    case SAVE_PRODUCT_INIT:

    case SAVE_PRODUCT_FAILURE:

    case SAVE_PRODUCT_SUCCESS:
    
  }
}
