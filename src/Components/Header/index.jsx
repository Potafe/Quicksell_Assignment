import './Header.css';
import DropdownDisplayMenu from '../Dropdown/index';

function DropdownHeader({ grouping, setGroupingValue, ordering, setOrderingValue }) {
    return (
        <header>
            <DropdownDisplayMenu grouping={grouping} setGroupingValue={setGroupingValue} ordering={ordering} setOrderingValue={setOrderingValue} />
        </header>
    );
}

export default DropdownHeader;
