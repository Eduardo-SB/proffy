import React from 'react';

import './styles.css'

import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import LandingIMG from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

export default function Landing(){
  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="logo proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={LandingIMG} alt="" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="study"/>
            Estudar
          </Link>
          
          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="study"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-conections">
          Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="purple heart"/>
        </span>
      </div>
    </div>
  );
}