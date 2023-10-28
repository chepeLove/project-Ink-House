import React from 'react';
import {Hero} from "./sections/hero/Hero";
import {Reproductions} from "./sections/reproductions/Reproductions";
import {Promo} from "./sections/promo/Promo";

export const Main = () => {
    return (
        <main>
            <Hero/>
            <Reproductions/>
            <Promo/>
        </main>
    );
};
