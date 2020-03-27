import { saveAs } from 'file-saver';

export default async function downloadFile(downloadURL) {
    saveAs(downloadURL);
  }