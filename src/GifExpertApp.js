import React,{useState} from 'react';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X','Dragon Ball'];
    //setCategories-- es una función lo utilizamos para cambiar las propiedades
    const [categories, setCategories] = useState(['One Punch', 'Samurai X','Dragon Ball']);

    const handleAdd = () => {
      //setCategories( ['HunterXHunter',...categories]);
      setCategories(cats => [ ...cats, 'HunterXHunter' ]);
    };
     
    return (
       <div>
           <h2>Gif Expert</h2>
           <hr />
           <button onClick={handleAdd}>Agregar</button>
           <ol>
               {
                   categories.map( category => {
                       return <li key={category}> {category} </li>
                   })
               }
           </ol>
       </div>
    );
};

export default GifExpertApp;