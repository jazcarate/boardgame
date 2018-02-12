import React from 'react';
const style = {
  width: "100%",
  height: "60px",
  marginTop: "5%",
  backgroundColor: "black"
};

const Footer = () => {
  return (
    <footer className="footer" style={style}>
      <p>Crafted by <a href="http://www.florius.com.ar/">Florius</a></p>
    </footer>
  );
};

export default Footer;