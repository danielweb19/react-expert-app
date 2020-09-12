import React/*, { useState,useEffect }*/ from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({category}) => {
    
    const {data:images,loading} = useFetchGifs(category);
    
    return (
        <>
        {loading && <p className="card animate__animated animate__flash">Loading</p>}
        <div className="card-grid">  
            <h3 className="card animate__animated animate__bounce">{category}</h3>
            
                {
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
