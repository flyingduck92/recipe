function RecipeNutritionalFact({ fact, children }) {
  const { amount, category } = fact

  const showAmount = () => {
    return category === 'calories' ? amount : amount + 'g'
  }

  return (
    <div className='recipe-fact-container'>
      {children}
      <h3>{showAmount()}</h3>
      <p>{category}</p>
    </div>
  )
}

export default RecipeNutritionalFact
