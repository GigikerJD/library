import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppHeader } from "../components/AppHeader";
import { DashPanel } from "../components/DashPanel";

export const Student = () => {
    const params = useParams();
    const email = params.email;
    const [student, setStudent] = useState({});

    const pageTitle = "Espace étudiant"
    useEffect(() => {
        axios.get(`http://localhost:4000/api/user/${email}`)
            .then(response => setStudent(response.data))
            .catch(() => console.log("Utilisateur introuvable"));

        document.title = pageTitle;
        document.body.style.backgroundColor = "rgb(230,230,230)";
    }, [email, pageTitle]);

    return(
        <>
            <AppHeader student={student}/>
            <DashPanel email={email}/>
        </>
    );
};
