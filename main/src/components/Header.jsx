import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <h2 className="logo">
                <a href="Header.jsx">
                    <img src="./bell_logo.png" alt="벨 로고 아이콘" />
                </a>
            </h2>

            <form className="search_box" action="" method="get">
                <label htmlFor="search_txt">
                    <input
                        id="search_txt"
                        type="text"
                        placeholder="검색어를 입력하세요."
                    />
                </label>
                <button className="search_btn" type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-18"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </form>

            <div className="search_box_modal">
                <div className="search_history_keyword">
                    <h4>최근 검색어</h4>
                    <ul>
                        <li>검색어1</li>
                        <li>검색어2</li>
                        <li>검색어3</li>
                        <li>검색어4</li>
                        <li>검색어5</li>
                    </ul>
                </div>

                <div className="search_famuse_keyword">
                    <h4>인기 검색어</h4>
                    <ul>
                        <li>검색어1</li>
                        <li>검색어2</li>
                        <li>검색어3</li>
                        <li>검색어4</li>
                        <li>검색어5</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
