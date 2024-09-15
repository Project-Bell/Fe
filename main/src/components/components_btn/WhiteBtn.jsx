import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WhiteBtnStyled = styled.button`
    font-size: 1.125rem;
    text-align: center;

    width: 270px;
    height: 50px;
    border: 1px solid #eee;
    border-radius: 10px;
`;

export default function WhiteBtn({ pageName, pageLink }) {
    // const nav = useNavigate();

    // function handleClick() {
    //     nav(`/${pageLink}`);
    // }

    return (
        <>
            <WhiteBtnStyled type="button">{pageName}</WhiteBtnStyled>
        </>
    );
}
