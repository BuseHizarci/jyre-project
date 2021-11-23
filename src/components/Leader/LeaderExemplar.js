import React from 'react';

export const LeaderExemplar = ({ str }) => str ? (
    <div className="pb-1 text-sm" >
        <p>{str}</p>
    </div>
) : <></>;

