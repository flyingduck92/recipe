import RecipeNutritionalFact from './RecipeNutritionalFact'
import { AiOutlineFire } from 'react-icons/ai'
import { CiWheat } from 'react-icons/ci'
import { BiCheese, BiCake } from 'react-icons/bi'
import { IoFishOutline } from 'react-icons/io5'

function RecipeHeader({ nutritionalFacts, name }) {
  const nutritionalFactsArr = [
    {
      id: 1,
      category: 'calories',
      amount: nutritionalFacts.calories,
      Icon: AiOutlineFire,
    },
    {
      id: 2,
      category: 'carbs',
      amount: nutritionalFacts.carbohydrates,
      Icon: CiWheat,
    },
    {
      id: 3,
      category: 'fat',
      amount: nutritionalFacts.fat,
      Icon: BiCheese,
    },
    {
      id: 4,
      category: 'protein',
      amount: nutritionalFacts.protein,
      Icon: IoFishOutline,
    },
    {
      id: 5,
      category: 'sugar',
      amount: nutritionalFacts.sugar,
      Icon: BiCake,
    },
  ]

  return (
    <div className='recipe-header'>
      <h1>{name}</h1>
      <div className='nutritional-facts-container'>
        {nutritionalFactsArr.map(({ Icon, id, amount, category }) => (
          <RecipeNutritionalFact key={id} fact={{ amount, category }}>
            <Icon />
          </RecipeNutritionalFact>
        ))}
      </div>
    </div>
  )
}

export default RecipeHeader
