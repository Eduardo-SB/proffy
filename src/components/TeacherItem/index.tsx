import React from 'react';

import './style.css';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

export default function TeacherItem(){
  return (
    <article className="teacher-item">
      <header>

        <img
          src="https://avatars0.githubusercontent.com/u/44183908?s=460&u=0ff8d5127211c4a5cf65f979d0eb947552bd33b0&v=4"
          alt="Eduardo Brandão" />
        <div>
          <strong>Eduardo Brandão</strong>
          <span>Matematica</span>
        </div>
      </header>

      <p>
        Apaixonado por tecnlogia
        <br />
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="whatsapp icon" />
          Entrar em contat
        </button>
      </footer>
    </article>
  )
}