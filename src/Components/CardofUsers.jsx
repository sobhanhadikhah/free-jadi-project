import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Appcontext from "../Context/context";
const Card = ({ avatar, email, first_name, last_name, data, id }) => {
    const context = useContext(Appcontext);
    return (
        <div className="dib ma2" >
            <div className="card container  " style={{ width: "18rem" }}>
                <img className="card-img-top" src={avatar} alt="Card" />
                <div className="card-body">
                    <Link to={`${id}`} className="card-title">{`${first_name} ${last_name}`}</Link>
                    <p className="card-text">{email}</p>
                    <Link onClick={handleupdate} to="#" className="btn btn-primary ma3">Update</Link>
                    <Link onClick={handleDelte} to="#" className="btn btn-danger">Delete</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
    function handleupdate() {
        context.Updateuser(data)
    }
    function handleDelte() {
        context.Deletuser(data)
    }
}

export default Card;