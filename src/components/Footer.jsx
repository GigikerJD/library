import { Box } from "@mui/material";


export const Footer = () => {

    return(
        <>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '70px',
                    bgcolor: 'rgb(50,50,50)',
                    textAlign: 'center',
                    color: '#fff',
                    fontFamily: 'Poppins, sans-serif',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                @ Tous droits réservés
            </Box>
        </>
    );
};