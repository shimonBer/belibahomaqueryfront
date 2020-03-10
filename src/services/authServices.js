import axios from 'axios';
import { server_address } from '../util/config';


export const registerService = async (registerDetails) => {

    const response = await axios({
        method: 'post',
        url: `${server_address}/api/auth/register`, 
        data: registerDetails,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;
}

export const loginService = async (loginDetails) => {

    const response = await axios({
        method: 'post',
        url: `${server_address}/api/auth/login`, 
        data: loginDetails,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;


}




