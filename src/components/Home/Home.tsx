import { Fragment } from "react";
import MyProfile from "./MyProfile/MyProfile";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Home = () => {

    return(
        <>
        <Fragment>
            <NavBar/>
            <SideBar />
            {/* <DataTable data={props.data} /> */}
            <MyProfile/>
            {/* <UpdateProfile /> */}
        </Fragment>
        {/* <button onClick={signOutHandler} >Sign Out</button> */}
        </>
    );

}

export default Home;