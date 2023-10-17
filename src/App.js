import './App.css';
import styled, {keyframes} from "styled-components";

function App() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: #BF4F74;
    `;

// Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;
    const StyledButton = styled.button`
      min-width: 200px;
      border: none;
      font-size: 18px;
      padding: 7px 10px;
      /* The resulting background color will be based on the bg props. */
      background-color: ${props => props.bg === "white" ? "white" : "blue"};
    `;

    const StyledContainer = styled.section.attrs((props) => ({
        width: props.width || "100%",
        hasPadding: props.hasPadding || false,
    }))`
      --container-padding: 20px;
      width: ${(props) => props.width}; // Falls back to 100%
      padding: ${(props) =>
          (props.hasPadding && "var(--container-padding)") || "none"};
      background-color: red;
    `;

    const StyledInherit = styled(StyledContainer)`
      background-color: yellow;
    `;

    // Usa SCSS
    const StyledProfileCard = styled.div`
      border: 1px solid black;

      > .username {
        font-size: 20px;
        color: black;
        transition: 0.2s;

        &:hover {
          color: red;
        }

        + .dob {
          color: grey;
        }
      }
    `;

    const slideIn = keyframes`
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    `;

    const Toast = styled.div`
      animation: ${slideIn} 2.5s cubic-bezier(0.4, 0, 0.2, 1) both;
      border-radius: 5px;
      padding: 20px;
      position: fixed;
    `;
    return (
        <div>
            <Wrapper>
                <Title>
                    Hello World!
                </Title>
                <div>
                    <StyledButton bg="white">Button A</StyledButton>
                    <StyledButton bg="blue">Button B</StyledButton>
                </div>
            </Wrapper>
            <StyledContainer width="50%" hasPadding="true"></StyledContainer>
            <StyledContainer> Teste </StyledContainer>
            <StyledInherit> child 1 </StyledInherit>
            <StyledInherit width="50%" hasPadding="true"> child 2 </StyledInherit>
            <StyledInherit width="50%" hasPadding="true" as="button"> Using as </StyledInherit>
            <StyledProfileCard>
                <h1 className="username">John Doe</h1>
                <p className="dob">
                    Date: <span>12th October, 2013</span>
                </p>
                <p className="gender">Male</p>
            </StyledProfileCard>
            <Toast>This is a toast</Toast>
        </div>
    );
}

export default App;
