import React from 'react';
import './Hotel.css';

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
          <img src="https://source.unsplash.com/600x400/?nature" alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
          <a href="#" className="read-more">Lire plus</a>
        </article>

        <article className="post">
          <img src="https://source.unsplash.com/600x400/?technology" alt="Image d'article" />
          <h2>La révolution numérique</h2>
          <p>À l'ère du numérique, les innovations transforment notre quotidien. Découvrez comment la technologie façonne l'avenir.</p>
          <a href="#" className="read-more">Lire plus</a>
        </article>

        <article className="post">
          <img src="https://source.unsplash.com/600x400/?travel" alt="Image d'article" />
          <h2>Voyager pour s'enrichir</h2>
          <p>Explorer le monde élargit nos horizons. Chaque voyage est une aventure qui nous transforme profondément.</p>
          <a href="#" className="read-more">Lire plus</a>
        </article>
        <article className="post">
          <img src="https://source.unsplash.com/600x400/?nature" alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
          <a href="#" className="read-more">Lire plus</a>
        </article>
        <article className="post">
          <img src="https://source.unsplash.com/600x400/?nature" alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
          <a href="#" className="read-more">Lire plus</a>
        </article>
        <article className="post">
          <img src="https://source.unsplash.com/600x400/?nature" alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
          <a href="#" className="read-more">Lire plus</a>
        </article>
        <article className="post">
          <img src="https://source.unsplash.com/600x400/?nature" alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
          <a href="#" className="read-more">Lire plus</a>
        </article>
        <article className="post">
          <img src="https://source.unsplash.com/600x400/?nature" alt="Image d'article" />
          <h2>Les merveilles de la nature</h2>
          <p>La nature est une source infinie d'inspiration et de beauté. Chaque paysage raconte une histoire unique, où le temps semble suspendu.</p>
          <a href="#" className="read-more">Lire plus</a>
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
