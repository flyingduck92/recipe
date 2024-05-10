import Card from './Card'

// export const recipes = [
//   {
//     id: 1,
//     name: 'Strawbery Smoothie',
//     image:
//       'https://images.pexels.com/photos/4112870/pexels-photo-4112870.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     tag: 'Healthy Recipe',
//     timeToMake: 60,
//   },
//   {
//     id: 2,
//     name: 'Chocolate Cake',
//     image:
//       'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     tag: 'Healthy Recipe',
//     timeToMake: 60,
//   },
//   {
//     id: 3,
//     name: 'Pepperoni Pizza',
//     image:
//       'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     tag: 'Pizza',
//     timeToMake: 60,
//   },
//   {
//     id: 4,
//     name: 'Chocolate Smoothie',
//     image:
//       'https://images.pexels.com/photos/19806623/pexels-photo-19806623/free-photo-of-chocolate-pudding-in-the-shadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     tag: 'Healthy Recipe',
//     timeToMake: 60,
//   },
//   {
//     id: 5,
//     name: 'Hamburger',
//     image:
//       'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     tag: 'Healthy Recipe',
//     timeToMake: 60,
//   },
// ]

function CardList({ recipes }) {
  return (
    <section className='cards'>
      {recipes.map((recipe) => {
        return <Card key={recipe.id} recipe={recipe} />
      })}
    </section>
  )
}

export default CardList
