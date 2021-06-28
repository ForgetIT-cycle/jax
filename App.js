import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react'



// class app extends React.Component {
//   render() {
//     return <center><di>Hello React</di></center>;
//   }
// }
// export default app


function App() {
  const [Show,setShow]=useState(true)
  return (
    <div>
      <div>
        <center>
          {
           Show? <a>James Eston</a>:null
          }
          {
            Show? <a><h4>sofware programmer</h4></a>:null
          }
          {
            Show?<img src="jax\src\depositphotos_86446164-Business-man-in-office.jpg"></img>:null
          }
           
          
        </center>
      </div>
    <center>
    {
      Show?<a><h2>James Eston</h2></a>:null
    }
    <button onClick={()=>setShow(true)} >Show</button>
    <button onClick={()=>setShow(false)} >Hide</button>
    </center>
    </div>
  );
}

export default App;
