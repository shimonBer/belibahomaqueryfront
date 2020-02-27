import axios from 'axios';
import {server_address} from '../config';


export const registerService = async (registerDetails) => {
    try{
        const rawData = await fetch('https://academeez-login-ex.herokuapp.com/api/users/register', 
        {method: "POST" ,
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(registerDetails)
        })
        const data = await rawData.json();
        debugger;

        return data;
    

    }
    catch(err){
        console.log(err);

    }
   
}

export const loginService = async (loginDetails) => {
    try{
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
    catch(err){
        console.log(err);

    }
}




