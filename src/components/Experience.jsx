import { OrbitControls, Stage } from '@react-three/drei';
import { Table } from './Table';
import { useConfigurator } from '../contexts/configurator';

export const Experience = () => {
  const { legs } = useConfigurator();
  return (
    <>
      <Stage intensity={0} environment='studio' shadows={{ type: 'accumulative', color: '#e0c3fc', colorBlend: 3, opacity: 1 }} adjustCamera={2}>
        <Table />
      </Stage>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </>
  );
};
