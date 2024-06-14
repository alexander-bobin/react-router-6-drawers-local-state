export async function getAlbumById (albumId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
  return response.json()
}
