import axios from 'axios';
import {server_address} from '../config';


export const reportMaker = async (reportProperties) => {

    const response = await axios({
        method: 'get',
        url: `${server_address}/reports/${reportProperties.reportName}?month=${reportProperties.year}-${reportProperties.month}`, 
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("query-auth-token")
        }
    })
    return response;

    
}