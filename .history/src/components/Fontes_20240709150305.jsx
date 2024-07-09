import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "../App.css";

function Fontes() {
  return (
    <>
      <div className="card-body">
        <Button
          type="button"
          className="btn btn-outline-light"
          style={{ margin: "5px" }}
        >
          GitHub
        </Button>
        <Button
          type="button"
          className="btn btn-outline-light"
          style={{ margin: "5px" }}
        >
          Live
        </Button>
      </div>
    </>
  );
}

Fontes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Fontes;
