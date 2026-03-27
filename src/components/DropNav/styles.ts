import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #111;
    padding: 1rem;
    color: white;
    overflow: visible;
    top: 100%;
    left: 0;
    z-index: 9999;
`;

export const Menu = styled.ul`
    display: flex;
    top: 100%;
    left: 0;
    z-index: 9999;
    overflow: visible;
    gap: 2rem;
    list-style: none;
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
  background: #222;
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

  &:hover {
    background: #333;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 0.6rem 1rem;
  color: #ccc;
  text-decoration: none;
  transition: all 0.2s ease;
  top: 100%;
  left: 0;
  z-index: 9999;
  overflow: visible;

  &:hover {
    background: #2a2a2a;
    color: #00ffcc;
  }

  &.active {
    color: #00ffcc;
    font-weight: 600;
  }
`;