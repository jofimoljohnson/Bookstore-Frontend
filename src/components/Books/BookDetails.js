import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { TextField,FormLabel, Box, Button, Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';




function BookDetails() {
    const history = useNavigate()

    const [input, setInput] = useState({})

    const [checked, setChecked] = useState(false)



    const id =useParams().id
    // console.log(id);

    useEffect(() => {
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:5000/books/${id}`)
            .then((res)=>res.data).then(data=>setInput(data.book))
        }
        fetchHandler()
      
    }, [id])

    const sendRequest =async () =>{
        await axios.put(`http://localhost:5000/books/${id}`,{
          name:String(input.name),
          author:String(input.author),
          description:String(input.description),
          price:Number(input.price),
          image:String(input.image),
          available:Boolean(checked)
        }).then(res=>res.data)
    
      }
    
    
    





    
    
    const handleSubmit=(e)=>{
e.preventDefault()
sendRequest().then(()=>history("/books"))
    }


    const handleChange=(e)=>{
        setInput((prevState)=>(
            {
              ...prevState,
              [e.target.name]:e.target.value
            }
          ))
        }

    

    




    
  return (
    <div>

      {
input && 

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
    
    <Button variant='contained' type='submit'>Update Book</Button>
                </Box>
    
    
    
    
        </form>
}
    
 


    </div>
  )
}

export default BookDetails