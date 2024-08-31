import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';


export const AppHeader = ({student}) => {

    return(
        <>
            <Box p={2}>
                <Typography variant="body1">
                    Je suis un étudiant, mon email est le suivant: {student.email}
                </Typography>
                <Typography variant="body1">
                    Je suis {student.firstname} {student.lastname}
                </Typography>
            </Box>
        </>
    );
};

AppHeader.propTypes={
    student: PropTypes.shape({
        email: PropTypes.string.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        DOB: PropTypes.instanceOf(Date).isRequired
    }).isRequired,
};