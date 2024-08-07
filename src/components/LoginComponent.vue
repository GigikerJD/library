<template>
    <div class="form-container">
        <form @submit.prevent="login">
            <label for="email">Email:</label>
            <input 
                type="email" 
                v-model="user.email" 
                id="email" 
                required>

            <label for="password">Password:</label>
            <input 
                type="password" 
                v-model="user.password" 
                id="password" 
                required>
            
            <button type="submit">Se connecter</button>
        </form>

        <span>
            {{ user.email }} et {{ user.password }}
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            console.log('Email:', this.user.email);
            console.log('Password:', this.user.password);
            // Add your login logic here
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
    height: 90vh; /* Make sure the container takes the full height of the viewport */
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
</style>
