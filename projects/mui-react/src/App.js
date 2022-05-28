import {
  Container,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TableBody,
  TableHead,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import logo from "./logo.svg";
import "./App.css";

const data = ["Maria", "Juan", "Raul", "Otros..."];

function App() {
  return (
    <Container className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" aria-label="Menu" color="inherit">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" variant="outlined" size="large">
            About
          </Button>
          <Button color="inherit" variant="outlined" size="large">
            About
          </Button>
        </Toolbar>
      </AppBar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow>
                <TableCell>{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
