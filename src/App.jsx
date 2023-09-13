import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import Residentcard from './components/Residentcard'


function App() {
  const [inputValue, setInputValue] = useState( getRandomNumber(126) )
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'Undefined'}`
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputValue])

  //console.log(location);

  const inputSearch = useRef()

  const handleSubmit = evento => {
    evento.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <div className='main'>
      <img src="../public/Imagen1.png" alt="rick-morty" />
      <h1>Rick and Morty App</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input ref={inputSearch} type="text" className='form_search' placeholder="1 - 126"/>
        <button className='form_btn'>Search</button>
      </form>
      {
        hasError
          ? <h2>❌ Hey! you must provide an id from 1 to 126 😭</h2>
          :(
            <>
              <LocationInfo
                location={location}
              />
              <div className='content'>
                {
                  location?.residents.map(url => (
                    <Residentcard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
    </div>
  )
}

export default App
