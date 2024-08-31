import { Button, Grid2, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export const ParameterInput = ({label, name, type, size, value, valueFunc, changeFunc }) => {

    return(
        <>
            <Grid2 item xs={12} md={6} sx={{display: 'flex', justifyContent: 'space-around'}}>
                <TextField
                    fullWidth
                    label={label}
                    name={name}
                    type={type}
                    size={size}
                    value={value}
                    onChange={valueFunc}
                    sx={{
                        width: '200px',
                        fontWeight: 800,
                        fontSize: 16,
                        '& input': {
                            color: '#f5f5f5',    
                        },
                        '& .MuiInputLabel-root': { color: '#fafafa' }
                    }}
                    required
                />
                <Button variant="contained" color="secondary">Vider</Button>
                <Button variant="contained" color="success" onClick={changeFunc}>OK</Button>
            </Grid2>
        </>
    );
};

ParameterInput.propTypes = ({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    valueFunc: PropTypes.func.isRequired,
    changeFunc: PropTypes.func.isRequired
});
