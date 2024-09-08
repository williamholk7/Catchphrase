import { useState } from 'react';
import { useOrientation } from 'react-use';

import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";
import Modal from '../components/Modal';
import Select from '../components/Select';
import Div from '../components/Div';
import { Fragment } from 'react';

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Home = () => {

    const [openConfig, setOpenConfig] = useState(false);
    const [openAnswers, setOpenAnswers] = useState(false);
    const [theme, setTheme] = useState('Star Wars')

    const handleCloseConfig = () => {
        setOpenConfig(false);
    }

    const handleOpenConfig = () => {
        setOpenConfig(true);
    }

    const handleCloseAnswers = () => {
        setOpenAnswers(false);
    }

    const handleOpenAnswers = () => {
        setOpenAnswers(true);
    }

    const handleChangeTheme = (event) => {
        setTheme(event.target.value);
    }

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
                            <Div h='20%' jc='space-evenly' ai='center' >
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
                            </Div>
                            <Div h='25%' jc='space-around' ai='center'>
                                <Button onClick={handleOpenConfig} h='50%' w='17%' bg='#999999' c='#023e8a' mr='20px' hbg='#555' >
                                    Configure
                                </Button>
                                <h2 className="roboto-regular" >Skipped: 0</h2>
                                <h2 className="roboto-regular" >Correct: 0</h2>
                                <Button onClick={handleOpenAnswers} h='50%' w='17%' bg='#999999' c='#023e8a' ml='20px' hbg='#555' >
                                    Answers
                                </Button>
                            </Div>
                            <Div h='25%' jc='center' ai='center'>
                                <Button
                                    h='100%'
                                    w='15%'
                                    mr='80px'
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
                            </Div>
                            <Modal isOpen={openConfig}>
                                <>
                                    <Button onClick={handleCloseConfig} ml='95%' c='red' bg='none' >X</Button>
                                    <h2 className="roboto-regular" style={{fontSize: '3em'}}>Select Theme</h2>
                                    <Select value={theme} onChange={handleChangeTheme}>
                                        <option value='Star Wars'>Star Wars</option>
                                        <option value='Harry Potter'>Harry Potter</option>
                                        <option value='High Republic'>High Republic</option>
                                    </Select>
                                    <Button h='15%' w='20%' bg='#45b3e0' c='#023e8a' hbg='#0077b6' >Submit</Button>
                                </>
                            </Modal>
                            <Modal isOpen={openAnswers}>
                                <>
                                    <Button onClick={handleCloseAnswers} ml='95%' c='red' bg='none' >X</Button>
                                    <Div h='90%' jc='space-between' fd='column'>
                                        <Div h='10%' jc='space-around'  >
                                            <h2>Skipped</h2>
                                            <h2>Correct</h2>
                                        </Div>
                                        <Div h='80%' jc='space-around'>
                                            <ul style={{overflow: 'scroll'}} >
                                                <li>Hi</li>
                                                <li>Poggle the</li>
                                                <li>Hi</li>
                                            </ul>
                                            <ul style={{overflow: 'scroll'}} >
                                                <li>Poggle the Lesser</li>
                                                <li></li>
                                                <li>Hi</li>
                                                <li>Poggle the Lesser</li>
                                                <li></li>
                                                <li>Hi</li>
                                                <li>Poggle the Lesser</li>
                                                <li></li>
                                                <li>Hi</li>
                                                <li>Poggle the Lesser</li>
                                                <li></li>
                                                <li>Hi</li>
                                            </ul>
                                        </Div>
                                    </Div>
                                </>
                            </Modal>
                        </Card>

                    </Fragment>
                ) : (
                    <h2>Rotate Device</h2>
                )}
        </StyledHome>
    )

}

export default Home;