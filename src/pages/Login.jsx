import { AccountCircleRounded, VisibilityOffRounded } from "@mui/icons-material";
import { Box, Button, Container, FormControl, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false);

    const showPassword = () => {
        setVisibility(!visibility);
    } 

    const handleLogin = async (e) => {
        e.preventDefault();
    } 

    const pageTitle = "Page de connexion";
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);


    return(
        <>
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily:"'Poppins',sans-serif"}}>
                <Box component='form' padding={3} borderRadius={5} onSubmit={handleLogin}>
                    <Typography sx={{marginBottom:'5px'}}>Connexion à votre espace MyLibrary</Typography>
                    <Stack spacing={3}>
                        <FormControl fullWidth>
                            <TextField
                                size="small"
                                label="Email"
                                type="email"
                                placeholder="Votre email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                            <AccountCircleRounded/>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField
                                size="small"
                                label="Mot de passe"
                                type={visibility ? "text" : "password"}
                                placeholder="Votre mot de passe"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                            <Button onClick={showPassword}>
                                <VisibilityOffRounded/>
                            </Button>
                        </FormControl>

                        <Button>Se connecter</Button>
                    </Stack>
                </Box>
            </Container>
        </>
    );
};