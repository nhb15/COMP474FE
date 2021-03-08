import React from 'react'

function HeaderComponent(props) {
    const { userAuthority } = props;

    return (
        <div>
            Welcome, { userAuthority }!
        </div>
    );
}

export default HeaderComponent;