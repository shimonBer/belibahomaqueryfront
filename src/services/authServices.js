import axios from 'axios';


export const registerService = async (registerDetails) => {

    const response = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/register`, 
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
        url: `${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/login`, 
        data: loginDetails,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;


}




