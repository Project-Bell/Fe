import React from "react";
import HotIssueCard from "./HotIssueCard";
import "./HotIssueList.css";

export default function HotIssueList() {
    return (
        <section className="hot_issue">
            <h3> Hot Issue Bell</h3>
            <div className="card_list">
                <HotIssueCard titleData={"핫이슈 1"} />
                <HotIssueCard titleData={"핫이슈 2"} />
                <HotIssueCard titleData={"핫이슈 3"} />
                <HotIssueCard titleData={"핫이슈 4"} />
            </div>
        </section>
    );
}
