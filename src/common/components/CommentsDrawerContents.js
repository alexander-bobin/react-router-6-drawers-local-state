import DrawerHeader from "./DrawerHeader"
import TextWithNewLines from "./TextWithNewLines"

// Note: CommentsDrawerContents is used in the UserPage and PostPage
function CommentsDrawerContents ({ comments, onClose }) {
  return (
    <>
      <DrawerHeader title="Comments" onClose={onClose} />
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="mt-6">
            <p><TextWithNewLines text={comment.body} /></p>
            <p className="italic text-zinc-400">Name: {comment.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CommentsDrawerContents
