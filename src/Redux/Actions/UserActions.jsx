import axios from 'axios';
import { message } from 'antd';

export const UserLogin = (req) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true });

    try {
        const response = axios.post('api/users/login', req);
        localStorage.setItem('user', JSON.stringify(response.data));
        message.success('login success');
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        console.log(error);
        message.error('something went wrong');
        dispatch({ type: 'LOADING', payload: false });
    }

};

export const UserRegister = (req) => async dispatch => {

    dispatch({ type: 'LOADING', payload: true });

    try {
        const response = axios.post('api/users/register', req);
        message.success('registration success');
        dispatch({ type: 'LOADING', payload: false });
    } catch (error) {
        console.log(error);
        message.error('something went wrong');
        dispatch({ type: 'LOADING', payload: false });
    }

};