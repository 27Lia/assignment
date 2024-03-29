import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat");
    } catch (error) {
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
      console.error(error.message);
    }
  };

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <Title>Welcome to KakaoTalk</Title>
        <Description>
          If you have a Kakao Account,<br></br>log in with your email or phone
          number.
        </Description>
        <LoginContainer>
          <Input
            placeholder="Email or Phone Number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <BtnBox>
            <LoginBtn type="submit">Log In</LoginBtn>
            <SignBtn type="button">Sign Up</SignBtn>
          </BtnBox>
          <Find>Find Kakao Account or PassWord</Find>
        </LoginContainer>
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.div`
  text-align: center;
  font-size: 23px;
  color: #918f8f;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 25px 0px 25px 0px;
  margin: 0px 30px 0px 30px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 2px solid #bbb9b9;
  font-size: 18px;
  outline: none;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px 0px 30px;
  justify-content: space-between;
  height: 180px;
  margin-top: 30px;
`;

const LoginBtn = styled.button`
  background-color: #f6f6f6;
  border: none;
  padding: 25px 0px 25px 0px;
  font-size: 25px;
  cursor: pointer;
`;
const SignBtn = styled.button`
  background-color: #f6f6f6;
  border: none;
  padding: 25px 0px 25px 0px;
  font-size: 25px;
`;

const Find = styled.div`
  border: none;
  padding: 25px 0px 25px 0px;
  font-size: 21px;
  text-align: center;
`;
export default LoginPage;
