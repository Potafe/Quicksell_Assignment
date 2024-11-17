import { useMemo } from 'react';
import Card from '../Card';
import "./KanbanColumn.css";
import { ReactComponent as Add } from '../../assets/icons_FEtask/add.svg';
import { getPriorityIcon, getStatusIcon } from '../../utils/icons';
import ProfileIcon from '../ProfileIcon';
import { ReactComponent as Dots } from '../../assets/icons_FEtask/3 dot menu.svg';

function Column({ tickets, grouping, groupBy, UserMapping }) {

    const title = useMemo(() => {
        if (grouping === "status")
            return groupBy;
        if (grouping === "priority")
            return groupBy;
        if (grouping === "user")
            return UserMapping[groupBy].name;
    }, [grouping, groupBy]);

    const icon = useMemo(() => {
        if (grouping === "status")
            return getStatusIcon(groupBy);
        if (grouping === "priority")
            return getPriorityIcon(groupBy);
        if (grouping === "user")
            return <ProfileIcon name={UserMapping[groupBy].name} available={UserMapping[groupBy].available} />;
    }, [grouping, groupBy]);

    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <Add />
                    <Dots />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket) => (
                    <Card 
                        key={ticket.id} 
                        ticket={ticket} 
                        userData={UserMapping[ticket.userId]} 
                        hideStatusIcon={grouping === "status"} 
                        hideProfileIcon={grouping === "user"} 
                        hidePriorityIcon={grouping === "priority"}
                    />
                ))}
            </div>
        </div>
    );
}

export default Column;
