import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as Three from 'three';

import { useConfigurator } from '../contexts/configurator';

const ANIM_SPEED = 12;

export function Table(props) {
  const { nodes, materials } = useGLTF('./models/compressed.glb');
  const { legs, legsColor, tableWidth, top } = useConfigurator();

  const plate = useRef();
  const leftLegs = useRef();
  const rightLegs = useRef();

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
  }, [legsColor]);

  useFrame((_state, delta) => {
    const tableWidthScale = tableWidth / 100;

    const targetScale = new Three.Vector3(tableWidthScale, 1, 1);
    plate.current.scale.lerp(targetScale, delta * ANIM_SPEED);

    const targetLeftPosition = new Three.Vector3(-1.5 * tableWidthScale, 0, 0);
    leftLegs.current.position.lerp(targetLeftPosition, delta * ANIM_SPEED);

    const targetRightPosition = new Three.Vector3(1.5 * tableWidthScale, 0, 0);
    rightLegs.current.position.lerp(targetRightPosition, delta * ANIM_SPEED);
  });

  const material = materials[`${top}`] || materials.Antique;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.TableTop.geometry} material={material} ref={plate} />
      {legs === 0 && (
        <>
          <mesh castShadow geometry={nodes.Legs01Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} ref={leftLegs} />
          <mesh castShadow geometry={nodes.Legs01Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} ref={rightLegs} />
        </>
      )}
      {legs === 1 && (
        <>
          <mesh castShadow geometry={nodes.Legs02Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} ref={leftLegs} />
          <mesh castShadow geometry={nodes.Legs02Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} ref={rightLegs} />
        </>
      )}
      {legs === 2 && (
        <>
          <mesh castShadow geometry={nodes.Legs03Left.geometry} material={materials.Metal} position={[-1.5, 0, 0]} ref={leftLegs} />
          <mesh castShadow geometry={nodes.Legs03Right.geometry} material={materials.Metal} position={[1.5, 0, 0]} ref={rightLegs} />
        </>
      )}
    </group>
  );
}

useGLTF.preload('./models/Table.gltf');
