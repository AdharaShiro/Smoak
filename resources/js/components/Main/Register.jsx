import { Form, InputGroup, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


const theme = createTheme();

export default function Register() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setC_Password] = useState('')
    const navigate = useNavigate();
    const { setUserLogged, setUser } = useContext(AuthContext);

    const validateEmail = (email) => {
        // Expresión regular para validar el formato del correo
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const register = async (e) => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        await axios.post("http://localhost/Smoak/public/api/register",
            {
                name: name, lastName: lastName,
                email: email, password: password, c_password: c_password

            }, headers)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                setUserLogged(true);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user);
                localStorage.setItem("user_id", response.data.user.id);
                alert("¡Registro completado!\nBienvenido: " + response.data.user.name + " " + response.data.user.lastName);
                navigate('/smoak/public/')

            }).catch(error => {
                alert("La contraseña o correo es incorrecto");

            });
    }


    return (
        <>
            <div className="container-sm p-5">
                
                        {/* ICONO */}
                        <Form onSubmit={register}>
                            <InputGroup >
                                <TextField
                                    label="Nombre"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <TextField
                                    label="Apellido"
                                    variant="outlined"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={!validateEmail(email)}
                                    helperText={!validateEmail(email) ? 'Ingrese un correo válido' : ''}
                                    required
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <TextField
                                    label="Contraseña"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    inputProps={{
                                        minLength: 8,
                                    }}
                                    required
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <TextField
                                    label="Confirmar contraseña"
                                    variant="outlined"
                                    type='password'
                                    fullWidth
                                    value={c_password}
                                    onChange={(e) => setC_Password(e.target.value)}
                                    inputProps={{
                                        minLength: 8,
                                    }}
                                    required
                                />
                            </InputGroup>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                   

            </div>

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