import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import CartIcon from "@/components/icons/CartIcon"; // Import the CartIcon component
// Import useRouter from next/router
import { useRouter } from 'next/router';



const StyledHeader = styled.header`
  background-color: #222;
  padding: 10px 0;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StyledNav = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 8px 30px 8px 10px;
  border: none;
  border-radius: 20px;
  margin-left: 10px;
  background-color: #444;
  color: #fff;
  ::placeholder {
    color: #ccc;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

// In your Header component
export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const router = useRouter(); // Initialize useRouter hook

    // Function to handle form submission
    const handleSearchSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      const searchQuery = e.target.elements.search.value; // Get the value from the search input
      router.push(`/search?query=${searchQuery}`); // Navigate to the search page with the search query
    };

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Item Blog</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/product"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>

          <SearchContainer>
            <form onSubmit={handleSearchSubmit}> {/* Add form element with onSubmit handler */}
              <IconWrapper>
                <CartIcon />
              </IconWrapper>
              <SearchInput type="text" name="search" placeholder="Search..." /> {/* Add name attribute to the input */}
            </form>
          </SearchContainer>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}