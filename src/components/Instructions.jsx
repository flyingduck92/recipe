import { Link, useParams, useOutletContext } from 'react-router-dom'

function Instructions() {
  const { id } = useParams()
  const { instructions } = useOutletContext()

  return (
    <div className='recipe-info-container'>
      <div className='recipe-info-header'>
        <h3>INSTRUCTIONS</h3>
        <Link to={`/recipe/${id}/ingredients`} className='recipe-info-link'>
          Ingredients
        </Link>
      </div>
      {instructions.map(({ position, display_text }) => (
        <div key={position} className='recipe-info-content-container'>
          <div className='recipe-step'>{position}</div>
          <div className='recipe-text'>{display_text}</div>
        </div>
      ))}
    </div>
  )
}

export default Instructions
