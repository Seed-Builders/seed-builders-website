import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: white;
    padding: 1rem 1rem 1rem 1rem;
    color: #060606;
    left: 0;
`;

export const Menu = styled.ul`
    display: flex;
    left: 0;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Dropdown = styled.li`
  position: relative;
  cursor: pointer;
  top: 100%;
  left: 0;
  z-index: 9999;
  overflow: visible;

  &:hover ul {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9999;
  top: 100%;
  left: 0;
  background: #white;
  list-style: none;
  padding: 0.5rem 0;
  min-width: 160px;
  overflow: visible;

  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;

  transition: all 0.2s ease;
  z-index: 999;
`;

export const DropdownItem = styled.li`
padding: 0.5rem 1rem;
top: 100%;
left: 0;
z-index: 9999;
overflow: visible;

a {
  background: #white;
}

  &:hover {
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  margin: 0.1rem 0.3rem;
  text-decoration: none;
  transition: all 0.2s ease;
  top: 100%;
  left: 0;
  z-index: 9999;
  overflow: visible;
  background: #white;

  &:hover {
    color: #rgb(69, 251, 84);
  }

  &.active {
    color: rgb(69, 251, 84);
    font-weight: 600;
  }
`;