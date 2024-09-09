import React from "react";
import "./CreateCard.css";

export default function CreateCard() {
    return (
        <form action="" className="create_card">
            <textarea
                name="create_card"
                cols="38"
                rows="5"
                placeholder="카드 내용을 입력하세요."
            ></textarea>
            <button type="submit">카드 보내기</button>
        </form>
    );
}
