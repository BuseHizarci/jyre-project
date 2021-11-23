import React from 'react';
import Text from "../Text";

export const LeaderDescription = ({ desc, itemUniq }) => {
    if (!desc || !desc.length || !itemUniq) return <></>;

    return (
        <div className="">
            <Text
                prefix={`accordion_${itemUniq}_desc`}
                titles={desc}
            />
        </div>
    );
}
