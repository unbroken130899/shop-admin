import { Wrapper } from "./search.e";

function Search({ small, onChange, value }) {
  const handleSearch = (e) => onChange(e.target.value);
  return (
    <Wrapper className={small ? "small" : ""}>
      <i className="fa-regular fa-magnifying-glass" />
      <input onChange={handleSearch} value={value} placeholder="Search" />
    </Wrapper>
  );
}

export default Search;
