import { Escrutinio } from './Escrutinio';
import { Total } from './Total';

export const Resumen = ({ candidatos }) => {
  return (
    <>
      <Total candidatos={candidatos} />
      <Escrutinio candidatos={candidatos} />
    </>
  );
};
