import { useState } from "react";

import { Button, FormControl, FormGroup, Input, InputLabel, styled, Typography } from "@mui/material";
import { addUser } from "../service/api";



const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
       margin-top: 20px; }
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}


const AddUser = () => {

    const [User, setUser] = useState(defaultValue);


    const onValueChange = (e) =>{
        setUser({ ...User,[e.target.name]: e.target.value})
    }

    const adduserdetails = async () => {
       await addUser(User);
        
    }


    return (
        <Container>
            <Typography variant="h4">Add Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e) } name="name" />
            </FormControl>

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e) } name="username" />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e) } name="Email" />
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e) } name="Phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => adduserdetails}>Add User</Button>
            </FormControl>
        </Container>
    );
};

export default AddUser;
