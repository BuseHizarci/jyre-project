import React from 'react';
import AngleDown from "../../assets/svg/icons/AngleDown";
import AngleUp from "../../assets/svg/icons/AngleUp";
import Text from "../../components/Text";

export const AccordionItem = (props) => {
    const {
        title: titles,
        isActive = false,
        children,
        toggleActiveItem,
        titlesColor,
        id,
    } = props;

    let iconParentCNVar = 'border-gray-300 bg-white text-black';
    if (isActive) iconParentCNVar = `${!titlesColor ? 'border-indigo-600 bg-indigo-600 ' : ''}text-white`;

    let iconParentStyleVar = {};
    if (isActive && titlesColor) iconParentStyleVar.backgroundColor = iconParentStyleVar.borderColor = titlesColor;

    return (
        <div className="border-b" id={id}>
            <div className="border-l-2 border-transparent">
                <header
                    aria-hidden="true"
                    className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"
                    onClick={toggleActiveItem}
                >
                    <div style={{ color: titlesColor }}>
                        <Text
                            titles={titles}
                            prefix="accordion_head"
                            className="capitalize text-grey-darkest text-xl"
                        />
                    </div>
                    <div
                        className={`rounded-full w-6 h-6 flex items-center justify-center border ${iconParentCNVar}`}
                        style={iconParentStyleVar}
                    >
                        {isActive ? <AngleUp /> : <AngleDown />}
                    </div>
                </header>
                {Boolean(isActive && children) && (
                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

