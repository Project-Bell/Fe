import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GrayBtnStyled = styled.button`
    font-size: 1.125rem;
    text-align: center;

    width: 270px;
    height: 44px;
    background-color: #eee;
    border: none;
`;

export default function GrayBtn({ pageName, pageLink }) {
    // const nav = useNavigate();

    // function handleClick() {
    //     nav(`/${pageLink}`);
    // }

    return (
        <>
            <GrayBtnStyled type="button">{pageName}</GrayBtnStyled>
        </>
    );
}
