import axios from "axios"
import serverAddress from "../util/serverAddress"

const base_address = serverAddress()


const reportMakerService = async (reportProperties) => {
    // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
    const headers = { "Content-Type": "blob", "x-access-token": localStorage.getItem("query-auth-token") }
    const config = {
        method: "GET",
        url: `${base_address}/api/reports/staticReport?reportType=${reportProperties.reportType}&month=${reportProperties.year}-${reportProperties.month}`,
        responseType: "arraybuffer",
        headers,
    }

    try {
        const response = await axios(config)

        const outputFilename = `${reportProperties.reportType}-${reportProperties.month}-${reportProperties.year}.xlsx`

        // If you want to download file automatically using link attribute.
        const url = URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", outputFilename)
        document.body.appendChild(link)
        link.click()

        // OR you can save/write file locally.
        // fs.writeFileSync(outputFilename, response.data)
    } catch (error) {
        throw Error(error)
    }
}


const reportNamesService = async () => {
    const response = await axios({
        method: "get",
        url: `${base_address}/api/reports/reportNames`,
        headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("query-auth-token"),
        },
    })
    return response
}

export { reportMakerService, reportNamesService }
