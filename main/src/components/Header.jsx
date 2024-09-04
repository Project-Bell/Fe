import React from "react";
import "./HeaderModule.css";

export default function Header() {
    return (
        <header>
            <h1 className="logo">
                <a href="#">
                    <img src="./bell_logo.png" alt="벨 로고 아이콘" />
                </a>
            </h1>

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
        </header>
    );
}
