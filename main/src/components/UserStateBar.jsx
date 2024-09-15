import React from "react";
import { Link } from "react-router-dom";
import style from "./UserStateBar.module.css";
import GrayBtn from "./components_btn/GrayBtn";
import WhiteBtn from "./components_btn/WhiteBtn";
import LiveBellTop2 from "./components_btn/LiveBellTop2";
import LiveBellTop8 from "./components_btn/LiveBellTop8";

export default function UserStateBar() {
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

            <aside className={style.user_side_tap}>
                <WhiteBtn pageName="내 카드로 이동"></WhiteBtn>
                <WhiteBtn pageName="최근 본 카드"></WhiteBtn>

                <WhiteBtn pageName="실시간 채팅방"></WhiteBtn>
                <WhiteBtn pageName="저장한 카드"></WhiteBtn>

                <WhiteBtn pageName="1:1 채팅방"></WhiteBtn>
                <WhiteBtn pageName="좋아하는 카드"></WhiteBtn>

                <WhiteBtn pageName="관심 키워드"></WhiteBtn>
                <WhiteBtn pageName="관심 키워드"></WhiteBtn>

                <WhiteBtn pageName=""></WhiteBtn>
                <WhiteBtn pageName=""></WhiteBtn>
            </aside>

            <aside className={style.live_top_10}>
                <h3>
                    실시간 벨 <em>TOP 10</em>
                </h3>

                <div className={style.keyword_card_list}>
                    <LiveBellTop2 topTopic="사이렌" />
                    <LiveBellTop2 topTopic="사이렌" />

                    <div className={style.keyword_top8}>
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                    </div>
                </div>
            </aside>
        </section>
    );
}
