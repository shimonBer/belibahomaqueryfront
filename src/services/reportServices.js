import axios from 'axios';
import serverAddress from '../util/serverAddress';

const base_address = serverAddress();

const reportMakerService = async (reportProperties) => {

    const response = await axios({
        method: 'get',
        url: `${base_address}/api/reports/staticReport?reportType=${reportProperties.reportType}&month=${reportProperties.year}-${reportProperties.month}`, 
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("query-auth-token")
        }
    })
    return response;
}

const reportNamesService = async() => {

    const response = await axios({
        method: 'get',
        url: `${base_address}/api/reports/reportNames`, 
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("query-auth-token")
        }
    })
    return response;

}

export { reportMakerService, reportNamesService };