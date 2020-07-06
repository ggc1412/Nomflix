import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalOverlay = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 999;
`;

const ModalWrapper = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 1000;
`;

const ModalInner = styled.div`
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: start;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;
    outline: 0;
`;

const CloseButton = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1rem;
    cursor: pointer;
`;


const Modal = ({ visible, onClose, children }) => {
    
    const onMaskClick = (e) => {
        if(e.target === e.currentTarget){
            onClose();
        }       
    }

    return (
    <>
        <ModalOverlay visible={visible}/>
        <ModalWrapper visible={visible} tabIndex="-1" onClick={onMaskClick}>
            <ModalInner tabIndex="0" >
                <CloseButton onClick={onClose}>x</CloseButton>
                {children}
            </ModalInner>
        </ModalWrapper>
    </>
    )
};

Modal.propTypes = {
    visible: PropTypes.bool
}

export default Modal;
