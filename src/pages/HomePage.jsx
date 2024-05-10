import Header from '../components/Header'
import CardList from '../components/CardList'
import useFetchRecipes from '../hooks/useFetchRecipes'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function HomePage() {
  const [fetchRecipes, { data, loading, error }] = useFetchRecipes()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    fetchRecipes(searchParams.get('search'))
  }, [])

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      fetchRecipes(searchTerm)
    }
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
      {error && <p>Ooops! There is something wrong </p>}
    </>
  )
}

export default HomePage
