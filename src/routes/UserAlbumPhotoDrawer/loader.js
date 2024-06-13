async function userAlbumPhotoDrawerLoader ({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`)
}

export default userAlbumPhotoDrawerLoader
