<template>
    <div class="form-container">
        <form @submit.prevent="login">
            <label for="email">Email:</label>
            <input 
                type="email" 
                v-model="user.email" 
                id="email"
                placeholder="Veuillez taper votre adresse email" 
                required>

            <label for="password">Mot de passe:</label>
            <input 
                type="password" 
                v-model="user.password" 
                id="password" 
                placeholder="Veuillez saisir votre mot de passe"
                required>
            
            <button type="submit">Se connecter</button>
            <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "LoginComponent",
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            errorMsg: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await axios.post("http://localhost:3001/api/user", {
                    EMAIL: this.user.email,
                    PASSWORD: this.user.password
                });

                if(response.status === 200){
                    console.log("Bravo, vous êtes connecté...");
                    // Handle successful login, such as redirecting the user
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.errorMsg = "Votre identifiant ou mot de passe semble incorrect...";
                } else if (error.response && error.response.status === 404) {
                    this.errorMsg = "Utilisateur non trouvé...";
                } else {
                    this.errorMsg = "Une erreur s'est produite. Veuillez réessayer plus tard.";
                }
                console.error("Error fetching user data:", error);  
            }
        }
    }
}
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh; 
}

form {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 250px;
    border: 2px solid rgb(50, 200, 150);
    border-radius: 25px;
    background-color: #fffafa;
    font-family: Arial, sans-serif;
    font-size: medium;
    font-weight: 600;
    padding: 5vh;
}

form label {
    letter-spacing: 0.25px;
    padding-top: 2em;
    padding-left: 57px;
}

form input {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    height: 30px;
    width: 70%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background-color: rgb(210, 210, 210);
    color: #212121;
    font-weight: 500;
}

button[type="submit"] {
    margin-top: 25px;
    height: 5vh;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: Arial, sans-serif;
    background-color: #010101;
    color: #ffffff;
    font-weight: 600;
}

button[type="submit"]:hover {
    background-color: #ff5733;
    color: #000000;
    filter: none;
}

button[type="submit"]:active {
    background-color: #ff5733;
    transform: scale(0.95);
}

.error-msg {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>
