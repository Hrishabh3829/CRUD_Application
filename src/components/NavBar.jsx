
//Material mui
import { AppBar, Toolbar,styled } from "@mui/material"
//Router dom
import { NavLink } from "react-router-dom";


const Header = styled(AppBar)`
    background: #111111
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-left: 50px;
    color: white;
    text-decoration: none;
`;

const Navbar = () =>{
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to ='/'>Home</Tabs>
                <Tabs to = 'All'>All Users</Tabs>
                <Tabs to ='Add'>Add Users</Tabs>
            </Toolbar>
        </Header> 
        
    )

}

export default Navbar