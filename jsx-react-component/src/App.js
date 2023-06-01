import react from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Card, Button} from 'react-bootstrap';
import products from './products'
import Name from './Name';
import Price from './Price';
import Description from './Description';
import {Image, Hello} from './Image'


let name = 'Amine'
const hello = ()=>{
  return <div>
              {`hello ${name}!`}<br></br>
              <Hello/> 
          </div>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <Card>
        <Image className='mt-3'/>
        <Card.Body>
          <Name/>
          <Price/>
          <Description/>
        </Card.Body>
        <Button varaiant='secondary'>Click to purchase</Button>
        </Card>
        
        <p>{(name != '')?hello(): 'Hello there!'}</p>
        
      </header>
    </div>
)}

export default App;
