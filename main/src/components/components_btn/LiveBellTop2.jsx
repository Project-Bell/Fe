import React from "react";
import styled from "styled-components";

export default function LiveBellTop2({ topTopic }) {
    const LiveBellTop2 = styled.button`
        font-size: 28px;
        font-weight: 700;
        text-align: center;

        width: 270px;
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

    return <LiveBellTop2 type="button">{topTopic}</LiveBellTop2>;
}
