import React, { useMemo } from 'react';
import './KanbanGrid.css';
import Column from '../KanbanColumn';

function Grid({ gridData, grouping, UserMapping }) {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => <Column key={k} tickets={gridData[k]} grouping={grouping} groupBy={k} UserMapping={UserMapping} />)}
        </div>
    );
}

export default Grid;
