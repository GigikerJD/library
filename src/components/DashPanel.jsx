import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Typography, Box, Divider, Button, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { MenuOutlined } from "@mui/icons-material";



export const DashPanel = ({email}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const openPanel = () => {
        setIsDrawerOpen(true);
    };

    const closePanel = () => {
        setIsDrawerOpen(false);
    };

    const logout = () => {
        navigate("/login");
    };

    const goToSettings = () => {
        navigate(`/student/${email}/settings`);
    }

    return(
        <>
            <IconButton onClick={openPanel} sx={{ position: 'absolute', top: 16, right: 16 }}>
                <MenuOutlined />
            </IconButton>
            <Drawer anchor="right" open={isDrawerOpen} onClose={closePanel}>
                <Box 
                    p={3} 
                    width="300px" 
                    role="presentation" 
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <Button 
                            onClick={goToSettings} 
                            fullWidth 
                            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
                        >
                            <Typography variant="h6">Paramètres</Typography>
                        </Button>
                        <Divider sx={{ mb: 2 }} />
                        <Button 
                            fullWidth 
                            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
                        >
                            <Typography variant="h6">Boutique</Typography>
                        </Button>
                        <Divider sx={{ mb: 2 }} />
                        <Button 
                            fullWidth 
                            sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
                        >
                            <Typography variant="h6">Profil</Typography>
                        </Button>
                        <Divider sx={{ mb: 2 }} />
                    </Box>
                    <Button 
                        onClick={logout} 
                        variant="contained" 
                        color="error"
                        sx={{ 
                            mt: 2, 
                            fontSize: 12 
                        }}
                    >
                        Déconnexion
                    </Button>
                </Box>
            </Drawer>
        </>
    );

};

DashPanel.propTypes = ({
    email: PropTypes.string.isRequired
});