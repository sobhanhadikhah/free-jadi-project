import { Component } from "react";

class Logoutcomponent extends Component {
    componentDidMount() {
        localStorage.removeItem(`token`);
        window.location = `login`
    }
    render() {

        return null;
    }
}

export default Logoutcomponent;