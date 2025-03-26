import { StyledNavButton } from "./styles";

function NavButton({ buttonName, page, setCurrentPage }) {
  return (
    <StyledNavButton type="button" onClick={() => setCurrentPage(page)}>
      {buttonName}
    </StyledNavButton>
  );
}

export default NavButton;
