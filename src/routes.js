import { Route, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './routes/AppLayout'

import HomePage from './routes/HomePage'

import UsersPage from './routes/UsersPage'
import usersPageLoader from './routes/UsersPage/loader'
import UserPage from './routes/UserPage'
import userPageLoader from './routes/UserPage/loader'

import PostsPage from './routes/PostsPage'
import postsPageLoader from './routes/PostsPage/loader'
import PostPage from './routes/PostPage'
import postPageLoader from './routes/PostPage/loader'

const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/users">
      <Route index element={<UsersPage />} loader={usersPageLoader} />
      <Route path=":userId" element={<UserPage />} loader={userPageLoader} />
    </Route>
    <Route path="posts">
      <Route index element={<PostsPage />} loader={postsPageLoader} />
      <Route path=":postId" element={<PostPage />} loader={postPageLoader} />
    </Route>
  </Route>
)

export default routes
