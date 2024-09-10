import { useState, useRef, useEffect } from 'react';
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
    const [theme, setTheme] = useState('Star Wars');
    const [timerAudio, setTimerAudio] = useState(new Audio("/starWarsTimer.wav"));
    const Ref = useRef(null);
    const [timer, setTimer] = useState("00");
    let nextId = 0;

    const [themeState, setThemeState] = useState({
        currentTheme: 'Star Wars',
        placeholder: 'THIS IS WHERE THE FUN BEGINS',
        oneName: 'Rebellion',
        twoName: 'Empire',
        winSound: new Audio('/yippee.wav')
    })

    const [gameState, setGameState] = useState({
        teamOne: 0,
        teamTwo: 0,
        skipped: 0,
        correct: 0,
        currentIndex: 0,
        currentItem: 'Poggle the Lesser'
    });

    const [masterList, setMasterList] = useState(['Boba Fett', 'Poggle the Lesser', 'Ben Swolo']);
    const [initialMasterList, setInitialMasterList] = useState(['Boba Fett', 'Poggle the Lesser', 'Ben Swolo']);
    const [skippedList, setSkippedList] = useState([]);
    const [correctList, setCorrectList] = useState([]);
    const { type } = useOrientation();

    //RANDOM INDEX

    const getRandom = (array) => {
        return Math.floor(Math.random() * array.length);
    }

    //TIMER FUNCTIONS

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        return {
            total,
            seconds,
        };
    };

    const startTimer = (e) => {
        let { total, seconds } =
            getTimeRemaining(e);

        if (total >= 0) {
            setTimer(
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }

    };

    const clearTimer = (e) => {
        setTimer("00");

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const renewTimer = (e) => {
        setTimer("53");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 53);
        return deadline;
    };


    useEffect(() => {
        clearTimer(0);
    }, []);

    //GO/STOP FUNCTIONS

    const isGoing = () => {
        if (timer === "00") {
            return false;
        }
        return true;
    }

    const handleGoStop = (e) => {

        if (timer === "00") {
            let rand = getRandom(masterList);
            setGameState({
                ...gameState,
                skipped: 0,
                correct: 0,
                currentIndex: rand,
                currentItem: masterList[rand]
            })
            setSkippedList([]);
            setCorrectList([]);
            renewTimer(getDeadTime());
            timerAudio.play();
            setTimerAudio(timerAudio);
        } else {
            let rand = getRandom(masterList);
            setGameState({
                ...gameState,
                currentIndex: rand,
                currentItem: masterList[rand]
            })
            timerAudio.pause();
            timerAudio.currentTime = 0;
            setTimerAudio(timerAudio);
            clearTimer(0);
        }
    };

    //TEAM INCREMENT FUNCTION

    const handleTeam = (teamNumber) => {

        if (teamNumber === 1) {
            if (gameState.teamOne < 6) {
                setGameState({
                    ...gameState,
                    teamOne: gameState.teamOne + 1
                });
            } else if (gameState.teamOne === 6) {
                setGameState({
                    ...gameState,
                    teamOne: gameState.teamOne + 1
                });
                themeState.winSound.play();
            } else {
                setGameState({
                    ...gameState,
                    teamOne: 0
                });
            }
        } else {
            if (gameState.teamTwo < 6) {
                setGameState({
                    ...gameState,
                    teamTwo: gameState.teamTwo + 1
                });
            } else if (gameState.teamTwo === 6) {
                setGameState({
                    ...gameState,
                    teamTwo: gameState.teamTwo + 1
                });
                themeState.winSound.play();
            } else {
                setGameState({
                    ...gameState,
                    teamTwo: 0
                });
            }
        }
    }

    // CONFIGURE FUNCTIONS

    const handleCloseConfig = () => {
        setOpenConfig(false);
    }

    const handleOpenConfig = () => {
        setOpenConfig(true);
    }

    const handleChangeTheme = (event) => {
        setTheme(event.target.value);
    }

    const handleSubmitTheme = () => {
        switch (theme) {
            case 'Star Wars':
                setThemeState({
                    currentTheme: theme,
                    placeholder: 'THIS IS WHERE THE FUN BEGINS',
                    oneName: 'Rebellion',
                    twoName: 'Empire',
                    winSound: new Audio("/yippee.wav")
                });
                break;
            case 'Harry Potter':
                setThemeState({
                    currentTheme: theme,
                    placeholder: 'I SOLEMNLY SWEAR THAT I AM UP TO NO GOOD',
                    oneName: 'Gryffindor',
                    twoName: 'Slytherin',
                    winSound: new Audio("/yippee.wav")
                });
                break;
            case 'High Republic':
                setThemeState({
                    currentTheme: theme,
                    placeholder: 'FOR LIGHT AND LIFE',
                    oneName: 'Republic',
                    twoName: 'Nihil',
                    winSound: new Audio("/yippee.wav")
                });
                break;
        }
    }

    // ANSWERS FUNCTIONS

    const handleCloseAnswers = () => {
        setOpenAnswers(false);
    }

    const handleOpenAnswers = () => {
        setOpenAnswers(true);
    }

    // SKIP FUNCTION

    const handleSkip = () => {
        setSkippedList([...skippedList, { id: nextId++, name: gameState.currentItem }]);

        if (masterList.length === 1) {
            masterList.pop();
            for (let i = 0; i < initialMasterList.length; i++) {
                masterList.push(initialMasterList[i]);
            }
        }

        let rand = getRandom(masterList);
        while (gameState.currentItem === masterList[rand]) {
            rand = getRandom(masterList);
        }

        setGameState({
            ...gameState,
            skipped: gameState.skipped + 1,
            currentIndex: rand,
            currentItem: masterList[rand]
        })

        console.log(gameState);
        console.log(masterList);

    }

    // NEXT FUNCTION

    const handleNext = () => {
        setCorrectList([...correctList, { id: nextId++, name: gameState.currentItem }])
        masterList.splice(gameState.currentIndex, 1);
        if (!masterList.length) {
            for (let i = 0; i < initialMasterList.length; i++) {
                masterList.push(initialMasterList[i]);
            }
        }

        let rand = getRandom(masterList);
        while (gameState.currentItem === masterList[rand]) {
            rand = getRandom(masterList);
        }

        setGameState({
            ...gameState,
            correct: gameState.correct + 1,
            currentIndex: rand,
            currentItem: masterList[rand]
        })

        console.log(gameState);
        console.log(masterList);

    }

    return (

        <StyledHome>
            {type !== 'portrait-primary' ?
                (
                    <Fragment>
                        <Card h='100%'
                            w='100%'
                            bg='#FAF9F6'
                            fd='column'
                            jc='space-evenly'
                        >
                            <Button onClick={handleGoStop}
                                h='17%'
                                w='15%'
                                bg='#45b3e0'
                                c='#023e8a'
                                mb='5px' >
                                Go/Stop
                            </Button>
                            <Div
                                h='20%'
                                jc='space-evenly'
                                ai='center'
                            >
                                <Button
                                    onClick={() => handleTeam(1)}
                                    disabled={isGoing()}
                                    h='50%' 
                                    w='17%'
                                    bg='#999999'
                                    c='#023e8a'
                                >
                                    {themeState.oneName}
                                </Button>
                                <Card
                                    h='80%'
                                    w='60%'
                                    bg='#023e8a'
                                    fd='row'
                                    jc='space-between'
                                    br='5px'
                                >
                                    <h1 className="roboto-regular" >{gameState.teamOne}</h1>
                                    <h1 className="roboto-regular" style={{ textAlign: 'center', display: isGoing() ? "block" : "none" }} >{gameState.currentItem}</h1>
                                    <h1 className="roboto-regular" style={{ textAlign: 'center', display: !isGoing() ? "block" : "none" }} >{themeState.placeholder}</h1>
                                    <h1 className="roboto-regular">{gameState.teamTwo}</h1>
                                </Card>
                                <Button
                                    onClick={() => handleTeam(2)}
                                    disabled={isGoing()}
                                    h='50%'
                                    w='17%'
                                    bg='#999999'
                                    c='#023e8a'
                                >
                                    {themeState.twoName}
                                </Button>
                            </Div>
                            <Div
                                h='25%'
                                jc='space-around'
                                ai='center'
                            >
                                <Button
                                    onClick={handleOpenConfig}
                                    disabled={isGoing()}
                                    h='50%' w='17%'
                                    bg='#45b3e0'
                                    c='#023e8a'
                                    mr='20px'
                                >
                                    Configure
                                </Button>
                                <h2 className="roboto-regular" >Skipped: {gameState.skipped}</h2>
                                <h2 className="roboto-regular" >Correct: {gameState.correct}</h2>
                                <Button
                                    onClick={handleOpenAnswers}
                                    disabled={isGoing()}
                                    h='50%'
                                    w='17%'
                                    bg='#45b3e0'
                                    c='#023e8a'
                                    ml='20px'
                                >
                                    Answers
                                </Button>
                            </Div>
                            <Div h='25%' jc='center' ai='center'>
                                <Button
                                    onClick={handleSkip}
                                    disabled={!isGoing()}
                                    h='100%'
                                    w='15%'
                                    mr='80px'
                                    bg='#45b3e0'
                                    c='#023e8a'
                                >
                                    Skip
                                </Button>
                                <Button
                                    onClick={handleNext}
                                    disabled={!isGoing()}
                                    h='100%'
                                    w='15%'
                                    bg='#45b3e0'
                                    c='#023e8a'
                                >
                                    Next
                                </Button>
                            </Div>
                            <Modal isOpen={openConfig}>
                                <>
                                    <Button
                                        onClick={handleCloseConfig}
                                        ml='95%'
                                        c='red'
                                        bg='none'
                                    >
                                        X
                                    </Button>
                                    <h2 className="roboto-regular" style={{ fontSize: '3em' }}>Select Theme</h2>
                                    <Select value={theme} onChange={handleChangeTheme}>
                                        <option value='Star Wars'>Star Wars</option>
                                        <option value='Harry Potter'>Harry Potter</option>
                                        <option value='High Republic'>High Republic</option>
                                    </Select>
                                    <Button
                                        onClick={handleSubmitTheme}
                                        h='15%'
                                        w='20%'
                                        mt='10px'
                                        bg='#45b3e0'
                                        c='#023e8a'
                                    >
                                        Submit
                                    </Button>
                                    <h2 className="roboto-regular">Current Theme: {themeState.currentTheme}</h2>
                                </>
                            </Modal>
                            <Modal isOpen={openAnswers}>
                                <>
                                    <Button
                                        onClick={handleCloseAnswers}
                                        ml='95%'
                                        c='red'
                                        bg='none'
                                    >
                                        X
                                    </Button>
                                    <Div h='90%' jc='space-between' fd='column'>
                                        <Div h='10%' jc='space-around'  >
                                            <h2 className="roboto-regular">Skipped</h2>
                                            <h2 className="roboto-regular">Correct</h2>
                                        </Div>
                                        <Div h='80%' jc='space-around'>
                                            <ul className="roboto-regular" style={{ overflow: 'scroll' }} >
                                                {skippedList.map(skip => (
                                                    <li key={skip.id}>{skip.name}</li>
                                                ))}
                                            </ul>
                                            <ul className="roboto-regular" style={{ overflow: 'scroll' }} >
                                                {correctList.map(correct => (
                                                    <li key={correct.id}>{correct.name}</li>
                                                ))}
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