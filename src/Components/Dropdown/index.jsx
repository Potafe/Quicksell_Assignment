import './Dropdown.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ReactComponent as DisplayIcon } from "../../assets/icons_FEtask/Display.svg";
import { ReactComponent as DownIcon } from "../../assets/icons_FEtask/down.svg";

function DropdownDisplayMenu({ groupingValue, setGroupingValue, orderingValue, setOrderingValue }) {
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false);
  const dropdownMenuRef = useRef(null);

  const handleDropdownMenuOpen = useCallback(() => {
    setIsDropdownMenuVisible(true);
  }, []);

  const handleOutsideClickToClose = useCallback((event) => {
    if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
      setIsDropdownMenuVisible(false);
    }
  }, []);

  const handleGroupingChange = useCallback((e) => setGroupingValue(e.target.value), []);
  const handleOrderingChange = useCallback((e) => setOrderingValue(e.target.value), []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClickToClose);

    return () => {
      document.removeEventListener('click', handleOutsideClickToClose);
    };
  });

  return (
    <div className='dropdown-display-menu' ref={dropdownMenuRef}>
      <div className='dropdown-menu-label-container' onClick={handleDropdownMenuOpen}>
        <DisplayIcon />
        <div className='dropdown-menu-label'>Display</div>
        <DownIcon />
      </div>
      <div className={`dropdown-menu-content ${isDropdownMenuVisible && "visible"}`}>
        <div className='dropdown-menu-content-row'>
          <div className='dropdown-menu-content-label'>Grouping</div>
          <select name="grouping" id="grouping" value={groupingValue} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='dropdown-menu-content-row'>
          <div className='dropdown-menu-content-label'>Ordering</div>
          <select name="ordering" id="ordering" value={orderingValue} onChange={handleOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DropdownDisplayMenu;
