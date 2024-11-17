import './Card.css';
import ProfileIcon from '../ProfileIcon';
import { getStatusIcon, getPriorityIcon } from '../../utils/icons';
import { getPriorityLabel } from "../../utils/index"
import { ReactComponent as Dots } from '../../assets/icons_FEtask/3 dot menu.svg';

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriorityIcon }) {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <ProfileIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        {!hidePriorityIcon && (
                    <div className="priority-icon-container">
                        {getPriorityIcon(getPriorityLabel(ticket.priority))}
                    </div>
        )}
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
