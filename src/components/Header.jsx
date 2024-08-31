import { AppBar, Typography, ButtonGroup, Button } from "@mui/material";


export const Header = () => {
    
    return(
        <>
            <AppBar
                sx={{
                    width: '100%',
                    height: '60px',
                    bgcolor: 'rgb(50,50,50)',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography 
                    variant="h5" 
                    color='rgb(250,250,250)' 
                    fontWeight={700}
                    letterSpacing={-1}
                    marginLeft={3}
                >
                    MyLibrary EFREI
                </Typography>

                <ButtonGroup 
                    variant="contained" 
                    color="primary"
                    sx={{
                        marginRight: 5
                    }}
                >
                    <Button href="/login">Connexion</Button>
                    <Button href="/register">Inscription</Button>
                </ButtonGroup>
            </AppBar>
        </>
    );
};