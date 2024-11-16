import './Header.css';
import DropdownDisplayMenu from '../Dropdown/index';

function DropdownHeader({ grouping, setGrouping, ordering, setOrdering }) {
    return (
        <header>
            <DropdownDisplayMenu grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
        </header>
    );
}

export default DropdownHeader;
