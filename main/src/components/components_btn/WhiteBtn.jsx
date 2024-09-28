import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WhiteBtnStyled = styled.button`
    font-size: 1.125rem;
    text-align: left;

    width: 270px;
    height: 50px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding-left: 50px;
`;

export default function WhiteBtn({ pageName, pageIcon }) {
    return (
        <>
            <WhiteBtnStyled type="button">
                <span>{pageIcon}</span>
                {pageName}
            </WhiteBtnStyled>
        </>
    );
}
