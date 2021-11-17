import React from 'react';
import { FaAudible } from 'react-icons/fa';

function Header() {
  return (
    <>
      <h1>
        My Audible Bookshelf
        <a href="https://www.audible.co.uk/" class="audible">
          <FaAudible />
        </a>
      </h1>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/add">Add a Book</a>
        </li>
      </ul>
    </>
  );
}
export default Header;
