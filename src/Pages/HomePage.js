
import "../style.css";
import {
    HeaderContainer, Container1, Container2, Container3, Container4, Container5, Text1

} from '../Interface/Header';

import { motion } from "framer-motion";
import Typed from "react-typed";
function HomePage() {
    return (
        <HeaderContainer>
            <Container2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}

                >Welcome To My Portfolio.
                </motion.h1>
            </Container2>
            <Container2>
                {/* <h1 >Hi! I'm Pankorn Front-end Developer🌻 </h1> */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}

                >Hello There! I'm Pankorn Front-end Developer🌻
                </motion.h1>

                <Typed strings={[
                    'Front-End Developer, Day Trader, Reader and Listener.',
                    'Looking For Internship on Front-end Field.',

                ]}
                    typeSpeed={50}
                    backSpeed={50}
                />
            </Container2>
            <Container3 as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >
                <h3>Get to know me better 🎃</h3>
                <Text1>👨‍🚀 Full Name: Pankorn Wangsakun</Text1>
                <p>📔 Nickname: Toon</p>
                <p>🪅 Born on: 9 Obtober 2000  </p>
                <p>🦊 Passionate: Trading, Investing, Reading  </p>
            </Container3>
            <Container4 as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                <h3>Brief Experiences 🐻‍❄️</h3>
                <p>🌵 Front-end experience: 1 Years with self study.</p>
                <p>🌍 Team collaboration experience: 1 Years with BU-MIT LAB TEAM.</p>
                <p>🌳 Real work experience: -  </p>
            </Container4>
            <Container5 as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                <h3>Currently Looking For Internship Positions 👻</h3>
                <p>🍉 Front-end Developer</p>
                <p>🍉 UX/UI Design</p>
                <p>🍉 Any position. I'm ready to learn any new things but it's might take some times.</p>
            </Container5>
        </HeaderContainer>
    );
}

export default HomePage;