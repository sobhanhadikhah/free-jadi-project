import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const InfoMaker = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    useEffect(() => async () => {
        const respone = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log(respone.data.data);
        setUser(respone.data.data)
    }, [])
    return (
        <div className="container  bg-dark-blue  " style={{ borderBottomLeftRadius: `10px`, borderBottomRightRadius: `10px` }} >
            <img src={user.avatar} className={`ma3  `} style={{ borderRadius: `50%` }} alt="img" />
            <div>
                <h3 className="white mb3" >
                    {user.first_name} {user.last_name}
                </h3>
                <h3 className="white mb3" >
                    {user.email}
                </h3>
            </div>
            <Outlet />
        </div>
    );
}

export default InfoMaker;