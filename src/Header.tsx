import React from 'react';

//AS ITS refernece wont change later in program so we kept it const.
export const Header = () => (
  <div>
    <a href="./">Q & A</a>
    <input type="text" placeholder="Search..." />
    <a href="./signin">
      <span>Sign In</span>
    </a>
  </div>
);
