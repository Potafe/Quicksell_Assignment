import React from 'react';
import './ProfileIcon.css';

function ProfileIcon({ name, available }) {
    const text = React.useMemo(() => {
        return name.split(" ").map((item) => item[0]).join("");
    }, [name]);

    return (
        <div className='profileicon-container'>
            <div className='profileicon-text'>{text}</div>
            <div className={`profile-status ${available && "available"}`}></div>
        </div>
    );
}

export default ProfileIcon;
