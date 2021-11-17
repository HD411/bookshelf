import { FaAudible } from 'react-icons/fa';

export default function Header() {
  return (
    <Header>
      <h1>
        My Audible Bookshelf
        <a href="https://www.audible.co.uk/" class="audible">
          <FaAudible />
        </a>
      </h1>
      <a href="/">Log in / Profile</a>
      <a href="/add">Add a Book</a>
    </Header>
  );
}
