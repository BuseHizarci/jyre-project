import React from 'react';
import {
    LeaderDescription, LeaderExemplar,
    LeaderImage, LeaderQuote,
} from "../components/Leader";

const Leader = ({ item }) => {
    return (
        <>
            <LeaderImage {...(item?.exemplar_image || {})} />
            <LeaderQuote str={item?.quote} />
            <LeaderExemplar  str={item?.exemplar} />
            <LeaderDescription class="text-9xl"
                itemUniq={item.uniq}
                desc={item?.description}
            />
        </>
    );
}

export default Leader;
