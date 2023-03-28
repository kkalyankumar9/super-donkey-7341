import {
    Box,
    
    FormControl,
    FormLabel,
    Input
    
  } from '@chakra-ui/react'


function Register(){
    return (
    <Box>
        
            <FormControl>
                <FormLabel>User Name</FormLabel>
                <Input type="name" placeholder='Enter Name'/>
            </FormControl>

    </Box>)


}
export default Register