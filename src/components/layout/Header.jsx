import { useState } from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Box as="header" className="header" p={4} bg="#eee">
      <Container
        maxW="1200px"
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className="nav container flex items-center justify-between"
      >
        <Link to="/" className="block pointer">
          <Heading
            size="lg"
            color="blue.600"
            as="h4"
            className="text-2xl text-cyan-600 font-bold"
          >
            BoilerPlate
          </Heading>
        </Link>
        <Box
          cursor="pointer"
          className="nav-toggler cursor-pointer"
          onClick={() => setShowNav(true)}
        >
          <RiMenu2Fill size={30} />
          <div className={`overlay ${showNav && "active"}`} />
        </Box>

        <Flex
          rounded="md"
          as="ul"
          listStyleType="none"
          className={`flex items-center gap-2 nav-list ${showNav && "active"}`}
        >
          <Box
            className="close-btn"
            p={2}
            cursor="pointer"
            onClick={() => setShowNav(false)}
          >
            <RiCloseFill size={30} />
          </Box>
          <li>
            <NavLink onClick={() => setShowNav(false)} to="/">
              Feedbacks
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setShowNav(false)} to="/new">
              Add Feedback
            </NavLink>
          </li>
        </Flex>
      </Container>
    </Box>
  );
}
export default Header;
