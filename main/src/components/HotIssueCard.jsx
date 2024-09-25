import React from "react";
import "./HotIssueCard.css";
import { FaRegImage } from "react-icons/fa";

export default function HotIssueCard({ titleData, contentData }) {
    return (
        <div className="hotIssue_card">
            <h4>{titleData}</h4>
            <span className="hotIssue_gallery">
                <FaRegImage size="10px" color="#777" />
            </span>
            <p>{contentData}</p>
        </div>
    );
}
