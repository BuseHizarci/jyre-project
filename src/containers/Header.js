import React from 'react';
import Logo from "../assets/svg/Logo";
import XContainer from "./XContainer";

const Header = () => (
    <div className="flex items-center border-gray-100 border-b-2 w-full box-border py-6">
        <XContainer>
            <Logo />
        </XContainer>
    </div>
);

export default Header;
