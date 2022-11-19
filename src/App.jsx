import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cardlister from "./Components/Cardlister";
import Footter from "./Components/Fotter";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Logoutcomponent from "./Components/Logout";
import InfoMaker from "./Components/Maker";
import Navbarme from "./Components/Navbar";
import Navbar from "./Components/Navbar";
import Notfound from "./Components/Notfound";
import Toastsme from "./Components/Toast";
import Appcontext from "./Context/context";

function App() {
  const [users, setusers] = useState([]);
  const [myusername, setusername] = useState({})
  useEffect(() => async () => {
    const respone = await axios.get(`https://reqres.in/api/users`)
    setusers(respone.data.data);
    console.log(respone.data.data);
    const tokkken = localStorage.getItem(`token`);
    console.log(tokkken);
    if (!tokkken) {

    }
  }, [])
  return (
    <div style={{ fontFamily: `SFPRODISPLAYREGULAR` }} >
      <Appcontext.Provider value={{ users: users, Createuser: Createuser, Updateuser: Updateuser, Deletuser: Deletuser }} >
        <Navbarme />
        <Routes>
          <Route path="/home" element={<Navigate to={`/`} replace />} />
          <Route path="/users" element={<Cardlister />} />
          <Route path="/users/:id" element={<InfoMaker />} />



          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/logout" element={<Logoutcomponent />} />



        </Routes>
        <Footter />

      </Appcontext.Provider>
    </div>
  );
  async function Createuser() {
    let usern = {
      id: 11,
      email: `hadikhahs@gmail.com`,
      password: `123`,
      first_name: `sobhan`,
      last_name: `sobhan`,
      avatar: `data:image/jpeg;base64,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`
    }

    const respone = await axios.post(`https://reqres.in/api/users`, usern);
    setusers([...users, usern])
  }
  async function Updateuser(user) {

    user.email = `Updated`;
    const respone = await axios.post(`https://reqres.in/api/users/${user.id}`, user)
    console.log(respone);
    const newu = [...users]
    const index = newu.indexOf(user);
    newu[index] = { ...user }
    setusers(newu)
  }
  async function Deletuser(user) {
    const respone = await axios.delete(`https://reqres.in/api/users/${user.id}`)
    console.log(respone);
    const newu = users.filter(intenal => intenal.id !== user.id);
    setusers(newu)
  }

}

export default App;
