import { useNavigate } from "react-router-dom";
import { Wrapper } from "./pagename.e";

function Pagename({ text }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <p onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left" />
      </p>
      <h2>{text}</h2>
    </Wrapper>
  );
}

export default Pagename;
