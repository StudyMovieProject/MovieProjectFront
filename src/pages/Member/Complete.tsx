import { useMemberStore } from "../../store/memberSlice";
import { Typo } from "./Confirm";

export default function MemberComplete() {
  const { member } = useMemberStore();

  const { username, role, status } = member;

  return (
    <>
      <Typo>회원가입 완료</Typo>
      <p>회원가입이 완료되었습니다.</p>
      <p>회원 정보: {username}님은 {role}, {status}</p>
    </>
  )
}

// [x] 가입 완료 페이지에 role, status 데이터 표시