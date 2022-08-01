import React, { useContext } from 'react';
import styled from 'styled-components';
import Ptext from '../Ptext';
import MapImg from '../../assets/images/map.png';
import { LanguageContext } from '../../providers/language';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center center/cover;
  min-height: 400px;

  .container {
    position: relative;
    min-height: 400px;
  }

  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background-color: var(--deep-dark);
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
  }

  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 2.2rem;
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }

  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  } ;
`;

function Map() {
  const { language } = useContext(LanguageContext);

  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">
            {language ? 'Residência' : "I'm Here"}
          </h3>
          <Ptext>Curitiba, Paraná, {language ? 'Brasil' : 'Brazil'}</Ptext>
          <a
            href="https://www.google.com/maps/place/Rua+Loth%C3%A1rio+Boutin+-+Pinheirinho,+Curitiba+-+PR,+81110-522/@-25.47687,-49.2908208,13.25z/data=!4m5!3m4!1s0x94dcfca4f6d5163d:0xfc7d1570cb6284eb!8m2!3d-25.5099522!4d-49.291291"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in google maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}

export default Map;
