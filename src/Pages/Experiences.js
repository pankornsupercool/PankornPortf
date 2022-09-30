import {
    A1,
    Container1,
    ExpContainer,
    MainContainer1,
    MainContainer2,
    MainContainer3
} from '../Interface/Experiences';
import { motion } from 'framer-motion';
function Experiences() {
    return (
        <ExpContainer>
            <MainContainer1 as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >
                <Container1>
                    <h1>Army Air Defense System | 2020-2021</h1>
                    <p>Working with BU-MIT LAB TEAM ✈️</p>
                    <img
                        src='https://i.ibb.co/q5zvctt/AADS.png'
                        alt='Girl in a jacket'
                        width='900'
                        height='510'
                    ></img>
                    <p>AADS is a simulated radar software for the military.</p>
                    <p>
                        Included creation of marker, corridor, route and aircraft
                        directions.
                    </p>
                    <p>Using : C#, Window Form, .NET, GMap</p>
                </Container1>
            </MainContainer1>

            <MainContainer2 as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >
                <Container1>
                    <h1>The Rich Decentralized Finance | 2021-2022</h1>
                    <p>Graduation Project 🪙</p>
                    <img
                        src='https://i.ibb.co/Z263bw2/Therich.png'
                        alt='www'
                        width='900'
                        height='510'
                    ></img>
                    <p>
                        The Rich is a DeFi application that building on Moonbase Alpha
                        chain.
                    </p>
                    <p>You can swap and earn liquidity in our application.</p>
                    <p>Using : React, Styled-Components, Solidity, Framer-motion</p>
                    <A1 href='https://therichdex.netlify.app/#/'>Visit Website</A1>
                </Container1>
            </MainContainer2>
        </ExpContainer>
    );
}
export default Experiences;
