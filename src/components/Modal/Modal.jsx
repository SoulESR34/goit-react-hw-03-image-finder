import React from 'react';
import { Overlay, ModalImage } from './Modal.styled';

export const Modal = ({ photoURL }) => {
  return (
    <Overlay>
      <ModalImage>
        <img src={photoURL} alt="" width='100%'/>
      </ModalImage>
    </Overlay>
  );
};
