import React from 'react';
import Type from "./Type";

const Text = ({ prefix = '', titles = [], ...props }) => {
    if (!prefix || !titles || !titles.length) return <></>;

    return titles.map((title, titleIDX) => (
        <Type
            key={`${prefix}_${titleIDX}`}
            _type={title.type}
            {...props}
        >
            {title.text}
        </Type>
    ));
};

export default Text;
