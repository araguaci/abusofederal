/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';

import Social from './Social';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '4em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showMoreStyle: {
    margin: 25,
  },
};

function Home() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <h3 style={styles.nameStyle}>{data?.name}</h3>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>Democracia&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <div>
          <Link to="/censura" className="btn btn-light my-4 text-xs">
            Linha do Tempo da Censura no Brasil
          </Link>
        </div>
        <div className="mt-4">
          <Button
            style={styles.showMoreStyle}
            variant={theme.bsSecondaryVariant}
            onClick={() => window.open(
              'https://brasil-pela-liberdade.vercel.app/1000dias/',
              '_blank',
            )}
          >
            ✠ Resultados de 1000 dias de Governo Bolsonaro ✠
          </Button>
          <Button
            style={styles.showMoreStyle}
            variant={theme.bsSecondaryVariant}
            onClick={() => window.open(
              'https://patria-amada-brasil.vercel.app/blog/tags/impostos/',
              '_blank',
            )}
          >
            ✠ Redução de Impostos no Governo Bolsonaro ✠
          </Button>
        </div>
      </div>
      <Social />
      <div className="my-4">
        <img
          src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fabusofederal.vercel.app%2F&label=deram%20ciencia&countColor=%23263759"
          alt="visitantes"
          loading="lazy"
        />
      </div>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
