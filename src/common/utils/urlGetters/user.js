// Anything we need to navigate to when a drawer is closed
// needs a url getter because it will be used at least twice

export function getUserUrl (userId) {
  return `/users/${userId}`;
}

export function getUserPostUrl (userId, postId) {
  return `/users/${userId}/post/${postId}`;
}

export function getUserAlbumUrl (userId, albumId) {
  return `/users/${userId}/album/${albumId}`;
}
