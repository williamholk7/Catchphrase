import styled from "styled-components";

const Button = styled.button`
    width: ${({ w }) => w};
    height: ${({ h }) => h};
    margin-top: ${({ mt }) => mt};
    margin-left: ${({ ml }) => ml};
    margin-right: ${({ mr }) => mr};
    margin-bottom: ${({ mb }) => mb};
    border: 1px;
    background: ${({ bg }) => bg};
    border-radius: 20px;
    color: ${({ c }) => c};
    font-size: 20px;
    &:disabled {
        background: #555;
        color: #040404;
        &:hover {
        cursor: auto;
        }
    }
    &:hover {
        cursor: pointer;
    }
`
export default Button;