import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X','Dragon Ball'];
    //setCategories-- es una función lo utilizamos para cambiar las propiedades
    const [categories, setCategories] = useState(['One Punch']);
    
    /*
    const handleAdd = () => {
      //setCategories( ['HunterXHunter',...categories]);
      setCategories(cats => [ ...cats, 'HunterXHunter' ]);
    };*/

     
    return (
       <div>
           <h2>Gif Expert</h2>
           <AddCategory setCategories={setCategories}  />
           <hr />
           <ol>
               {
                   categories.map( category => (
                       <GifGrid key={ category } category={ category } />
                   ))
               }
           </ol>
       </div>
    );
};

export default GifExpertApp;