import axios from 'axios';
import serverAddress from '../util/serverAddress';



export const registerService = async (registerDetails) => {

    let base_address = serverAddress()

    const response = await axios({
        method: 'post',
        url: `${base_address}/api/auth/register`, 
        data: registerDetails,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;
}

export const loginService = async (loginDetails) => {

    let base_address = serverAddress();
    const response = await axios({
        method: 'post',
        url: `${base_address}/api/auth/login`, 
        data: loginDetails,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;


}




