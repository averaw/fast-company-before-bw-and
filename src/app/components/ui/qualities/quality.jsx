import React from "react";
import PropTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Quality = ({ id }) => {
    const { name, color } = useQualities().getQuality(id);
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};
Quality.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
};

export default Quality;
