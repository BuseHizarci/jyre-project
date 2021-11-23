import React, {useCallback, useEffect, useState} from 'react';
import Leader from "../Leader";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ items = [] }) => {
    const [activeItem, setActiveItem] = useState(items[0]);

    const toggleActiveItem = useCallback((item) => {
        if (item && item.uniq) {
            if (item.uniq !== activeItem.uniq) setActiveItem(item);
            else setActiveItem({});
        }
    }, [activeItem]);

    useEffect(() => {
        if (activeItem && activeItem.uniq && window.location) {
            const newRoute = `${window.location.origin}#${activeItem.uniq}`
            if (window.location.href !== newRoute) window.location.href = newRoute;
        } 
    }, [activeItem])

    if (!items || !items.length) return <></>;
    return (
        <div className="shadow">
            {items.map((item, itemIDX) => (
                <AccordionItem
                    title={item.name}
                    titlesColor={item.colour}
                    isActive={item.uniq === activeItem.uniq}
                    key={item.uniq}
                    toggleActiveItem={() => toggleActiveItem(item)}
                    id={item.uniq}
                >
                    <Leader item={item} />
                </AccordionItem>
            ))}
        </div>
    );
}

