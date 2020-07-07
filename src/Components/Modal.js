import React, { useEffect } from "react";
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
    width: 50%;
    max-width: 800px;
    min-width: 700px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    border-radius: 4px;
    display: flex;
    align-items: stretch;
    justify-content: start;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 25px;
    outline: 0;
`;

const CloseButton = styled.span`
    position: absolute;
    top: 3px;
    right: 15px;
    font-size: 2rem;
    cursor: pointer;
`;


const Modal = ({ index, visible, onClose, children }) => {
    
    const onMaskClick = (e) => {
        if(e.target === e.currentTarget){
            onClose(e);
        }       
    }

    // useEffect(() => {
    //     document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    //   return () => {
    //     const scrollY = document.body.style.top
    //     document.body.style.cssText = `position: ""; top: "";`
    //     window.scrollTo(0, parseInt(scrollY || '0') * -1)
    //   }
    // }, [])

    return (
    <>
        <ModalOverlay visible={visible}/>
        <ModalWrapper id={index} visible={visible} tabIndex="-1" onClick={onMaskClick}>
            <ModalInner tabIndex="0" >
                <CloseButton id={index} onClick={onClose}>x</CloseButton>
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
