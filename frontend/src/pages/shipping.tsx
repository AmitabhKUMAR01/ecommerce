import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi"

const Shipping = () => {
    const [shippingInfo ,setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        pinCode: "",
        country: "",
    })
    const changeHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        e.preventDefault();
        setShippingInfo(prev=>({...prev , [e.target.name]:e.target.value}))
    }
    console.log(shippingInfo)
  return (
    <div className="shipping">
        <button>
            <BiArrowBack/>
        </button>
        <form>
            <h1>
                Shipping Address 
            </h1>
            <input type="text" placeholder="address" name="address" value={shippingInfo.address} onChange={changeHandler} required/>
            <input type="text" placeholder="city" name="city" value={shippingInfo.city} onChange={changeHandler} required />
            <input type="text" required placeholder="state" name="state" value={shippingInfo.state} onChange={changeHandler} />
            <select onChange={changeHandler} name="country" id="">
                <option value="" disabled>choose Country</option>
                <option value="india">india</option>
                <option value="usa">usa</option>
                <option value="uk">uk</option>
            </select>
            <input type="number" required placeholder="pinCode" name="pinCode" value={shippingInfo.pinCode} onChange={changeHandler} />
            <button type="submit">pay now</button>
        </form>
    </div>
  )
}

export default Shipping