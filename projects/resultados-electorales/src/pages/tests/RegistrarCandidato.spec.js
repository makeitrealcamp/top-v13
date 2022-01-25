import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../utils/testUtils';
import { RegistrarCandidato } from '../RegistrarCandidato';

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
    expect(
      screen.getByText('Propuestas no puede ser vacío')
    ).toBeInTheDocument();
    expect(screen.getByText('Nombre no puede ser vacío')).toBeInTheDocument();
    expect(screen.getByText('Apellido no puede ser vacío')).toBeInTheDocument();
  });

  fit('should return an error if name is empty', () => {
    render(<RegistrarCandidato />);
    const apellidoInput = screen.getByRole('textbox', {
      name: /apellido/i,
    });

    userEvent.type(apellidoInput, 'sosa');
    screen.debug(apellidoInput);
  });
});
