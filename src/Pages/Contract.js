import styled from "styled-components";
import { PageLayout, ContractContainer, ContractContainerA, ContractContainerB, ContractContainerC, Alink } from "../Interface/Contract"
import { motion } from 'framer-motion';
function Showcase() {
    return (
        <PageLayout>
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >Contract Information 📔</motion.h1>
            <ContractContainer as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                <p>Email : pankorn.wang@bumail.net</p>
                <p>Line : middlent</p>
                <p>Phone : 086-3520825</p>
            </ContractContainer>
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >Profile 👨‍🚀</motion.h1>
            <ContractContainerA>
                <ContractContainerB as={motion.div}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                    <Alink href="https://github.com/pankornsupercool">GitHub</Alink>
                </ContractContainerB>
                <ContractContainerC as={motion.div}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                    <Alink href="https://www.linkedin.com/in/pankorn-wangsakun-31a7951a7/">LinkedIn</Alink>
                </ContractContainerC>
            </ContractContainerA>
        </PageLayout>
    );
}
export default Showcase;