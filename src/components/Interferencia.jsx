import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Header from './Header';
import Social from './Social';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 5,
    marginBottom: 25,
    textIndent: 25,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 25,
  },
  timelineItem: {
    marginTop: 10,
  },
  buttonItem: {
    marginTop: 20,
  },
};
function Interferencia(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.interferencia, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.artigos))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data ? (
        <div className="section-content-container">
          <Container>
            <Timeline lineColor={theme.timelineLineColor}>
              {data.map((item) => (
                <TimelineItem
                  key={item.title + item.publishDate}
                  dateText={item.publishDate}
                  dateInnerStyle={{ background: theme.accentColor }}
                  style={styles.itemStyle}
                  bodyContainerStyle={{ color: theme.color }}
                  className="dateinterferencia"
                >
                  <div className="divinterferencia">
                    <h2 className="item-title titleseguranca">
                      <a href={item.url}>
                        <i className="fa fa-link m-2 text-xs" aria-hidden="true" />
                        {item.source}
                      </a>
                    </h2>
                    <div style={styles.subtitleContainerStyle}>
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </Timeline>
          </Container>
          <Social />
          <div className="my-3">
            <img
              src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fabusofederal.vercel.app/interferencia%2F&label=deram%20ciencia&countColor=%23263759"
              alt="visitantes"
              loading="lazy"
              className="mb-3"
            />
          </div>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

Interferencia.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Interferencia;
