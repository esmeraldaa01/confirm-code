import React, { useState } from "react";
import { Input } from "antd";
import './ConfirmCode.css'
import styled from "styled-components";
import {focus} from "@testing-library/user-event/dist/focus";

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
const [index , setIndex ] = useState(0);

    const handleFocus = (e) => {
        const copy = [...code]

        if(e.target.value && index < code.length) {
            copy[index] = e.target.value;
            document.getElementById(`${index}`).focus()
            setIndex(index + 1);
        }else if(index === code.length){
            if(e.target.value === '') copy[code.length] = 0;
            document.getElementById(`${index}`).focus()
            setIndex(index - 1);
        }

        setCode(copy)
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
                {code.map((cod ) => {
                    return (
                        <Input
                            className='input'
                               type={"tel"}
                            id={index}
                               value={cod}
                               onChange={(e)=> handleFocus(e)}
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
