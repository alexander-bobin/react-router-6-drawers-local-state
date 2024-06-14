import { Route, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './routes/AppLayout'
import RoutedDrawer from './common/components/RoutedDrawer'

import HomePage from './routes/HomePage'

import UsersPage from './routes/UsersPage'
import usersPageLoader from './routes/UsersPage/loader'
import UserPage from './routes/UserPage'
import userPageLoader from './routes/UserPage/loader'

import PostsPage from './routes/PostsPage'
import postsPageLoader from './routes/PostsPage/loader'
import PostPage from './routes/PostPage'
import postPageLoader from './routes/PostPage/loader'
import PostPageCommentDrawer from './routes/PostPageCommentsDrawer'
import postPageCommentsDrawerLoader from './routes/PostPageCommentsDrawer/loader'

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
      <Route path=":userId" element={<UserPage />} loader={userPageLoader} />
    </Route>

    {/* Note: Cannot nest everything undex 'posts' because index routes can't have children */}
    {/* Another option, move list to '/list' undex 'posts' */}
    <Route path="posts" element={<PostsPage />} loader={postsPageLoader} />

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
