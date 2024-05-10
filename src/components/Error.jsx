import { Link } from 'react-router-dom'
import emptyPlate from '../assets/no-food-found.png'

function Error({ message, info }) {
  return (
    <div className='not-found-container'>
      <img src={emptyPlate} className='not-found-image' alt='' />
      <h1 className='not-found-header'>{message ? message : 'Oh no!'}</h1>
      <p>{info ? info : 'Something went wrong'}</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Error
