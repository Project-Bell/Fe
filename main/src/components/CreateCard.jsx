import React from "react";

export default function CreateCard() {
    return (
        <section className="main_create_card">
            <textarea name="card" id="card">
                카드 내용을 입력하세요
            </textarea>
        </section>
    );
}
