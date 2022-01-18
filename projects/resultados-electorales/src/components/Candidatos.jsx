import {
  Grid,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from '@mui/material';
import { useContext } from 'react';
import { CandidatosContext } from '../utils/CandidatosContext';

export const Candidatos = () => {
  const { candidatos, votar } = useContext(CandidatosContext);

  return (
    <Grid container item spacing={2}>
      {candidatos.map(candidato => {
        return (
          <Grid item xs={4} md={4} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography>{candidato.nombre}</Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={() => votar(candidato)}>
                  Votar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
