/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { Group } from 'three';
import Aj from './Model';

interface IProps {
    position: [x: number, y: number, z: number];
    playerId: string;
}

const Ajs = ({ position, playerId }: IProps) => {
    const group = useRef<Group>(null);
    const ajs = [];
    for (let i = 0; i < 1; i++) {
        ajs.push(<Aj key={'Aj' + i} playerId={playerId} />);
    }

    return (
        <group ref={group} position={position} dispose={null}>
            {ajs}
        </group>
    );
};

export default Ajs;