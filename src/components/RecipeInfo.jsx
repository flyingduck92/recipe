import { Outlet } from 'react-router-dom'

function RecipeInfo({ instructions, ingredients, image }) {
  return (
    <div className='recipe-info'>
      <Outlet context={{ instructions, ingredients }} />
      <img src={image} alt='' className='recipe-img' />
    </div>
  )
}

export default RecipeInfo
