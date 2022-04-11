import React, { useState } from "react";
import { Input } from "antd";
import './ConfirmCode.css'
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 25%;
  top: 15%;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  width: 50%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inputs = styled.div`
  margin-top: 30px;
  display: flex;
`;
const Header = styled.h1`
  font-size: 28px;
  font-weight: bolder;
  margin-top: 40px;
  text-align: center;
  font-family: "Gill Sans" sans-serif;
`;
const Text = styled.p`
  text-align: center;
  color: black;
  font-family: "Gill Sans" sans-serif;
  font-weight: 520;
  margin-top: 10px;
`;
const Small = styled.h5`
  width: 55%;
  height: 10%;
  background-color: #e8e8e8;
  border-radius: 5px;
  color: grey;
  padding: 15px 10px 10px 5px;
  margin-top: 30px;
  font-family: "arial";
`;

const App = () => {
    const [code, setCode] = useState(new Array(6).fill(""));

    const handleFocus = (e, id) => {
        const copyCode = [...code];

        if(e.target.value){
            copyCode[id] = e.target.value;
            if(e.target.nextSibling) e.target.nextSibling.focus();
        }else if(e.target.value === "") {
            copyCode[id] = 0;
            if (e.target.previousSibling && id != 0) e.target.previousSibling.focus();
        }

        setCode(copyCode);
    };

    return (
        <Wrapper>
            <Header>Verify Your Account</Header>
            <Text>
                {" "}
                We emailed you the six digit code to esmeralda.lame@gmail.com. <br />
                Enter the code below to confirm your email adress
            </Text>
            <Inputs>
                {code.map((cod , i) => {
                    return (
                        <Input className='input'
                               type={"tel"}
                               value={cod}
                               onChange={(e)=> handleFocus(e,i)}
                               maxLength={1}
                        />
                    )
                })}
            </Inputs>
            <Small>
                This is design only. We didn't actually send you an email as we don't
                have your email , right ?
            </Small>
        </Wrapper>
    );
};

export default App;
