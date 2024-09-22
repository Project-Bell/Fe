import React from "react";
import "./HotIssueCard.css";

export default function HotIssueCard({ titleData, contentData }) {
    return (
        <div className="hotIssue_card">
            <h4>{titleData}</h4>
            <p>{contentData}</p>
        </div>
    );
}
