import React from "react";
import HotIssueCard from "./HotIssueCard";
import "./HotIssueList.css";

export default function HotIssueList() {
    return (
        <section className="hot_issue">
            <h3> Hot Issue Bell</h3>
            <div className="card_list">
                <HotIssueCard />
                <HotIssueCard />
                <HotIssueCard />
                <HotIssueCard />
            </div>
        </section>
    );
}
