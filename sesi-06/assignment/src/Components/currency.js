import axios from 'axios'
import { useEffect, useState } from 'react'

const Currency = () => {
    const [data,setData] = useState([ ])
    const [date,setDate] = useState([ ])
    const exchangeName = [
        {name:"CAD"},
        {name:"EUR"},
        {name:"IDR"},
        {name:"JPY"},
        {name:"CHF"},
        {name:"GBP"},
    ]
    
    useEffect(()=> {
        axios.get("https://api.currencyfreaks.com/latest?apikey=b8f9db52b3cb4e95871e70dce0136631&format=json")
    .then((res) => {
        setDate([res.data.date])
        const param = [res.data.rates.CAD, res.data.rates.EUR, res.data.rates.IDR, res.data.rates.JPY, res.data.rates.CHF, res.data.rates.GBP]
       const combine = exchangeName.map(function(item,index){
        return {name: item.name, value: param[index]}
       })
      
        setData([...combine])
        
    })

    .catch((error) => {
    })
    },[])

    return(
        <>
            <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>
                            Currency
                        </th>
                        <th>
                            We Buy
                        </th>
                        <th>
                            Exchange Rates
                        </th>
                        <th>
                            We Sell
                        </th>
                    </tr>
                </thead>

                <tbody>
                { data !== null && data.map((res) => {
                    const val = parseFloat(res.value)
                    const parambuy = val + (val*0.05)
                    const paramsell = val - (val*0.05)
                    return (
                        <tr key={res.name}>
                            <td>
                                {res.name}
                            </td>
                            <td>
                                {parambuy.toFixed(4)}
                            </td>
                            <td>
                                {val.toFixed(4)}
                            </td>
                            <td>
                                {paramsell.toFixed(4)}
                            </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            
            </div>
            <div className='text'>
                <p>
                    Rates are based from 1 USD.
                </p>
                <p>
                    This Application uses API from <a href='https://currencyfreaks.com/' target="_blank" >https://currencyfreaks.com/</a>
                </p>
            </div>
            
        </>
    )
}

export default Currency