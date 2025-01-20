export function convertGsToHttp(gsUrl) {
  if (!gsUrl.startsWith('gs://')) {
    throw new Error('Invalid gs:// URL');
  }
  const bucket = gsUrl.split('/')[2];
  const path = gsUrl.split('/').slice(3).join('/');
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${path}?alt=media`;
}