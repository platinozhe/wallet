import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    width: 320px;
    height: 320px;
    margin-top: 2rem;
`;

const ExpensesMoney = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    line-height: 1.27;
`;

export { Wrapper, ExpensesMoney };
