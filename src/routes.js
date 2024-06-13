import { Route, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './routes/AppLayout'
import RoutedDrawer from './common/components/RoutedDrawer'

import HomePage from './routes/HomePage'

import UsersPage from './routes/UsersPage'
import usersPageLoader from './routes/UsersPage/loader'
import UserPage from './routes/UserPage'
import userPageLoader from './routes/UserPage/loader'
import UserPostDrawer from './routes/UserPostDrawer'
import userPostDrawerLoader from './routes/UserPostDrawer/loader'
import UserPostCommentsDrawer from './routes/UserPostCommentsDrawer'
import userPostCommentsDrawerLoader from './routes/UserPostCommentsDrawer/loader'
import UserAlbumDrawer from './routes/UserAlbumDrawer'
import userAlbumDrawerLoader from './routes/UserAlbumDrawer/loader'
import UserAlbumPhotoDrawer from './routes/UserAlbumPhotoDrawer'
import userAlbumPhotoDrawerLoader from './routes/UserAlbumPhotoDrawer/loader'
import UserTasksDrawer from './routes/UserTasksDrawer'
import UserTasksOpenDrawerTab from './routes/UserTasksOpenDrawerTab'
import userTasksOpenDrawerTabLoader from './routes/UserTasksOpenDrawerTab/loader'
import UserTasksCompleteDrawerTab from './routes/UserTasksCompleteDrawerTab'
import userTasksCompleteDrawerTabLoader from './routes/UserTasksCompleteDrawerTab/loader'

import PostsPage from './routes/PostsPage'
import postsPageLoader from './routes/PostsPage/loader'
import PostPage from './routes/PostPage'
import postPageLoader from './routes/PostPage/loader'
import PostPageCommentDrawer from './routes/PostPageCommentsDrawer'
import postPageCommentsDrawerLoader from './routes/PostPageCommentsDrawer/loader'
import PostsSettingsDrawer from './routes/PostsSettingsDrawer'

function asRoutedDrawer (
  id,
  routeElement,
  { size, retainedQueryStringParamsOnClose } = { size: 'medium ', retainedQueryStringParamsOnClose: [] }) {
  return (
    <Route element={<RoutedDrawer id={id} retainedQueryStringParamsOnClose={retainedQueryStringParamsOnClose} />}>
      <Route index element={<RoutedDrawer.Close />} />
      <Route element={<RoutedDrawer.Open size={size} />}>
        {routeElement}
      </Route>
    </Route>
  )
}

const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/users">
      <Route index element={<UsersPage />} loader={usersPageLoader} />
      <Route path=":userId" element={<UserPage />} loader={userPageLoader}>

        {/* Stacked drawers */}
        {asRoutedDrawer(
          'user-post-drawer',
          <Route path="post/:postId" element={<UserPostDrawer />} loader={userPostDrawerLoader}>

            {/* Drawer which shares contents */}
            {asRoutedDrawer(
              'user-post-comments-drawer',
              <Route path="comments" element={<UserPostCommentsDrawer />} loader={userPostCommentsDrawerLoader} />,
              { size: 'small' }
            )}
          </Route>
        )}

        {/* Stacked drawers */}
        {asRoutedDrawer(
          'user-album-drawer',
          <Route path="album/:albumId" element={<UserAlbumDrawer />} loader={userAlbumDrawerLoader}>
            {asRoutedDrawer(
              'user-album-photo-drawer',
              <Route path="photo/:photoId" element={<UserAlbumPhotoDrawer />} loader={userAlbumPhotoDrawerLoader} />,
              { size: 'large' }
            )}
          </Route>
        )}

        {/* Tabbed drawer */}
        {asRoutedDrawer(
          'user-tasks-drawer',
          <Route path="tasks" element={<UserTasksDrawer />}>
            <Route index element={<UserTasksOpenDrawerTab />} loader={userTasksOpenDrawerTabLoader} />)
            <Route path="completed" element={<UserTasksCompleteDrawerTab />} loader={userTasksCompleteDrawerTabLoader} />)
          </Route>
        )}
      </Route>
    </Route>

    {/* Note: Cannot nest everything undex 'posts' because index routes can't have children */}
    {/* Another option, move list to '/list' undex 'posts' */}
    <Route path="posts" element={<PostsPage />} loader={postsPageLoader}>
      {asRoutedDrawer(
        'posts-settings-drawer',
        <Route path="settings" element={<PostsSettingsDrawer />} />,
        { retainedQueryStringParamsOnClose: ['userId'] }
      )}
    </Route>
    <Route path="posts/:postId" element={<PostPage />} loader={postPageLoader} >

      {/* Drawer which shares contents */}
      {asRoutedDrawer(
        'post-comments-drawer',
        <Route path="comments" element={<PostPageCommentDrawer />} loader={postPageCommentsDrawerLoader} />,
        { size: 'small' }
      )}
    </Route>
  </Route>
)

export default routes
