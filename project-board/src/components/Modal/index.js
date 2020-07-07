import React from 'react';
import { Overlay, StyledModal } from './Modal.style';
// import Button from './../Button';

const Modal = (props) => {
    return (
        <Overlay show_modal={props.showModal}>
            <StyledModal show_modal={props.showModal}>
                {props.children}
                <span onClick={props.handleClose}>
                <i className="fa fa-times 2x"/>
                </span>
            </StyledModal>
        </Overlay>
    )
}
export default Modal;