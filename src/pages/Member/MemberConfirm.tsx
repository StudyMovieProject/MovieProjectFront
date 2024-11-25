import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useMemberStore } from "../../store/memberSlice";

const ConfirmContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const FormBox = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 31rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.1);
`;

const Field = styled(Box)`
  width: 100%;
  margin-bottom: 1rem;
`;

const AgreementBox = styled(Box)`
  width: 100%;
  margin-top: 1rem;
`;

export default function MemberConfirm() {
  const navigate = useNavigate();
  const { member, setMember, setAgreements } = useMemberStore();

  // const [formData, setFormData] = useState<Member>({
  //   memberId: "",
  //   username: "",
  //   password: "",
  //   email: "",
  //   tel: "",
  //   zipcode: "",
  //   address: "",
  //   detailAddress: "",
  //   fullname: "",
  //   role: "CUSTOMER",
  //   status: "ACTIVE",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     setMember((prev) => ({
  //       ...prev,
  //       [name]: checked,
  //     }));
  //   } else {
  //     setMember((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setAgreements({ [name]: checked });
    } else {
      setMember({ [name]: value });
    }
  };

  const { mutate: memberJoin } = useMutation<{ code: number; msg: string; data: string }, Error, typeof member>({
    mutationFn: async (newMember) => {
      const res = await axios.post("http://localhost:8080/api/members/join", newMember);
      return res.data;
    },
    onSuccess: (data: any) => {
      data.code === 1 ? navigate("/member/complete") : console.error("회원가입 실패:", data.msg);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    memberJoin(member);
  };

  return (
    <>
      <ConfirmContainer>
        <Typography variant="h4" gutterBottom>
          회원가입 확인
        </Typography>
        <FormBox noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Field>
            <TextField
              label="아이디"
              variant="outlined"
              fullWidth
              required
              value={formData.memberId}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="이메일"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={member.email}
              onAbort={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="비밀번호"
              name="password"
              type="password"
              variant="outlined"
              helperText="영문, 숫자, 특수문자 2개 조합 8자 이상"
              fullWidth
              required
              value={member.password}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="비밀번호 확인"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={member.password}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="이름"
              name="name"
              variant="outlined"
              fullWidth
              required
              value={member.username}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="휴대폰번호"
              name="tel"
              variant="outlined"
              fullWidth
              required
              value={member.tel}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="주소"
              name="address"
              variant="outlined"
              fullWidth
              required
              value={member.address}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="상세주소"
              name="detailAddress"
              variant="outlined"
              fullWidth
              required
              value={member.detailAddress}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="우편번호"
              name="zipCode"
              variant="outlined"
              fullWidth
              required
              value={member.zipcode}
              onChange={handleChange}
            />
          </Field>
          <AgreementBox>
            <Typography variant="h6" gutterBottom>
              동의 항목
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="전체동의 (일괄 동의 체크박스)"
              />
              <FormControlLabel
                control={<Checkbox required />}
                label="회원이용약관 동의 (필수)"
              />
              <FormControlLabel
                control={<Checkbox required />}
                label="개인정보처리방침 동의 (필수)"
              />
              <Typography variant="subtitle1">
                이메일, SMS, 앱 알림 수신 동의 (선택)
              </Typography>
              <FormControlLabel control={<Checkbox />} label="이메일" />
              <FormControlLabel control={<Checkbox />} label="SMS" />
              <FormControlLabel control={<Checkbox />} label="앱 알림" />
            </FormGroup>
          </AgreementBox>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            //onClick={toSignupComplete}
            sx={{
              marginTop: "2rem",
              height: "3rem",
              color: "white",
              backgroundColor: "#776B5D",
            }}
          >
            가입하기
          </Button>
        </FormBox>
      </ConfirmContainer>
    </>
  );
}


// TODO
// [ ] 전체 동의 버튼 누르면 일괄 동의 되도록 처리
// [ ] validation
// [ ] 폼 옆에 각각 폼 이름 작성
// [x] outlet 해결
// [ ] 다음 페이지에 role, status 데이터 표시
// [ ] member 페이지에 작성한 이메일 저장해서 멤버컨펌에 가져오기
// [ ] form field id, name 요소 추가
