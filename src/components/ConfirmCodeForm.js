import React, { useState } from "react";
import { Input } from "antd";
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
    const [code, setCode] = useState([]);

    const handleFocus = (e, id) => {
        const copyCode = [...code];

        if (e.target.value === "") {
            copyCode[id] = 0;
            if (e.target.previousSibling && id != 0) e.target.previousSibling.focus();
        } else {
            if (e.target.nextSibling) e.target.nextSibling.focus();
            copyCode[id] = e.target.value;
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
                <Input
                    style={{
                        fontSize: "50px",
                        width: "70px",
                        color: "grey",
                        height: "120px",
                        margin: "10px",
                        textAlign: "center",
                        border: "1px solid lightgrey",
                        borderRadius: "5px",
                    }}
                    type={"tel"}
                    value={code[0]}
                    onChange={(e) => handleFocus(e, 0)}
                    maxLength={1}
                ></Input>
                <Input
                    style={{
                        fontSize: "50px",
                        width: "70px",
                        color: "grey",
                        height: "120px",
                        margin: "10px",
                        textAlign: "center",
                        border: "1px solid lightgrey",
                        borderRadius: "5px",
                    }}
                    type={"tel"}
                    value={code[1]}
                    onChange={(e) => handleFocus(e, 1)}
                    maxLength={1}
                ></Input>
                <Input
                    style={{
                        fontSize: "50px",
                        width: "70px",
                        color: "grey",
                        height: "120px",
                        margin: "10px",
                        textAlign: "center",
                        border: "1px solid lightgrey",
                        borderRadius: "5px",
                    }}
                    type={"tel"}
                    value={code[2]}
                    onChange={(e) => handleFocus(e, 2)}
                    maxLength={1}
                ></Input>
                <Input
                    style={{
                        fontSize: "50px",
                        width: "70px",
                        color: "grey",
                        height: "120px",
                        margin: "10px",
                        textAlign: "center",
                        border: "1px solid lightgrey",
                        borderRadius: "5px",
                    }}
                    type={"tel"}
                    value={code[3]}
                    onChange={(e) => handleFocus(e, 3)}
                    maxLength={1}
                ></Input>
                <Input
                    style={{
                        fontSize: "50px",
                        width: "70px",
                        color: "grey",
                        height: "120px",
                        margin: "10px",
                        textAlign: "center",
                        border: "1px solid lightgrey",
                        borderRadius: "5px",
                    }}
                    type={"tel"}
                    value={code[4]}
                    onChange={(e) => handleFocus(e, 4)}
                    maxLength={1}
                ></Input>
                <Input
                    style={{
                        fontSize: "50px",
                        width: "70px",
                        color: "grey",
                        height: "120px",
                        margin: "10px",
                        textAlign: "center",
                        border: "1px solid lightgrey",
                        borderRadius: "5px",
                    }}
                    type={"tel"}
                    value={code[5]}
                    onChange={(e) => handleFocus(e, 5)}
                    maxLength={1}
                ></Input>
            </Inputs>
            <Small>
                This is design only. We didn't actually send you an email as we don't
                have your email , right ?
            </Small>
        </Wrapper>
    );
};

export default App;
