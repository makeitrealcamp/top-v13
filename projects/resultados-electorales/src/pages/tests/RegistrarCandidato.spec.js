import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../utils/testUtils';
import { errors, RegistrarCandidato } from '../RegistrarCandidato';

describe('RegistrarCandidato', () => {
  it('should return an error if fields are empty', () => {
    // arrange
    render(<RegistrarCandidato />);
    const registrarBtn = screen.getByRole('button', {
      name: /registrar/i,
    });

    // act
    fireEvent.click(registrarBtn);

    //assert
    expect(screen.getByText(errors.propuestas)).toBeInTheDocument();
    expect(screen.getByText(errors.nombre)).toBeInTheDocument();
    expect(screen.getByText(errors.apellido)).toBeInTheDocument();
  });

  it('should return an error if name is empty', () => {
    render(<RegistrarCandidato />);
    const apellidoInput = screen.getByRole('textbox', {
      name: /apellido/i,
    });
    const propuestasInput = screen.getByRole('textbox', {
      name: /propuestas/i,
    });
    const registrarBtn = screen.getByRole('button', {
      name: /registrar/i,
    });

    // act
    userEvent.type(apellidoInput, 'sosa');
    userEvent.type(propuestasInput, 'lunes libres');
    fireEvent.click(registrarBtn);

    //assert
    expect(screen.getByText(errors.nombre)).toBeInTheDocument();
    expect(screen.queryByText(errors.apellido)).not.toBeInTheDocument();
  });
});
