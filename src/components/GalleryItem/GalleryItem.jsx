import React from 'react';

export default function GalleryItem(props) {


    return (
        <figure>
            <p>Galería: </p>
            <img src={props.item.imgUrl} alt={props.item.title} />
            <figcaption>{props.index +1}: {props.item.title}
                <p>{props.item.description}</p>
            </figcaption>


        </figure>
    )
}