import React,{useId} from 'react'

function InputBox({label="From",amount,onAmountChange,onCurrencyChange,currencyOption=[],selectCurrency="usd",amountDisable=false,
    currencyDisable=false,className=""}) {

      const amount_id=useId()
  return (
    <>
    <div className={`bg-white  p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2  flex flex-wrap justify-start">
        <label className='text-gray-500/70 font-medium mb-2 inline-block' htmlFor={amount_id}>{label}</label>
        <input id={amount_id} className='outline-none w-full bg-transparent p-1.5' type="number" placeholder='Amount'min={1} disabled={amountDisable} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>
        <div className="w-1/2  p-3 flex flex-wrap justify-end text-right">
        <p className=' text-gray-500/70 font-medium w-full'>Currency Amount</p>
        <select className='rounded-lg p-1 bg-white/45 outline-none cursor-pointer' value={selectCurrency} onChange={(e)=>onCurrencyChange&& onCurrencyChange(e.target.value)} disabled={currencyDisable}>
            {currencyOption.map((currency)=>(
              <option style={{background:'rgba(255, 255, 255, 0.8)',}} key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
        </div>
    </div>
    </>
  )
}

export default InputBox