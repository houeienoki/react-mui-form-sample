import { useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';


type Inputs = {
  name: string
}

function App() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [ name, setName ] = useState<string>("");
  
  return (
    <div className="App">
      <TextField 
        id="name"
        value={name}
        {...register("name")}
        onChange={(event) => setName(event.target.value)}
      />
      <Button
        variant='contained'
        onClick={() => {
          setName("aaa");
        }}>
        値変更
      </Button>
      <Button
        variant='contained'
        onClick={handleSubmit((data) => {
          console.log(data);
        })}>
        SUBMIT
      </Button>
    </div>
  );
}

export default App;
