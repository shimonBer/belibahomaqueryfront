import { saveAs } from 'file-saver';

export default async function downloadFile(srcFilename) {
    const bucketName = 'beliba-homa-reports';
    saveAs(`https://storage.cloud.google.com/${bucketName}/${srcFilename}`);
  }