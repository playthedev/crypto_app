import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios'
import Showcoins from './Components/Showcoins'
 function App() {
  let [valueOfCoins,setCoins]=useState([]);
  const [searchWord, setSearchWord] = useState("");
   useEffect( ()=>{
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response)=>{
      //     // console.log(response.data.coins)  
         setCoins(response.data.coins);
      //   result=response.data.coins;
      //   })
   } )},[])
  
   const filteredCoins = valueOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
 
    <div className="App">
      <div className="cryptoHeader">
        <input type='text'onChange={(event) => {
            setSearchWord(event.target.value);
          }}/>
      </div>
      <div className='cryptoDisplay'>
    { filteredCoins.map((coin)=>{
      return (
        <Showcoins name={coin.name} symbol={coin.symbol} price={coin.price} icon={coin.icon}/>
      )
    })}
    </div>
    </div>
  );

}
export default App;
