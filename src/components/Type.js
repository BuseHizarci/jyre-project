import {
    createElement,
    isValidElement,
} from 'react';

const types = {
    // heading1, heading2, heading3, heading4, heading5, heading6
    'heading1': {
        el: 'h1',
        className: 'text-4xl py-3',
    },
    'heading2': {
        el: 'h2',
        className: 'text-3xl py-3 mt-2 text-coolGray-900',
    },
    'heading3': {
        el: 'h3',
        className: 'text-2xl py-3 mt-2 ',
    },
    'heading4': {
        el: 'h4',
        className: ' font-sans text-xl py-3 mt-2 text-coolGray-900',
    },
    'heading5': {
        el: 'h5',
        className: 'text-lg py-3 mt-2 ',
    },
    'heading6': {
        el: 'h6',
        className: 'text-sm py-3 mt-2 ',
    },

    // paragraph
    'paragraph': {
        el: 'p',
        className: 'text-xs my-2 text-coolGray-900',
    },

    // list-item
    'list-item': {
        
        el: 'p',
        className: 'text-xs py-2 ml-4 ',
    },
};

const Type = ({ _type = 'heading1', ...props }) => {
    if (!_type || typeof types[_type] === 'undefined') return <></>;

    const selectedType = types[_type];
    const el = createElement(selectedType.el, {
        ...props,
        className: `${props?.className?.trim() || ''}${props?.className?.trim() ? ' ' : ''}${selectedType?.className?.trim() || ''}`,
    });

    if (!isValidElement(el)) return <></>;
    return el;
};

export default Type;
