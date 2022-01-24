import {
  Grid,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import { connect, useSelector } from "react-redux";
import { votar } from "../redux/action-creators/candidatos";
import { crearNotificacion } from "../redux/action-creators/notificaciones";

const Candidatos = ({ _votarPorCandidato }) => {
  const candidatos = useSelector((state) => state.candidatos.candidatos);

  return (
    <Grid container item spacing={2} xs={12} md={12}>
      {candidatos.map((candidato) => {
        return (
          <Grid item xs={4} md={4} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography variant="h3">{candidato.nombre}</Typography>
                <Typography variant="h5" color="text.secondary">
                  Votos actuales: {candidato.votos}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  onClick={() => {
                    _votarPorCandidato(candidato);
                  }}
                >
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

export const mapDispatchToProps = (dispatch) => ({
  _votarPorCandidato: (candidato) => {
    console.log("CANDIDATO", candidato);
    dispatch(votar(candidato));
    dispatch(
      crearNotificacion({
        mensaje: `Acabas de votar por ${candidato.nombre}`,
      })
    );
  },
});

export default connect(null, mapDispatchToProps)(Candidatos);
