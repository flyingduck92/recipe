import { Link, useParams, useOutletContext } from 'react-router-dom'

function Ingredients() {
  const { id } = useParams()
  const { ingredients } = useOutletContext()

  return (
    <div className='recipe-info-container'>
      <div className='recipe-info-header'>
        <h3>INGREDIENTS</h3>
        <Link to={`/recipe/${id}/instructions`} className='recipe-info-link'>
          Instructions
        </Link>
      </div>
      {ingredients.map(({ position, raw_text }) => (
        <div key={position} className='recipe-info-content-container'>
          <div className='recipe-step'>{position}</div>
          <div className='recipe-text'>{raw_text}</div>
        </div>
      ))}
    </div>
  )
}

export default Ingredients
