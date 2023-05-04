import { Form, InputGroup, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


const theme = createTheme();

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const { setUserLogged, setUser } = useContext(AuthContext);
    const [textError, setTextError] = useState('');
    const [formOk, setFormOk] = useState(true);

    const login = async (e) => {
        e.preventDefault();
        console.log("Login")

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        await axios.post("http://localhost/Smoak/public/api/login",
            {
                email: email, password: password,

            }, headers)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                setUserLogged(true);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user);
                localStorage.setItem("user_id", response.data.user.id);

                navigate('/smoak/public/')

                //$user = localStorage.getItem("user_id");


                //console.log("token: ", response.data.token);



                // Rutas de inicio de sesión. 


                /*if (response.data.user.rol === "Administrador") {
                    console.log("Sesión iniciada", email, password); //Muestra lo que recibe 
                    console.log("Administrador: ", response.data.user.nombre, " ", response.data.user.apellido);
                    alert("Sesión iniciada " + response.data.user.nombre + " " + response.data.user.apellido)
                    navigate('/example-app/public/admin');
                } else {
                    alert("Sesión iniciada " + response.data.user.nombre +  " " + response.data.user.apellido)
                    navigate('/example-app/public/');
                }*/
            }).catch(error => {
                console.log("error")
                setTextError("La contraseña o correo es incorrecto");
                setFormOk(false);
                console.log(textError);
            });
    }


    return (
        <>
            <Form>
                <InputGroup className="mb-3">
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                    />
                </InputGroup>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    );
}

/*
<ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1,  bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </ThemeProvider>
*/