import styled from 'styled-components';

const Card = styled.div`
    height: ${({h}) => h};
    width: ${({w}) => w};
    z-index: ${({z}) => z};
    background: ${({bg}) => bg};
    border: ${({b}) => b};
    border-radius: ${({br}) => br};
    color: ${({c}) => c};
    display: flex;
    flex-direction: ${({fd}) => fd};
    justify-content: ${({jc}) => jc};
    align-items: center;
    padding: 10px;
`

export default Card;