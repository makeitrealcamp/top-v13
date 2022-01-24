import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nuevoCandidato } from '../redux/action-creators/candidatos';
import { crearNotificacion } from '../redux/action-creators/notificaciones';

const initialCandidato = {
  firstName: '',
  lastName: '',
  propuestas: '',
};

const candidatoEsValido = candidato => {
  return candidato.firstName !== '' || candidato.lastName !== '';
};

export const RegistrarCandidato = () => {
  const [candidato, setCandidato] = useState(initialCandidato);
  const dispatch = useDispatch();

  const onInputChange = inputName => inputValue => {
    setCandidato({ ...candidato, [inputName]: inputValue.target.value });
  };

  const crearCandidato = candidato => {
    if (candidatoEsValido(candidato)) {
      dispatch(nuevoCandidato(candidato));
      dispatch(
        crearNotificacion({
          mensaje: `Candidato ${candidato.firstName} ${candidato.lastName} creado`,
        })
      );
      setCandidato(initialCandidato);
    } else {
      dispatch(
        crearNotificacion({
          mensaje: 'Error creando al candidato',
          severity: 'error',
        })
      );
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    crearCandidato(candidato);
  };

  return (
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
        <Typography component="h1" variant="h5">
          Registrar Candidato
        </Typography>
        <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onInputChange('firstName')}
                name="firstName"
                required
                fullWidth
                value={candidato.firstName}
                id="firstName"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onInputChange('lastName')}
                value={candidato.lastName}
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                onChange={onInputChange('propuestas')}
                value={candidato.propuestas}
                required
                fullWidth
                multiline
                rows={4}
                id="propuestas"
                label="Propuestas"
                name="propuestas"
                autoComplete="family-name"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
