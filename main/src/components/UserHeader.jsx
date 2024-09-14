import React from "react";
import { Link } from "react-router-dom";
import style from "./UserHeader.module.css";
import GrayBtn from "./components_btn/GrayBtn";

export default function UserHeader() {
    return (
        <section className={style.userHeader}>
            <div className={style.userInfo}>
                <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="유저 프로필 이미지"
                />
                <span>Nickname</span>

                <div className="user_state">
                    <ul>
                        <li>
                            {/* <Link to="./" className={["user_mypage"]} /> */}
                        </li>
                        <li>
                            {/* <Link to="./" className={["user_logout"]} /> */}
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style.cart_state_btn_wrap}>
                <GrayBtn pageName="새로운 카드 작성" />
                <GrayBtn pageName="새로고침" />
            </div>
        </section>
    );
}
