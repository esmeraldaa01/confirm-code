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
  color: gray;
  font-size: small;
  font-weight: 550;
  background-color: rgba(192,192,192,0.1);;
  padding: 10px;
  background-color:rgba(192,192,192,0.3);
  border-radius: 5px;
  line-height: 1.6;
  margin-top: 40px;
`;

const App = () => {
    const [code, setCode] = useState(new Array(6).fill(""));

    const handleFocus = (e, id) => {
        const copyCode = [...code];

        if(e.target.value){
            copyCode[id] = e.target.value;
            document.getElementById(id < code.length - 1 ? id + 1 : code.length -1  ).focus()
        }else if(e.target.value === "") {
            copyCode[id] = 0;
            document.getElementById( id !== 0 ? id - 1 : id).focus()
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
                        <Input
                            id={i}
                            className='input'
                               type={"tel"}
                               value={cod}
                               onChange={(e)=> handleFocus(e,i)}
                               maxLength={1}
                        />
                    )
                })}
            </Inputs>
            <Small>
                This is design only. We didn't actually send you an email as
               <br/> we don't have your email , right ?
            </Small>
        </Wrapper>
    );
};

export default App;
