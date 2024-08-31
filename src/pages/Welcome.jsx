import { Box, Container } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import efreiLogo from "../images/logo-efrei.png";


export const Welcome = () => {

    return(
        <>
            <Header/>
            <Container 
                sx={{
                    flexGrow: 1, 
                    backgroundImage: `url(${efreiLogo})`,
                    backgroundSize: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
            </Container>
            <Box>
                Bonjour
            </Box>
            <Footer/>
        </>
    );
};