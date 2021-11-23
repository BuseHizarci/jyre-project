import React from 'react';

export const LeaderQuote = ({ str }) => str ? (
    <div className=" italic pb-1 text-sm">
        <p>{str}</p>
    </div>
): <></>;

