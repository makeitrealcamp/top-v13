import { Grid } from '@mui/material';
import Escrutinio from '../components/Escrutinio';
import { Ganador } from '../components/Ganador';
import { Total } from '../components/Total';

export const Resumen = () => {
  return (
    <Grid item container xs={12} md={12} spacing={2}>
      <Total />
      <Escrutinio />
      <Ganador />
    </Grid>
  );
};
