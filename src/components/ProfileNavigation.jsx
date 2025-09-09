import React from 'react';
import './ProfileNavigation.css';

function ProfileNavigation() {
  return (
    <nav className="profile-navigation">
      <ul className="nav-links">
        <li><a href="#" className="active">Posts</a></li>
        <li><a href="#">Photos</a></li>
        <li><a href="#">Reels <i className="fas fa-caret-down"></i></a></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-action-button"><i className="fas fa-ellipsis-h"></i></button>
      </div>
    </nav>
  );
}

export default ProfileNavigation;