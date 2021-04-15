/* Redux part reference: I applied the ideas and code from a course on Udemy I've taken:
   Build Ecommerce Website Like Amazon
   github link: https://github.com/basir/amazona
 */

import productService from "../services/product-service"
import {useEffect, useState} from "react";
import Axios from "axios";

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM"

export const addItem = (pid, qty) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${pid}`)
    console.log(data)
    dispatch({
                type: ADD_ITEM,
                payload: {
                    name: data.name,
                    image_link: data.image_link,
                    price: data.price,
                    product: data.id,
                    qty
                }
             })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const deleteItem = (pid) => (dispatch, getState) => {
    dispatch({
                type: DELETE_ITEM,
                payload: pid
            })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}