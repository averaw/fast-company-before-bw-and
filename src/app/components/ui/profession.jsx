import { useProfessions } from "../../hooks/useProfession";
import PropTypes from "prop-types";
import React from "react";

const Profession = ({ id }) => {
    const { isLoading, getProfessions } = useProfessions();
    const prof = getProfessions(id);

    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else {
        return "loading...";
    }
};
Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
