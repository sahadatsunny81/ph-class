
import './App.css'

function App() {
 
  return (
    <>
      <Welcome> </Welcome>
      <Greet></Greet>


      
    </>
  )
}

function Welcome() {
  return (
    <div>
    <h1>Hello Everyone</h1>
    <p>Start with your name</p>
    <li>sunny</li>
    <li>Sahadat</li>
    </div>

  )

}

function Greet() {

  const name = "Sahadat"

  return(
    <h1>I am {name}</h1>

  )
}
export default App
