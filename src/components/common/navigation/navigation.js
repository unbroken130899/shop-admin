import Button from "../button/button";
import { Wrapper, FlexContainer } from "./navigation.e";

function Navigation({ current, total, next, prev, onChange }) {
  const handlePage = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <Wrapper>
      <FlexContainer>
        <Button
          onClick={prev}
          color="primary"
          text={<i className="fa-solid fa-angle-left" />}
          disabled={current === 1}
        />
        <p>
          Page{" "}
          <b>
            {current} of {total > 0 ? total : 1}
          </b>
        </p>
        <label>
          <input
            id="number"
            type="number"
            value={current}
            onChange={handlePage}
          />
        </label>
        <Button
          onClick={next}
          color="primary"
          text={<i className="fa-solid fa-angle-right" />}
          disabled={current === total}
        />
      </FlexContainer>
    </Wrapper>
  );
}

export default Navigation;
