import styled from "styled-components";

const Div = styled.div`
    height: ${({ h }) => h};
    width: 100%;
    display: flex;
    flex-direction: ${({ fd }) => fd};
    align-items: ${({ ai }) => ai};
    justify-content: ${({ jc }) => jc};
`

export default Div;