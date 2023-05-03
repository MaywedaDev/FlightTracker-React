import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Hero />
      <Login /> 
      <div className="bg-dark text-light">
        <p>Hello World</p>
      </div>
    </>
  )
}

export default App
