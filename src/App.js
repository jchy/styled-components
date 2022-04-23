import "./styles.css";
import styled from "styled-components";

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
      <Conatiner>Hello from styled components</Conatiner>
    </div>
  );
}
