import React from 'react';
import PortfolioItem from './PortfolioItem';
import { PortfolioListWrap } from './PortfolioListStyle';

const PortfolioList = () => {
    return (
        <PortfolioListWrap>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </PortfolioListWrap>
    );
};

export default PortfolioList;