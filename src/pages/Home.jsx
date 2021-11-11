import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/generic.css';
import '../styles/style.css';

function Home() {
  return (
    <div className="page">
      <Header />
      <Nav />
      <main>
        <div className="Iconic" id="Iconic">
          <h2>Iconic</h2>
          <img
            src="https://m.media-amazon.com/images/I/51f3UPrSPSL._SL500_.jpg"
            alt="Dune"
          />
          <img
            src="https://m.media-amazon.com/images/I/51ZeCBpO33L._SL500_.jpg"
            alt="Lovecraft"
          />
        </div>

        <div className="Classics" id="Classics">
          <h2>Classics</h2>
          <img
            src="https://m.media-amazon.com/images/I/518YSe5oa+L._SL500_.jpg"
            alt="The Aeneid"
          />
          <img
            src="https://m.media-amazon.com/images/I/51yoM73vtxL._SL500_.jpg"
            alt="Mythos"
          />
          <img
            src="https://m.media-amazon.com/images/I/61kZeEDoxTL._SL500_.jpg"
            alt="Circe"
          />
        </div>

        <div className="French" id="French">
          <h2>Jonathan French</h2>
          <img
            src="https://m.media-amazon.com/images/I/51X0SHQBYVL._SL500_.jpg"
            alt="The Grey Bastards"
          />
          <img
            src="https://m.media-amazon.com/images/I/51SPdBA6aVL._SL500_.jpg"
            alt="The True Bastards"
          />
        </div>

        <div className="Brennan" id="Brennan">
          <h2>Marie Brennan</h2>
          <img
            src="https://m.media-amazon.com/images/I/51Ohz2-VDPS._SL500_.jpg"
            alt="A Natural History of Dragons"
          />
          <img
            src="https://m.media-amazon.com/images/I/6167WH39AKL._SL500_.jpg"
            alt="Voyage of the Basilisk"
          />
        </div>

        <div className="Eames" id="Eames">
          <h2>Nicholas Eames</h2>
          <img
            src="https://m.media-amazon.com/images/I/616eLJBF3UL._SL500_.jpg"
            alt="Kings of the Wyld"
          />
          <img
            src="https://m.media-amazon.com/images/I/51v5fiWwRLL._SL500_.jpg"
            alt="Bloody Rose"
          />
        </div>

        <div className="Lynch" id="Lynch">
          <h2>Scott Lynch</h2>
          <img
            src="https://m.media-amazon.com/images/I/51P9H55jCML._SL500_.jpg"
            alt="Lies of Locke Lamora"
          />
          <img
            src="https://m.media-amazon.com/images/I/61qe8c2hCHL._SL500_.jpg"
            alt="Red Seas Under Red Skies"
          />
          <img
            src="https://m.media-amazon.com/images/I/51dw8z6biyL._SL500_.jpg"
            alt="Reoublic of Thieves"
          />
        </div>

        <div className="Abercrombie" id="Abercrombie">
          <h2>Joe Abercrombie</h2>

          <img
            src="https://m.media-amazon.com/images/I/51aSZ+0kJRL._SL500_.jpg"
            alt="The Blade Itself"
          />
          <img
            src="https://m.media-amazon.com/images/I/51o7IDcrz6L._SL500_.jpg"
            alt="Before They Are Hanged"
          />
          <img
            src="https://m.media-amazon.com/images/I/51++pLVQyJL._SL500_.jpg"
            alt="Last Argument of Kings"
          />
          <img
            src="https://m.media-amazon.com/images/I/614qHI+Tm5L._SL500_.jpg"
            alt="Red Country"
          />
          <img
            src="https://m.media-amazon.com/images/I/61ve0HXLNAL._SL500_.jpg"
            alt="The Heroes"
          />
          <img
            src="https://m.media-amazon.com/images/I/51hHwfFgvRL._SL500_.jpg"
            alt="Best Served Cold"
          />
          <img
            src="https://m.media-amazon.com/images/I/51cPTVCpleL._SL500_.jpg"
            alt="A Little Hatred"
          />
          <img
            src="https://m.media-amazon.com/images/I/513zLZWi6kL._SL500_.jpg"
            alt="The Trouble With Peace"
          />
          <img
            src="https://m.media-amazon.com/images/I/510n-BPJbML._SL500_.jpg"
            alt="Half a King"
          />
        </div>

        <div className="Sanderson" id="Sanderson">
          <h2>Brandon Sanderson</h2>
          <img
            src="https://m.media-amazon.com/images/I/51enuMIcgKL._SL500_.jpg"
            alt="The way of Kings"
          />
          <img
            src="https://m.media-amazon.com/images/I/51KazffyzQL._SL500_.jpg"
            alt="Words of Radiance"
          />
          <img
            src="https://m.media-amazon.com/images/I/51Nd6TO8kpL._SL500_.jpg"
            alt="Oathbringer"
          />
          <img
            src="https://m.media-amazon.com/images/I/51+UZQpxu3L._SL500_.jpg"
            alt="Rythem of War"
          />
        </div>
        <div className="Bardugo" id="Bardugo">
          <h2>Leigh Bardugo</h2>
          <img
            src="https://m.media-amazon.com/images/I/51LA8pT6haL._SL500_.jpg"
            alt="Crooked Kingdom"
          />
          <img
            src="https://m.media-amazon.com/images/I/61tuZtK6xoL._SL500_.jpg"
            alt="Six of Crows"
          />
        </div>
        <div className="Black-libary" id="Black-libary">
          <h2>Black Libary</h2>
          <img
            src="https://m.media-amazon.com/images/I/51ythx5SFkL._SL500_.jpg"
            alt="Nagash: The Undying King"
          />
          <img
            src="https://m.media-amazon.com/images/I/51dqvBz9JzL._SL500_.jpg"
            alt="Neferata: The Dominion of Bones"
          />
        </div>
        <div className="Other" id="Other">
          <h2>Other</h2>
          <img
            src="https://m.media-amazon.com/images/I/51A6NcV3IML._SL500_.jpg"
            alt="Spellmonger"
          />
          <img
            src="https://m.media-amazon.com/images/I/61u5ma0rBDL._SL500_.jpg"
            alt="The Fith Season"
          />
          <img
            src="https://m.media-amazon.com/images/I/61s7JSY0h2L._SL500_.jpg"
            alt="Jade City"
          />
          <img
            src="https://m.media-amazon.com/images/I/51wyuvr488L._SL500_.jpg"
            alt="The Night Circus"
          />
          <img
            src="https://m.media-amazon.com/images/I/51ztnn9LZvL._SL500_.jpg"
            alt="Parinesi"
          />
          <img
            src="https://m.media-amazon.com/images/I/61gyl4gm-PL._SL500_.jpg"
            alt="The Invisible Life of Addie LaRue"
          />
          <img
            src="https://m.media-amazon.com/images/I/51OryKMtL7L._SL500_.jpg"
            alt="Shadow of the Conqueror"
          />
          <img
            src="https://m.media-amazon.com/images/I/51HN2rdaE3L._SL500_.jpg"
            alt="The Red Knight"
          />
          <img
            src="https://m.media-amazon.com/images/I/612T2iYleeL._SL500_.jpg"
            alt="The Ninth Rain"
          />
          <img
            src="https://m.media-amazon.com/images/I/61Ywd1BZE1L._SL500_.jpg"
            alt="The Name of the Wind"
          />
          <img
            src="https://m.media-amazon.com/images/I/51iUunddQ3L._SL500_.jpg"
            alt="The Society of the Sword"
          />
          <img
            src="https://m.media-amazon.com/images/I/51PgHw8cdZL._SL500_.jpg"
            alt="The Dying of the Light"
          />
          <img
            src="https://m.media-amazon.com/images/I/51Evn6el1HL._SL500_.jpg"
            alt="The Shadow of the Gods"
          />
        </div>
        <div className="Not-Started" id="Not-Started">
          <h2>Not Started</h2>
          <img
            src="https://m.media-amazon.com/images/I/51f1IKkwENS._SL500_.jpg"
            alt="Dragon's Blade Trilogy"
          />
        </div>
        <div className="Unfinished" id="Unfinished">
          <h2>Unfinished</h2>
          <img
            src="https://m.media-amazon.com/images/I/61iY0pcXURL._SL500_.jpg"
            alt="The Ruin of Kings"
          />
          <img
            src="https://m.media-amazon.com/images/I/51014jXuNxL._SL500_.jpg"
            alt="The Rage of Dragons"
          />
          <img
            src="https://m.media-amazon.com/images/I/51lnC6CoMkL._SL500_.jpg"
            alt="Rise of the Ranger"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
