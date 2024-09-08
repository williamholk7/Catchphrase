import { useOrientation } from 'react-use';

import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";
import { Fragment } from 'react';

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledDiv = styled.div`
    height: ${({ h }) => h};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${({ jc }) => jc};
`

const Home = () => {

    const { type } = useOrientation();

    return (

        <StyledHome>

            {type !== 'portrait-primary' ?
                (
                    <Fragment>
                        <Card h='100%'
                            w='100%'
                            bg='#FAF9F6'
                            fd='column'
                            jc='space-evenly' >
                            <Button onClick={() => console.log('Hello')}
                                h='17%'
                                w='15%'
                                bg='#999999'
                                c='#023e8a'
                                hbg='#555'
                                mb='5px' >
                                Go/Stop
                            </Button>
                            <StyledDiv h='20%' jc='space-evenly' >
                                <Button h='50%' w='15%' bg='#999999' c='#023e8a' hbg='#555' >Team 1</Button>
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
                                <Button h='50%' w='15%' bg='#999999' c='#023e8a' hbg='#555' >Team 2</Button>
                            </StyledDiv>
                            <StyledDiv h='25%' jc='space-around' >
                                <Button h='50%' w='17%' bg='#999999' c='#023e8a' mr='20px' hbg='#555' >
                                    Configure
                                </Button>
                                <h2 className="roboto-regular" >Skipped: 0</h2>
                                <h2 className="roboto-regular" >Correct: 0</h2>
                                <Button h='50%' w='17%' bg='#999999' c='#023e8a' ml='20px' hbg='#555' >
                                    Answers
                                </Button>
                            </StyledDiv>
                            <StyledDiv h='25%' jc='center' >
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
                            </StyledDiv>
                        </Card>
                    </Fragment>
                ) : (
                    <h2>Rotate Device</h2>
                )}

        </StyledHome>
    )

}

export default Home;