import { TextField,FormLabel, Box, Button, Checkbox } from '@mui/material'
import {React,useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const history = useNavigate()
  const [input, setInput] = useState({
    name:"",
    description:"",
    price:"",
    author:"",
    image:""
  })

  const [checked, setChecked] = useState(false)

  const handleChange=(e)=>{
    setInput((prevState)=>(
      {
        ...prevState,
        [e.target.name]:e.target.value
      }
    )
    )
    // console.log(e.target.name,"Value",e.target.value);


  }


  const sendRequest =async () =>{
    await axios.post("http://localhost:5000/books",{
      name:String(input.name),
      author:String(input.author),
      description:String(input.description),
      price:Number(input.price),
      image:String(input.image),
      available:Boolean(checked)
    }).then(res=>res.data)

  }





  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(input,checked);
    sendRequest().then(()=>history('/books'))
  }





  return (
    <form onSubmit={ handleSubmit}>
      <Box display="flex"
       flexDirection="column"
        justifyContent={"center"} 
        maxWidth={"700px"} 
        alignContent={"center"} 
        alignSelf={"center"}
         marginLeft={"auto"} 
         marginRight={"auto"} 
         marginTop={"10px"}>
        <FormLabel>Name </FormLabel>
            <TextField
            value={input.name}
            onChange={handleChange}
             margin='normal'
              fullWidth
               variant='outlined'
                name='name'/>
            <FormLabel>Author </FormLabel>
            <TextField 
                 value={input.author}
                 onChange={handleChange}
            margin='normal'
             fullWidth
              variant='outlined'
               name='author'/>
            <FormLabel>Description </FormLabel>
            <TextField
                 value={input.description}
                 onChange={handleChange}
             margin='normal'
              fullWidth
               variant='outlined'
                name='description'/>
            <FormLabel>Price</FormLabel>
            <TextField 
              value={input.price}
              onChange={handleChange}
            type='number' 
            margin='normal'
             fullWidth
              variant='outlined'
               name='price'/>

<FormLabel>Image</FormLabel>
            <TextField 
              value={input.image}
              onChange={handleChange}
            margin='normal'
             fullWidth
              variant='outlined'
               name='image'/>
                     <FormControlLabel control={<Checkbox checked={checked}
                     onChange={()=>setChecked(!checked)} />} 
                     label="Available" />

<Button variant='contained' type='submit'>Add Book</Button>
            </Box>




    </form>
  )
}

export default AddBook