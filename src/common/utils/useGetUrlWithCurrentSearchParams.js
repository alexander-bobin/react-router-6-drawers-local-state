import { useLocation } from "react-router-dom"

function useGetUrlWithCurrentSearchParams (url, paramsToKeep = []) {
  const location = useLocation()
  if (paramsToKeep.length === 0) return url
  const searchParams = new URLSearchParams(location.search)
  const newSearchParams = new URLSearchParams()
  paramsToKeep.forEach(param => {
    const value = searchParams.get(param)
    if (value) {
      newSearchParams.set(param, value)
    }
  })
  return `${url}${newSearchParams.size > 0 ? `?${newSearchParams.toString()}` : '' }`
}

export default useGetUrlWithCurrentSearchParams
