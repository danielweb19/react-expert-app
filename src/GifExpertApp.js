
import React,{useState} from 'react';

import { AddCategories } from './components/AddCategories';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categorias = ['OnePuch','Samurai X','DragonBall'];
    const [categories, setCategories] = useState(['memes']);

    // const handleAdd = () => setcategories([...categories,'naruto']);

    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setCategories}/>
            <hr/>
            <ul>
            {
                categories.map( (category) => (
                    <GifGrid 
                        category={category}
                        key={category}
                    />
                    )   
                )
            }
            </ul>
            <hr/>
        </>
    )
}


export default GifExpertApp;
