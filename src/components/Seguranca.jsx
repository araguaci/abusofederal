import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Header from './Header';
import Social from './Social';
import Fontesseg from './Fontesseg';
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

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

function Seguranca(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.seguranca, {
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
                  <TimelineItem
                    key={item.title + item.dateText}
                    dateText={item.dateText}
                    dateInnerStyle={{ background: theme.accentColor }}
                    style={styles.itemStyle}
                    bodyContainerStyle={{ color: theme.color }}
                  >
                    <h2 className="item-title titleseguranca">
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
                    <ul style={styles.ulStyle} className="ulseguranca">
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
                    {item.linkUrl && (
                      <ExternalNavLink
                        key={item.linkUrl}
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn buttonColor mb-4 linkUrl"
                      >
                        <i className="fa fa-link m-2" aria-hidden="true" />
                        {item.linkText}
                      </ExternalNavLink>
                    )}
                  </TimelineItem>
                ))}
              </Timeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> }

      <Fontesseg />
      <Social />
      <div className="my-3">
        <img
          src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fabusofederal.vercel.app/seguranca%2F&label=deram%20ciencia&countColor=%23263759"
          alt="visitantes"
          loading="lazy"
          className="mb-3"
        />
      </div>
    </>
  );
}

Seguranca.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Seguranca;
