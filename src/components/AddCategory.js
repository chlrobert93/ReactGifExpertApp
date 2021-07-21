import React,{ useState} from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {
    //Saber lo que la persona esta escribiendo
    const [inputVlue, setInputValue] = useState('');
   //const handleInputChange = ({ target: { value } }) => setInputValue(value);

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //Prevenir el comportamiento por defecto del formulario es
        e.preventDefault();

        if( inputVlue.trim().length >2){
            setCategories( cats => [ ...cats, inputVlue]);
        }
   
    }
    
    return (
        <form onSubmit={handleSubmit}>
             <h1>{ inputVlue}</h1>
              <input type="text" value={inputVlue} onChange={ handleInputChange} />
        </form>
     
    );
}

AddCategory.propTypes =  {
    setCategories: PropTypes.func.isRequired 

}