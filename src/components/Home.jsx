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
    fontSize: '5em',
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
        <h1 style={styles.nameStyle}>{data?.name}</h1>
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
          <Link to="/censura" className="btn btn-light m-3">
            Linha do Tempo da Censura no Brasil
          </Link>
        </div>
        <div>
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
      <div>
        <p>
          <script
            async
            src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
          />
          <i className="fa-solid fa-user" />
          <span id="busuanzi_value_site_uv" />
          &nbsp;|&nbsp;
          <i className="fa-solid fa-eye" />
          <span id="busuanzi_value_site_pv" />
        </p>
      </div>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
