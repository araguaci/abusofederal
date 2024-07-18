import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal';
import Header from './Header';
import Fontes from './Fontes';
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
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Censura(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.censura, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data
        ? (
          <div className="section-content-container">
            <Container>
              <Timeline
                lineColor={theme.timelineLineColor}
              >
                {data.map((item) => (
                  <Fade>
                    <TimelineItem
                      key={item.title + item.dateText}
                      dateText={item.dateText}
                      dateInnerStyle={{ background: theme.accentColor }}
                      style={styles.itemStyle}
                      bodyContainerStyle={{ color: theme.color }}
                    >
                      <h2 className="item-title">
                        {item.title}
                      </h2>
                      <div style={styles.subtitleContainerStyle}>
                        <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                          {item.subtitle}
                        </h4>
                        {item.workType && (
                        <h5 style={styles.inlineChild}>
                    &nbsp;·
                          {' '}
                          {item.workType}
                        </h5>
                        )}
                      </div>
                      <ul style={styles.ulStyle}>
                        {item.workDescription.map((point) => (
                          <div key={point}>
                            <li>
                              <ReactMarkdown
                                children={point}
                                components={{
                                  p: 'span',
                                }}
                              />
                            </li>
                            <br />
                          </div>
                        ))}
                      </ul>
                    </TimelineItem>
                  </Fade>
                ))}
              </Timeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> }

      <Fontes />
      <div>
        <img
          src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fabusofederal.vercel.app%2F&label=deram%20ciencia&countColor=%23263759"
          alt="visitantes"
          loading="lazy"
        />
      </div>
      <Social />

    </>
  );
}

Censura.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Censura;
