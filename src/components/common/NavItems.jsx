import React from "react";

const NavItems = ({ links = [], onClick = () => {} }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-secondary hover:text-primary transition-colors"
            onClick={onClick}
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavItems;
