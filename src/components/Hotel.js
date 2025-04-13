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
        <div className="logo">Booking App Clone</div>
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
          <h2>Page Principale 1</h2>
          <p>Options de Recherche : Ville, Periode de séjour, Nombre de personnes.</p>
        </article>

        <article className="post">
          <img src={MainPage2} alt="Image d'article" />
          <h2>Page Principal 2</h2>
          <p>Hotel Disponibles selon la ville.</p>
        </article>

        <article className="post">
          <img src={FilterSearch} alt="Image d'article" />
          <h2>Selection de l'hotel</h2>
          <p>Selection de l'hotel qui convient au client selon le prix et autres parametres.</p>
        </article>

        <article className="post">
          <img src={SpecialHotel} alt="Image d'article" />
          <h2>Données de l'hotel selectionné</h2>
          <p>Images attractives de suites et de chambres a reserver</p>
        </article>
        <article className="post">
          <img src={Booking} alt="Image d'article" />
          <h2>Onglet de Reservation selon disponibilité</h2>
          <p>Les cases des chambres non disponibles ne sont pas activées</p>
        </article>
        <article className="post">
          <img src={adminpage} alt="Image d'article" />
          <h2>Espace Adimistrateurs</h2>
          <p>Espace dans lequel les administrateurs du site web assurent la gestion des utilisateurs, des hotels ainsi que des chambres.</p>
        </article>
        <article className="post">
          <img src={usersPage} alt="Image d'article" />
          <h2>Gestion des utilisateurs</h2>
          <p>Gestion des utilisateurs : Ajouter, modifier les données ou supprimer un utilisateur.</p>
        </article>
        <article className="post">
          <img src={hotelPage} alt="Image d'article" />
          <h2>Gestion des hotels</h2>
          <p>Gestion des hotels : Ajouter, modifier les données ou supprimer un hotel.</p>
        </article>
        <article className="post">
          <img src={newModify} alt="Image d'article" />
          <h2>Modification de données & Insertion</h2>
          <p>Interface similaire pour la modification ou bien l'insertion d'un nouvel utilisateur.</p>
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
