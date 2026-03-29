import {
  Nav,
  Menu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  StyledLink,
} from "./styles";

export default function DropNav() {
  return (
    <Nav>
      <Menu>
        <Dropdown>
          <StyledLink to="/philosophy">Philosophy ▾ </StyledLink>
          <DropdownMenu>
            <DropdownItem><StyledLink to="/nutrition">Nutrition</StyledLink></DropdownItem>
            <DropdownItem><StyledLink to="/supplements">Supplements</StyledLink></DropdownItem>
            <DropdownItem><StyledLink to="/training">Training</StyledLink></DropdownItem>
            <DropdownItem><StyledLink to="/sleep">Sleep</StyledLink></DropdownItem>
            <DropdownItem><StyledLink to="/spirituality">Spirituality</StyledLink></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <StyledLink to="/get-involved">Get Involved ▾ </StyledLink>
          <DropdownMenu>
            <DropdownItem><StyledLink to="/circle-time">Circle Time</StyledLink></DropdownItem>
            {/* <DropdownItem><StyledLink to="/volunteer">Volunteer</StyledLink></DropdownItem> */}
            <DropdownItem><StyledLink to="/donate">Donate</StyledLink></DropdownItem>
            {/* <DropdownItem><StyledLink to="/collaborate">Collaborate</StyledLink></DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <StyledLink to="/about">About ▾ </StyledLink>
          <DropdownMenu>
            <DropdownItem><StyledLink to="/mission">Mission</StyledLink></DropdownItem>
            <DropdownItem><StyledLink to="/story">Story</StyledLink></DropdownItem>
            <DropdownItem><StyledLink to="/team">Team</StyledLink></DropdownItem>
            <DropdownItem><StyledLink to="/impact">Impact</StyledLink></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Menu>
    </Nav>
  );
}