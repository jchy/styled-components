import "./App.css";
import styled from "styled-components";
import style from "./app.module.css";

const Conatiner = styled.div`
  text-align: "center";
  border: 1px solid black;
  padding: 20px;
  background: yellow;
`;

export default function App() {
  return (
    <div className="App">
      <h3>React styled components demo</h3>
      <Conatiner>
        styled components styling
        <p style={{ background: "red", color: "white" }}>
          Inline styling Styling
        </p>
        <p className="external-css"> external .css file styleing </p>
        <p className={style.externalCss}>Module css demonstartion</p>
      </Conatiner>
    </div>
  );
}
