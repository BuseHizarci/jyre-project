import React from 'react';

export const LeaderImage = ({ url = '', alt }) => url ? (
    <div className="block w-full mb-2">
        <img
            className="w-48"
            src={url}
            alt={alt}
        />
    </div>
): <></>;

