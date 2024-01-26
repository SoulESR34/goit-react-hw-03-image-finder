import React from 'react';
import {Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({source, text, largeImage}) => {
  return (
    <li>
      <Image src={source} alt={text} data-largeimage={largeImage} width='100%'/>
    </li>
  );
};
