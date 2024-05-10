import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [_, setSearchParams] = useSearchParams()

  const handleSearchClick = () => {
    handleSearch(searchTerm)
    if (searchTerm) {
      setSearchParams({
        search: searchTerm,
      })
    }
  }

  return (
    <header className='main_header'>
      <div className='text-container'>
        <h1 className='header-title'>
          Look for <span>Banger</span> Food
        </h1>
        <p className='header-descripttion'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt atque
          aut architecto nihil fuga similique at voluptate placeat totam.
          Repellendus.
        </p>
        <div className='header-input-container'>
          <input
            type='search'
            placeholder='Find a recipe...'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src='https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='main_img'
        />
      </div>
    </header>
  )
}

export default Header
