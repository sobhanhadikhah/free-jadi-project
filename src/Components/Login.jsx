import { useState } from "react";
import Inputs from "./inputs";
import * as yup from 'yup';
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
const Login = () => {
    const [user, setuser] = useState({
        email: ``,
        password: ``

    })
    const [btndisable, setbtndisable] = useState(false)
    const [err, seterr] = useState([])
    async function handlesubmite(e) {
        e.preventDefault()
        const result = await isValidDateValue();
        console.log(result);
        console.log(err);
        if (result) {
            try {
                setbtndisable(true)
                const respone = await axios.post(`https://reqres.in/api/login`, result);
                console.log(respone.data.token);
                localStorage.setItem(`token`, respone.data.token);
                window.location = `/`

            } catch (error) {
                setbtndisable(false)
                seterr((current) => [`id not valid`]);


            }
        }
    }
    function handleonchange(e) {
        const index = e.currentTarget;
        const acc = { ...user }
        acc[index.name] = index.value;
        setuser(acc)
    }
    let Schema = yup.object().shape({
        email: yup.string().email(`you must type email`).required(`this filed is required`),
        password: yup.string().min(8).required(`this filed is req`)
    })
    const isValidDateValue = async () => {
        try {
            const result = await Schema.validate(user, { abortEarly: false })
            console.log(result);
            return result
        } catch (error) {
            seterr(error.errors)
        }
    }
    return (
        <div style={{ fontFamily: `SFPRODISPLAYREGULAR` }} className="container ma4" >
            <div className="alert alert-danger" >
                <ul>
                    {err.map((e, index) => {
                        return (
                            <li key={index} >

                                {e}

                            </li>
                        )
                    })}
                </ul>
            </div>
            <form onSubmit={handlesubmite} >
                <Inputs name={`email`} lable={`Email`} value={user.email} onchange={handleonchange} />
                <Inputs name={`password`} lable={`Password`} value={user.password} onchange={handleonchange} />
                <button disabled={btndisable} className="btn btn-primary ma3 pa3" type="submit" >Submite</button>
            </form>
        </div>
    );
}

export default Login;