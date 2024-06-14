export async function getPhotosByAlbumId (albumId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  return response.json()
}

export async function getPhotoById (photoId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
  return response.json()
}
