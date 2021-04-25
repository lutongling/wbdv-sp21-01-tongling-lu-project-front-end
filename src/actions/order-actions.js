// import Axios from "axios";
//
// export const CREATE_ORDER = "CREATE_ORDER";
//
// export const createOrder = (order) => async (dispatch, getState) => {
//     const {data} = await Axios.post(`/api/orders`, order, {
//         headers: {
//
//         }
//     })
//     dispatch({
//                  type: CREATE_ORDER,
//                  payload: order
//             });
//
// }