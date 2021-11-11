import { FaAudible } from 'react-icons/fa';

export default function Header() {
  // console.log("🚀 ~ file: Header.js ~ line 45 ~ Header ~ isAuthenticated", isAuthenticated)
  // console.log('user', user);
  return (
    <Header>
      <h1>
        My Audible Bookshelf{' '}
        <a href="https://www.audible.co.uk/" class="audible">
          <FaAudible />
        </a>
      </h1>
      <a href="/">Log in / Profile</a>
      <a href="/">Add a Book</a>
    </Header>
  );
}
