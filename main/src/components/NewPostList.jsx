import React from "react";
import "./NewPostList.css";
import NewPost_txtType from "./NewPost_txtType";
import NewPost_imgType from "./NewPost_imgType";

export default function NewPostList() {
    return (
        <section className="new_post">
            <h3>최신글</h3>
            <NewPost_txtType />
            <NewPost_imgType />
            <NewPost_txtType />
        </section>
    );
}
