import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/testUtils';
import { Candidatos } from '../Candidatos';

describe('Candidatos', () => {
  it('should update the votes', () => {
    render(<Candidatos />);

    const votarPorPacoBtn = screen.getByRole('button', {
      name: /votar por paco/i,
    });

    fireEvent.click(votarPorPacoBtn);
    fireEvent.click(votarPorPacoBtn);
    fireEvent.click(votarPorPacoBtn);
    fireEvent.click(votarPorPacoBtn);

    expect(screen.getByTestId('votosDePaco')).toHaveTextContent(
      'Votos actuales: 4'
    );
  });
});
