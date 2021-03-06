import React, {useReducer}from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';
import { SHOW_USER_INFO, GET_USERS_INFO, UPDATE_USER_INFO, DELETE_USER, USER_ACTIVE}from '../../types/index';
import axios from '../../config/axios';


const UserState = props => {

    const initialState = {
        userInfo : [],
        newUserInfo: false,
        getDni: {
            dni: ''
        },
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    //CRUD fuctions ADMIN. 
    const showUserInfo =  () =>{
        dispatch({
            type: SHOW_USER_INFO
        })
    }

    //get USERS INFO

    const getUserInfo = async () => {
       try {
           const reply = await axios.get('/users')
        dispatch({
            type: GET_USERS_INFO,
            payload: reply.data.user
        })
       } catch (error) {
           console.log(error)
           
       }
    }

    const getUserByDni = async userDni => {
        console.log(userDni.dni)
       try {
           const reply = await axios.get(`/users/${userDni.dni}`)
            console.log(reply)
        dispatch({
            type: GET_USERS_INFO,
            payload: reply.data.user
        })
       } catch (error) {
           console.log(error)
           
       }
    }

    const updateUserInfo = async userId => {
        console.log(userId._id)
        try {
            const reply = await axios.put(`/users/${ userId._id }`, userId);
            console.log(reply)
           dispatch({
            type: UPDATE_USER_INFO,
            payload: reply.data.userId      
        })
           
       } catch (error) {
           console.log(error);
       }
    }

    const deleteUserById = async userId => {
        try {
            const reply = await axios.delete(`/users/${ userId}`);
            console.log(reply)
           dispatch({
            type: DELETE_USER,
            payload: reply.data.user 
        })
           
       } catch (error) {
           console.log(error);
       }
    }

    const userActive = async user => {
        try {
            const reply = await axios.put(`/users/${ user._id }`, user);
            console.log(reply)
           dispatch({
            type: USER_ACTIVE,
            payload: reply.data.user    
        })
           
       } catch (error) {
           console.log(error);
       }
    }
    
    return (
        <UserContext.Provider
            value={{
                userInfo : state.userInfo,
                // newuserInfo: state.newUserInfo,
                showUserInfo,
                // getUserInfoById,
                getUserByDni,
                getUserInfo,
                getDni: state.getDni,
                updateUserInfo,
                deleteUserById,
                userActive
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;