import React, {useCallback, useEffect, useState} from 'react';
import { Accordion } from "./Accordion";
import Text from "../components/Text";
import axios from "axios";

const Leaders = () => {
    const [data, setData] = useState({});
    const [status, setStatus] = useState('loading'); // loading, error, ok

    useEffect(() => {
        axios
            .get(
                'https://jyre-engineering-recruitment.cdn.prismic.io/api/v2/documents/search?ref=YZfPZBIAACwAxBNJ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZfDNxIAACkAw9oa%22%29+%5D%5D',
            )
            .then(({ data: response }) => {
                setData(response.results[0].data);
                setStatus('ok');
            })
            .catch((err) => {
                console.error(err);
                setStatus('error');
                setData({});
            });
    }, []);

    const getAccordionData = useCallback(() => (
        data?.types?.map((leaderType, leaderTypeIDX) => ({
            uniq: `leader_type_${leaderTypeIDX}`,
            ...leaderType,
        }))
    ), [data]);

    if (status === 'loading') return <></>;
    if (status === 'error') return <></>;

    return (
        <div>
            {/* Titles */}
            <Text
                titles={data?.titles}
                prefix="main_title"
            />

            {/* Leader Types */}
            <Accordion items={getAccordionData()} />
        </div>
    );
};

export default Leaders;
