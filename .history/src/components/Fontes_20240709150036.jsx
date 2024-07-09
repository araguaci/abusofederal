import PropTypes from 'prop-types';
import '../App.css';

function Fontes() {
  return `
  <div className="card-body">
    <button type="button" className="btn btn-outline-light" style={{margin: '5px'}}>GitHub</button>
    <button type="button" className="btn btn-outline-light" style={{margin: '5px'}}>Live</button>
    </div>
  `;
}

Fontes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Fontes;
