import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import InputBox from './components/input'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const[amount,setAmount]=useState(1)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedamount,setConvertedAmount]=useState({})
  const currencyInfo=useCurrencyinfo(from)
  // console.log(currencyInfo);
  const options=Object.keys(currencyInfo)
  console.log(currencyInfo[from]);
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedamount)
  }
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  // const [initialLoad, setInitialLoad] = useState(true);
  // useEffect(() => {
  //   if (initialLoad && Object.keys(currencyInfo).length > 0) {
  //     convert();
  //     setInitialLoad(false);
  //   }
  // }, [currencyInfo]);
  return (
    <>
    <div className="w-screen h-screen flex flex-wrap justify-center items-center bg-lawerncium-gradient">
      <div className="w-full p-2">
        <div className="relative w-full max-w-md mx-auto rounded-lg p-10 backdrop-blur-3xl bg-white/20 contrast-125 ">
        <div className=" absolute left-10 text-white mb-3 font-mono font-extrabold text-4xl">Currency Converter</div>
        <form className='pt-24 xs:pt-14' onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
          <div className="w-full  mb-1">
            <InputBox label={from} amount={amount} currencyOption={options} onCurrencyChange={(currency)=>{
              setFrom(currency)}} selectCurrency={from} onAmountChange={(amount)=>setAmount(amount)}></InputBox>
          </div>
          <div className="relative w-full h-0.5">
            <button type='button' className='fixed left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 px-4 py-1.5 rounded-lg text-white' onClick={swap}>swap</button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox label={to} amount={convertedamount} currencyOption={options} onCurrencyChange={(currency)=>{setTo(currency)}} selectCurrency={to} amountDisable></InputBox>
          </div>
          <button type='sumbit' className='w-full bg-blue-600 rounded-lg py-2 text-white'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
