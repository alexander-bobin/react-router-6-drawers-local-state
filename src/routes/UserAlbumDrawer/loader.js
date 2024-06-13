async function userAlbumDrawerLoader({ params }) {
  const album = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)
  const photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`)
  const albumData = await album.json()
  const photosData = await photos.json()
  return { ...albumData, photos: photosData }
}

export default userAlbumDrawerLoader
