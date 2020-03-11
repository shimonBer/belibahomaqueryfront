import { PROD_SERVER_ADDRESS, DEV_SERVER_ADDRESS } from './config.js';

export default function serverAddress(){
    let base_address;
    if (process.env.NODE_ENV === 'production'){
        base_address = PROD_SERVER_ADDRESS;
    } else {
        base_address = DEV_SERVER_ADDRESS;
    }
    return base_address;
}