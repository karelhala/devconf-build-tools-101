import React from 'react';
import { Button, Bullseye } from '@patternfly/react-core';
import { ReactIcon } from '@patternfly/react-icons';

const Demo1 = () => {
    return (
        <Bullseye>
            <Button>This is just a button</Button>
            <ReactIcon />
        </Bullseye>
    );
};

export default Demo1;
