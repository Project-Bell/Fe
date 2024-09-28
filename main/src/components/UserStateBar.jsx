import React from "react";
import style from "./UserStateBar.module.css";
import GrayBtn from "./components_btn/GrayBtn";
import WhiteBtn from "./components_btn/WhiteBtn";
import LiveBellTop2 from "./components_btn/LiveBellTop2";
import LiveBellTop8 from "./components_btn/LiveBellTop8";
import {
    FaSignOutAlt,
    FaAddressCard,
    FaBorderAll,
    FaBookmark,
    FaRocketchat,
    FaEye,
    FaRegComment,
    FaHeart,
} from "react-icons/fa";

export default function UserStateBar() {
    return (
        <section className={style.userHeader}>
            <div className={style.userInfo}>
                <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="유저 프로필 이미지"
                />
                <span>Nickname</span>

                <div className={style.user_state}>
                    <ul>
                        <li>
                            <FaAddressCard size="30px" color="#777" />
                        </li>
                        <li>
                            <FaSignOutAlt size="30px" color="#777" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style.cart_state_btn_wrap}>
                <GrayBtn pageName="새로운 카드 작성" />
                <GrayBtn pageName="새로고침" />
            </div>

            <aside className={style.user_side_tap}>
                <WhiteBtn
                    pageIcon={<FaBorderAll />}
                    pageName="내 카드로 이동"
                ></WhiteBtn>
                <WhiteBtn
                    pageIcon={<FaEye />}
                    pageName="최근 본 카드"
                ></WhiteBtn>

                <WhiteBtn
                    pageIcon={<FaRocketchat />}
                    pageName="실시간 채팅방"
                ></WhiteBtn>
                <WhiteBtn
                    pageIcon={<FaBookmark />}
                    pageName="저장한 카드"
                ></WhiteBtn>

                <WhiteBtn
                    pageIcon={<FaRegComment />}
                    pageName="1:1 채팅방"
                ></WhiteBtn>
                <WhiteBtn
                    pageIcon={<FaHeart />}
                    pageName="좋아하는 카드"
                ></WhiteBtn>
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
                        <LiveBellTop8 topTopic="사이" />
                        <LiveBellTop8 topTopic="사이렌이" />
                        <LiveBellTop8 topTopic="사이렌이 울려" />
                        <LiveBellTop8 topTopic="사이렌이 울렸더군요요" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                        <LiveBellTop8 topTopic="사이렌" />
                    </div>
                </div>
            </aside>
        </section>
    );
}
