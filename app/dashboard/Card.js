import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="tablet:h-48 mx-auto w-[100%]  h-32 flex flex-col bg-[#282727] p-6 items-start justify-between tablet:justify-evenly shadow rounded-xl">
      <FontAwesomeIcon icon={data.icon} className="tablet:text-3xl text-lg" />
      <div className="tablet:text-md text-sm flex flex-col gap-1">
        <p>{data.total}</p>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  }).isRequired,
};

export default Card;
