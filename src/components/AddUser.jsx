import { FormControl, FormGroup, Input, InputLabel, styled } from "@mui/material"

const css = styled(FormGroup)`
    width: 50%;
    margin: 50px auto;
    & > div {
        margin-bottom: 20px;
       
    }
`


const AddUser= () =>{
    return (

        
       <css>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input/>
        </FormControl>

        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input/>
        </FormControl>
            
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input/>
        </FormControl>
        
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input/>
        </FormControl>
        
        </css>
    )

}

export default AddUser