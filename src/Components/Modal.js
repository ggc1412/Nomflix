import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${props => props.visible ? 'block' : 'none'};
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 999;
`;


const Modal = ({ visible }) => (
    <ModalOverlay visible={visible}/>
);

export default Modal;
