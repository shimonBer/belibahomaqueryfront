import axios from 'axios';
import serverAddress from '../util/serverAddress';


export const reportMaker = async (reportProperties) => {

    let base_address = serverAddress()
    const response = await axios({
        method: 'get',
        url: `${base_address}/reports/${reportProperties.reportName}?month=${reportProperties.year}-${reportProperties.month}`, 
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("query-auth-token")
        }
    })
    return response;

    
}