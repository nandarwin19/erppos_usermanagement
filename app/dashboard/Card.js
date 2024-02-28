import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="h-48 flex flex-col bg-[#282727] p-6 items-start justify-evenly shadow rounded-xl">
      <FontAwesomeIcon icon={data.icon} className="text-3xl " />
      <p>{data.total}</p>
      <p>{data.content}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
