import React from "react";
import styled from "styled-components";

export default function LiveBellTop8({ topTopic }) {
    const LiveBellTop8 = styled.button`
        color: #fff;
        font-size: 26px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        width: 135px;
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

    return <LiveBellTop8 type="button">{topTopic}</LiveBellTop8>;
}
