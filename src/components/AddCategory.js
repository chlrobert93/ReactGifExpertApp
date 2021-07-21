import React,{ useState} from 'react'

export const AddCategory = () => {
    //Saber lo que la persona esta escribiendo
    const [inputVlue, setInputValue] = useState('Hola Mundo');
   //const handleInputChange = ({ target: { value } }) => setInputValue(value);

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Prevenir el comportamiento por defecto del formulario es
        e.preventDefault();
       console.log('Submit hecho')
    }
    
    return (
        <form onSubmit={handleSubmit}>
             <h1>{ inputVlue}</h1>
              <input type="text" value={inputVlue} onChange={ handleInputChange} />
        </form>
     
    );
}