import {connect} from "react-redux";
import Navbar from "./Navbar";
const mapStateToProps = (state) => {
    return {
        state : state.siteBar,
    }
}



export default connect(mapStateToProps, null)(Navbar)


