import DrawerHeader from "./DrawerHeader"

function LoadingDrawerContent ({ onClose }) {
  return (
    <>
      <DrawerHeader title="Loading ..." onClose={onClose} />
      <p>...</p>
    </>
  )

}

export default LoadingDrawerContent
