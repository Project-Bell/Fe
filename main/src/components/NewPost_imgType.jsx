import React from "react";
import "./NewPost_imgType.css";

const mokdata =
    "계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은      까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 아이들의 이름과 패, 경, 옥 이런 이국소녀 패, 경, 옥 이런 이국소녀 계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지않은 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러봅니다. 소학교 때 책상을 같이 했던 아이들의 이름과 패, 경, 옥 이런 이국소녀 패, 경, 옥 이런 이국소녀...";

export default function NewPost_imgType() {
    return (
        <div className="post_img_type">
            <div className="user_info">
                <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="{user} 프로필 이미지"
                />
                <span className="user_nickname">Lorem_ipsum</span>
            </div>

            <div className="imgCard_contents">
                <img src="https://picsum.photos/seed/picsum/300/300" alt="" />
                <img src="https://picsum.photos/seed/picsum/300/300" alt="" />
                <img src="https://picsum.photos/seed/picsum/300/300" alt="" />
            </div>

            <p className="txtCard_contents">{mokdata}</p>
        </div>
    );
}
