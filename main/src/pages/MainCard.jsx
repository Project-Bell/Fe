import React from "react";
import Header from "../components/Header";
import "./MainCard.css";
import CreateCard from "../components/CreateCard";
import HotIssueList from "../components/HotIssueList";
import NewPostList from "../components/NewPostList";

export default function MainCard() {
    return (
        <main className="main_card_container">
            <h1 className="sr-only">메인 카드 영역</h1>
            <Header />
            <CreateCard />
            <HotIssueList />
            <NewPostList />
        </main>
    );
}
