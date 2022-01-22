import {
  Grid,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { votar } from '../redux/features/candidatosSlice';

export const Candidatos = () => {
  const candidatos = useSelector(state => state.candidatos.candidatos);
  const dispatch = useDispatch();

  return (
    <Grid container item spacing={2}>
      {candidatos.map((candidato, index) => {
        return (
          <Grid item xs={4} md={4} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography>{candidato.nombre}</Typography>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={() => dispatch(votar(index))}>
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
