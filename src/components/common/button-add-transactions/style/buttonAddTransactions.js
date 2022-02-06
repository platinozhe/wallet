import styled from "styled-components";

const ButtonAdd = styled.button`
    width: 44px;
    height: 44px;
    background: #24cca7;
    box-shadow: 0 6px 15px rgba(36, 204, 167, 0.5);
    color: white;
    border: none;
    border-radius: 100%;
    position: absolute;
    bottom: 40px;
    right: 0;
    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
export { ButtonAdd };
