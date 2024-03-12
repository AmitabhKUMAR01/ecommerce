import { useState } from "react"
import { FaGoogle } from "react-icons/fa"

const Login = () => {
    const [gender ,setGender] = useState<string>("")
    const [date,setDate] = useState<string>("")
  return (
    <div className="login">
        <main>
            <h1 className="heading">login</h1>
            <div>
                <label htmlFor="">Gender</label>
                <select value={gender} onChange={e=>setGender(e.target.value)}>
                    <option value="">select gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                <label htmlFor="">DOB</label>
                <input type="date"  value={date} onChange={e=>setDate(e.target.value)}/>
            </div>
            <div>

            <p>already signin once</p>
            <FaGoogle/><span>signin with google</span>

            </div>
        </main>
    </div>
  )
}

export default Login