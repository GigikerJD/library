import { AccountCircleRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, FormControl, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginbackground from "../images/login-background.jpg";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false);
    const navigate = useNavigate();

    const showPassword = () => {
        setVisibility(!visibility);
    } 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/user", {email, password});
            if(response.status === 202){
                if(response.data.role === "STUDENT") navigate(`/student/${email}`);
                else navigate(`/admin/${email}`);
            }
        } catch (error) {
            if(error.response)
                if(error.response.status === 404) alert(error.response.data.message);
        }
    } 

    const pageTitle = "Page de connexion";
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);


    return(
        <>
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily:"'Poppins',sans-serif"}}>
                <Box component='form' onSubmit={handleLogin}
                    sx={{
                        padding:3, 
                        borderRadius:5, 
                        opacity: 15, 
                        color: "rgb(250,250,250)",
                        width: 400, 
                        backgroundImage: `url(${loginbackground})`,
                        backgroundColor: 'rgba(255,255,255,0.1)', 
                        backgroundRepeat: 'no-repeat', 
                        height: "450px",
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-evenly'
                    }}
                >
                    <Typography 
                        sx={{
                            marginBottom:'5px', 
                            textAlign:'center', 
                            fontFamily:'Poppins, sans-serif',
                            fontSize: 24,
                            fontWeight: '600',
                            letterSpacing: 0
                        }}
                    >
                        Connexion à votre espace MyLibrary de l&apos;EFREI
                    </Typography>
                    <Stack spacing={3} sx={{color:'rgb(250,250,250)', marginTop: -6}}>
                        <FormControl fullWidth>
                            <TextField
                                size="small"
                                label="Email"
                                type="email"
                                placeholder="Votre email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                slotProps={{
                                    input:{
                                        endAdornment: 
                                            <InputAdornment position="end" sx={{color: 'white'}}>
                                                <AccountCircleRounded/>
                                            </InputAdornment>,
                                        style:{color: 'white'}
                                    }
                                }}
                            />
                            
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
                                slotProps={{
                                    input:{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={showPassword}
                                                    sx={{marginRight: -1, color:'white'}}
                                                >
                                                    {visibility ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>,
                                        style:{color: 'white'}
                                    }
                                }}
                            />
                        </FormControl>
                        <Button variant="contained" type="submit">Se connecter</Button>
                    </Stack>
                </Box>
            </Container>
        </>
    );
};  