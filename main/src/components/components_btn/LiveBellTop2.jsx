import React from "react";
import styled from "styled-components";

const LiveBell2 = styled.button`
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    text-align: center;

    width: 272px;
    height: 135px;
    border: none;
    border-radius: 10px;
    background-image: url("https://picsum.photos/seed/picsum/536/354");
    background-size: cover;

    position: relative;
    isolation: isolate;

    &::after {
        content: "";
        position: absolute;
        background: black;
        z-index: -1;
        inset: 0;
        opacity: 0.8;
        border-radius: 10px;
    }
`;
export default function LiveBellTop2({ topTopic }) {
    return <LiveBell2 type="button">{topTopic}</LiveBell2>;
}
