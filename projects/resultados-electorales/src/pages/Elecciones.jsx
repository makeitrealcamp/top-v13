import { Grid } from '@mui/material';
import { Candidatos } from '../components/Candidatos';
import { Resumen } from '../components/Resumen';

export const Elecciones = ({ candidatos, setCandidatos }) => {
  return (
    <Grid container spacing={2}>
      <Candidatos candidatos={candidatos} setCandidatos={setCandidatos} />

      <Grid container item spacing={2}>
        <Resumen candidatos={candidatos}></Resumen>
      </Grid>
    </Grid>
  );
};
