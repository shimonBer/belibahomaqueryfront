import serverAddress from "./util/serverAddress"
import io from 'socket.io-client';
import downloadFile from "./util/downloadReport";

const  socket = io(serverAddress());

socket.on('finishReport', async (data) => {
    console.log(data);
    await downloadFile(data.downloadURL);

})