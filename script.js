const currency1=document.getElementById("currency1")
const amount1=document.getElementById("amount-one")
const currency2=document.getElementById("currency2")
const amount2=document.getElementById("amount-two")
const button=document.getElementById("swap")
const rate_El=document.getElementById("rate")

//function rate calculation
function calculate(){
    const value1=currency1.value
    const value2= currency2.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${value1}`)
    .then(res => res.json())
    .then( data=>{
        // console.log(data)  gives you an object
        const the_rate= data.rates[value2]
        rate_El.innerText=` 1 ${value1} equals ${the_rate} ${value2}`
        amount2.value = (amount1.value * the_rate).toFixed(2);
    })
}

//event listeners
currency1.addEventListener('change', calculate)
currency2.addEventListener('change', calculate)
amount1.addEventListener('input', calculate)
amount2.addEventListener('input', calculate)

button.addEventListener('click',()=>{
    const temp= currency1.value
    currency1.value=currency2.value
    currency2.value= temp
    calculate()
} )
calculate()