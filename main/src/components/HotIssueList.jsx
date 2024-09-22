import React from "react";
import HotIssueCard from "./HotIssueCard";
import "./HotIssueList.css";

const mokdata =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis beatae aut id distinctio dolore, architecto commodi quod non corporis alias ullam hic molestiae impedit dicta fuga. Adipisci, consequatur molestiae.";

export default function HotIssueList() {
    return (
        <section className="hot_issue">
            <h3> Hot Issue Bell</h3>
            <div className="card_list">
                <HotIssueCard titleData={"핫이슈 1"} contentData={mokdata} />
                <HotIssueCard titleData={"핫이슈 2"} contentData={mokdata} />
                <HotIssueCard titleData={"핫이슈 3"} contentData={mokdata} />
                <HotIssueCard titleData={"핫이슈 4"} contentData={mokdata} />
            </div>
        </section>
    );
}
