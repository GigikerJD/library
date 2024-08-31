import { Alert, Button, Grid2,  IconButton,  Snackbar,  Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ParameterInput } from "../components/ParameterInput";
import { ArrowBackIosSharp } from "@mui/icons-material";

export const StudentSettings = () => {

    const params = useParams();
    const email = params.email;

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUpload, setPhotoUpload] = useState(null);

    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success"); 
    
    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const pageTitle = "Paramètres";
    useEffect(() => {
        document.title = pageTitle;
        document.body.style.backgroundColor = 'rgb(220,220,220)'
    }, [pageTitle, navigate]);

    const ChangeEmail = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/user/${email}`, {newEmail: newEmail})
            .then(response => {
               showSnackbar(response.data.message, "success");
            })
            .catch(error => {
                showSnackbar(error.response.data.message, "error");
            });
    }
    const ChangeFirstname = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/user/${email}/firstname`, {firstname: firstname})
            .then(response => {
               showSnackbar(response.data.message, "success");
            })
            .catch(error => {
                showSnackbar(error.response.data.message, "error");
            });
    }
    const ChangeLastname = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/user/${email}/lastname`, {lastname: lastname})
            .then(response => {
               showSnackbar(response.data.message, "success"); 
            })
            .catch(error => {
                showSnackbar(error.response.data.message, "error");
            });
    }

    const ChangePassword = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/user/${email}/password`, {password: password})
            .then(response => {
               showSnackbar(response.data.message, "success");
            })
            .catch(error => {
                showSnackbar(error.response.data.message, "error");
            });
    }

    const ChangePhoto = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/user/${email}/photo`, {photo: photoUpload})
            .then(response => {
               showSnackbar(response.data.message, "success");
            })
            .catch(error => {
                showSnackbar(error.response.data.message, "error");
            });
    }

    return(
        <>
            <IconButton
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    marginRight: 2,
                    marginTop: 1,
                    bgcolor: '#546e7a',
                    color: 'black',
                    "&:hover":{
                        color:'white',
                        bgcolor:'#546e7a'
                    }
                }}
                onClick={() => navigate(`/student/${email}`)}
            >
                <ArrowBackIosSharp/>
            </IconButton>
            <Grid2 
                container
                spacing={2} 
                width="500px" 
                direction="column" 
                sx={{
                    margin: '0 auto',
                    bgcolor: '#546e7a',
                    padding: 2,
                    borderRadius: 5,
                    marginTop: 10
                }}
            >
                <Grid2 item xs={12}>
                    <Typography variant="h5"
                        sx={{color:'white', 
                            margin: '0 auto', 
                            bgcolor: 'rgb(15,15,15)', 
                            width: 'fit-content',
                            padding: '8px',
                            borderRadius: '4px',
                            fontSize: 16,
                            fontWeight: 700
                        }}
                    >
                        Profile Settings
                    </Typography>
                </Grid2>
                <ParameterInput
                    label="Prénom"
                    name="prénom"
                    type="text"
                    size="small"
                    value={firstname}
                    valueFunc={(e) => setFirstname(e.target.value)}
                    changeFunc={ChangeFirstname}
                />
                <ParameterInput
                    label="Nom de famille"
                    name="nom"
                    type="text"
                    size="small"
                    value={lastname.toUpperCase()}
                    valueFunc={(e) => setLastname(e.target.value)}
                    changeFunc={ChangeLastname}
                />
                <ParameterInput
                    label="Email"
                    name="email"
                    type="email"
                    size="small"
                    value={newEmail}
                    valueFunc={(e) => setNewEmail(e.target.value)}
                    changeFunc={ChangeEmail}
                />
                <ParameterInput
                    label="Mot de passe"
                    name="motdepasse"
                    size="small"
                    value={password}
                    valueFunc={(e) => setPassword(e.target.value)}
                    changeFunc={ChangePassword}
                />
                <ParameterInput
                    name="photo"
                    size="small"
                    value={photoUpload}
                    valueFunc={(e) => setPhotoUpload(e.target.files[0])}
                    type="file"
                    changeFunc={ChangePhoto}
                />
            </Grid2>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                action={
                    <Button color="inherit" onClick={() => setSnackbarOpen(false)}>
                        Close
                    </Button>
                }
            >
                <Alert variant="filled" onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};