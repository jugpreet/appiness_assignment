import {login,tableData,Logout,Error} from './types'

export const loginData = (data) => dispatch => {
    dispatch({
     type: login,
     payload: {
        status: 'loading',
        payload: data
    }
    })
   }

   export const tableDataAction = ()=> ({
   
     type: tableData,
   
   })

   export const logout=()=>({
       type: Logout
   })

   export const setError = (data) => ({
    type: Error,
    payload: data,
  });