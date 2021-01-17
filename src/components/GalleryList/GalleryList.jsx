import React from 'react';
import GalleryItem from './../GalleryItem/GalleryItem';


export default function GalleryList (props) {


        return (
            props.list.map((item,index)=> <GalleryItem item={item} index={index} key={index} ></GalleryItem>)
        )
}