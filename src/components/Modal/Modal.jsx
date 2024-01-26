import React from 'react';
import { Overlay, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ photoURL }) => {
  return (
    <Overlay>
      <ModalImage>
        <img src={photoURL} alt="" width="100%" />
      </ModalImage>
    </Overlay>
  );
};

Modal.protoTypes = {
  photoURL: PropTypes.string.isRequired,
};
