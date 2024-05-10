import Error from '../components/Error'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const { data, status, statusText } = useRouteError()

  return (
    <div className='error-page'>
      <Error message={`${status} ${statusText}`} info={data} />
    </div>
  )
}

export default ErrorPage
