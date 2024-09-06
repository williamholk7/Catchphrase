
import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const StyledDisplay = styled.div`
    height: ${({ h }) => h};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ jc }) => jc};
`

const Home = () => {

    return (
        <StyledHome>
            <Card h='100%'
                w='100%'
                bg='#FAF9F6'
                fd='column'
                jc='space-evenly' >
                <Button
                    h='17%'
                    w='15%'
                    bg='#999999'
                    c='#023e8a'
                    hbg='#555'
                    mb='5px' >
                    Go/Stop
                </Button>
                <StyledDisplay h='20%' jc='space-evenly' >
                    <Button h='70%' w='15%' bg='#999999' c='#023e8a' hbg='#555' >Team 1</Button>
                    <Card h='80%'
                        w='60%'
                        bg='#45b3e0'
                        fd='row'
                        jc='space-between'
                        br='5px'
                    >
                        <h1 className="roboto-regular" >0</h1>
                        <h1 className="roboto-regular" >Boba Fett</h1>
                        <h1 className="roboto-regular">0</h1>
                    </Card>
                    <Button h='70%' w='15%' bg='#999999' c='#023e8a' hbg='#555' >Team 2</Button>
                </StyledDisplay>
                <h2 className="roboto-regular" >Score: 0</h2>
                <StyledDisplay h='25%' jc='center' >
                    <Button h='70%' w='20%' bg='#999999' c='#023e8a' mr='20px' hbg='#555' >
                        Configure
                    </Button>
                    <Button h='70%' w='20%' bg='#999999' c='#023e8a' hbg='#555' >
                        Answers
                    </Button>
                </StyledDisplay>
                <StyledDisplay h='25%' jc='center' >
                    <Button
                        h='100%'
                        w='15%'
                        mr='5px'
                        bg='#45b3e0'
                        c='#023e8a'
                        hbg='#0077b6' >
                        Skip
                    </Button>
                    <Button
                        h='100%'
                        w='15%'
                        bg='#45b3e0' 
                        c='#023e8a' 
                        hbg='#0077b6'>
                        Next
                    </Button>
                </StyledDisplay>
            </Card>
        </StyledHome>
    )

}

export default Home;