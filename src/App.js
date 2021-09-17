import {Landing, About, Portfolio, Contact, Footer, Loading} from './components'
import {useState, useEffect} from 'react'

const App = () => {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  useEffect(() =>{
    setTimeout(() =>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json =>{
        setTimeout(()=>{
          setLoaded(true)
        }, 2000)
      })
    }, 1000)
  }, [setLoaded, loaded])

  return (
    <div className="bg-blue body">
      {!loaded ? <Loading/> : <></>}
      <Landing open={open} setOpen={setOpen}/>
      <About/>
      <Portfolio/>
      <Contact open={open} setOpen={setOpen}/>
      <Footer/>
    </div>
  )
}

export default App
