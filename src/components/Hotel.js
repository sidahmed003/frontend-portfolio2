import React from 'react';
import './Hotel.css';
import MERN from "./1744333924882.jpeg"
import MainPage1 from './MainPage1.png';
import MainPage2 from "./MainPage2.png";
import adminpage from "./1744502856946.jpg";
import FilterSearch from "./FilterSearch.jpg";
import SpecialHotel from "./SpecialHotel.jpg";
import Booking from "./Booking.jpg";
import usersPage from "./1744333924936.jpg";
import hotelPage from "./1744333924949.jpg";
import newModify from "./newModify.jpg";

const Hotel = () => {
  return (
    <>
    <div className="hotel-page">
      {/* Barre de navigation */}
      <nav className="navbar">
        <div className="logo">Hotel Reservation (MERN Stack)</div>
      </nav>

      {/* Section principale */}
      <main className="container">
        <article className="post">
          <img src={MERN} alt="Image d'article" />
          <h2>MERN Stack</h2>
          <p>MongoDB Database Express & React Framework NodeJS Environment</p>
        </article>

        <article className="post">
          <img src={MainPage1} alt="Image d'article" />
          <h2>La révolution numérique</h2>
          <p>À l'ère du numérique, les innovations transforment notre quotidien. Découvrez comment la technologie façonne l'avenir.</p>
        </article>

        <article className="post">
          <img src={MainPage2} alt="Image d'article" />
          <h2>Voyager pour s'enrichir</h2>
          <p>Explorer le monde élargit nos horizons. Chaque voyage est une aventure qui nous transforme profondément.</p>
        </article>

        <article className="post">
          <img src={FilterSearch} alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
        </article>

        <article className="post">
          <img src={SpecialHotel} alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
        </article>
        <article className="post">
          <img src={Booking} alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
        </article>
        <article className="post">
          <img src={adminpage} alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
        </article>
        <article className="post">
          <img src={usersPage} alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
        </article>
        <article className="post">
          <img src={hotelPage} alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
        </article>
        <article className="post">
          <img src={newModify} alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
        </article>
      </main>

      {/* Pied de page */}
      <footer className="footer">
        <p>&copy; 2025 Mon Blog Rouge & Blanc - Tous droits réservés.</p>
      </footer>
      </div>
    </>
  );
};

export default Hotel;
