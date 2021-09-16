import {Landing, About, Portfolio, Contact, Footer, Loading} from './components'
import Modal from './components/Modal'
import {useState, useEffect} from 'react'

const App = () => {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  useEffect(() =>{
    setTimeout(() =>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json =>{
        console.log(json)
        setTimeout(()=>{
          setLoaded(true)
        }, 3000)
      })
    }, 1000)
  }, [setLoaded, loaded])

  return (
    <div className="bg-blue body">
      {!loaded ? <Loading/> : <></>}
      <Modal open={open} setOpen={setOpen}/>
      <Landing open={open} setOpen={setOpen}/>
      <About/>
      <Portfolio/>
      <Contact open={open} setOpen={setOpen}/>
      <Footer/>
    </div>
  )
}

export default App
