import React from 'react';

const Logo = ({logoSrc, logoAlt}) => (

      <div className="m-logo">
        <img  className="m-logo__media" src={logoSrc} alt={logoAlt}/>
      </div>

)

export default Logo;
