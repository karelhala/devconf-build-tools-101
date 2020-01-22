import React from 'react';
import { Bullseye } from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

const Demo2 = () => {
    return (
        <div>
            <Bullseye>
                <Table
                    aria-label="Simple Table"
                    cells={['First', 'Second']}
                    rows={[
                        ['First row', 'First row'],
                        ['Second row', 'Second row'],
                        ['Third row', 'Third row'],
                        ['Fourth row', 'Fourth row']
                    ]}
                >
                    <TableHeader />
                    <TableBody />
                </Table>
            </Bullseye>
        </div>
    );
};

export default Demo2;
