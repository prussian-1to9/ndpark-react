import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Checkbox, Form } from "antd";
import { Rule } from "antd/es/form";

import { media } from "@utils/media";

import AuthForm from "@components/AuthPage/AuthForm";
import AuthInput from "@components/AuthPage/AuthInput";
import AuthButton from "@components/AuthPage/AuthButton";

const StyledDiv = styled.div`
  ${media.mobile` flex-direction: column;  `}
`;

// set rule
const formRules: Record<string, Rule[]> = {
  id: [
    {
      required: true,
      message: "ID를 입력해주세요.",
    },
    {
      pattern: /^[a-zA-Z0-9]*$/,
      message: "올바른 ID를 입력해주세요.",
    },
  ],
  tel: [
    {
      required: true,
      message: "전화번호를 입력해주세요.",
    },
    {
      pattern: /^01[0-9]{8,9}$/,
      message: "올바른 전화번호를 입력해주세요.",
    },
  ],
  password: [
    {
      required: true,
      message: "비밀번호를 입력해주세요.",
    },
    {
      pattern: /^[a-zA-Z0-9]*$/,
      message: "올바른 비밀번호를 입력해주세요.",
    },
  ],
};

const SignInForm: React.FC = () => {
  const storedID = localStorage.getItem(process.env.REMEMBER_ID_KEY || "");

  const [rememberID, setRememberID] = useState(storedID ? true : false);
  const [signInMethod, setSignInMethod] = useState(rememberID ? "id" : "phone");
  const [rememberSignin, setRememberSignin] = useState(false);

  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(storedID || "");

  const navigate = useNavigate();

  const handleMethodButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { type } = e.currentTarget.dataset;
    setSignInMethod(type ?? "phone");
    setRememberID(false);
    setId("");
    setPhone("");
  };

  const handleFormFinish = (values: any) => {
    localStorage.setItem(
      process.env.SIGNIN_CHECK_KEY || "",
      JSON.stringify(values)
    );
    if (rememberID && signInMethod === "id") {
      localStorage.setItem(process.env.REMEMBER_ID_KEY || "", values.id);
    } else {
      localStorage.removeItem(process.env.REMEMBER_ID_KEY || "");
    }
    alert("로그인 되었습니다.");
    navigate("/");
  };

  return (
    <AuthForm
      onFinish={handleFormFinish}
      initialValues={{
        id: storedID ?? "",
      }}
    >
      <StyledDiv className="flex justify-center gap-2">
        <AuthButton
          onClick={handleMethodButtonClick}
          data-type="phone"
          type={signInMethod === "phone" ? "primary" : "default"}
        >
          전화번호 로그인
        </AuthButton>
        <AuthButton
          onClick={handleMethodButtonClick}
          type={signInMethod === "id" ? "primary" : "default"}
          data-type="id"
        >
          ID 로그인
        </AuthButton>
      </StyledDiv>

      {signInMethod === "phone" && (
        <AuthInput
          name="tel"
          type="tel"
          placeholder="전화번호"
          value={phone}
          rules={formRules.tel}
          onChange={(e) => setPhone(e.target.value)}
        />
      )}
      {signInMethod === "id" && (
        <AuthInput
          name="id"
          type="text"
          placeholder="ID"
          value={id}
          rules={formRules.id}
          onChange={(e) => setId(e.target.value)}
        />
      )}

      <AuthInput
        name="password"
        type="password"
        placeholder="비밀번호"
        value={password}
        rules={formRules.password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Form.Item noStyle>
        <AuthButton htmlType="submit" preventDefault={false}>
          로그인
        </AuthButton>
      </Form.Item>

      <StyledDiv>
        <Checkbox
          name="rememberSignin"
          checked={rememberSignin}
          onChange={() => setRememberSignin(!rememberSignin)}
        >
          로그인 상태 유지
        </Checkbox>
        {signInMethod === "id" && (
          <Checkbox
            name="rememberID"
            checked={rememberID}
            onChange={() => setRememberID(!rememberID)}
          >
            ID 저장
          </Checkbox>
        )}
      </StyledDiv>
    </AuthForm>
  );
};

export default SignInForm;
