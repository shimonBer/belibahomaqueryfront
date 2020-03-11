import axios from 'axios';


export const reportMaker = async (reportProperties) => {

    const response = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_SERVER_ADDRESS}/reports/${reportProperties.reportName}?month=${reportProperties.year}-${reportProperties.month}`, 
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("query-auth-token")
        }
    })
    return response;

    
}