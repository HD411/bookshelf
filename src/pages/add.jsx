import React from 'react';
import Header from '../components/Header';
import BookForm from '../components/bookform';
import '../styles/generic.css';
import '../styles/style.css';

function Add() {
  return (
    <div className="page">
      <Header />
      <main>
        <h1>Add Book</h1>
        <BookForm />

        <a href="/home">Return Home</a>
      </main>
    </div>
  );
}
export default Add;
