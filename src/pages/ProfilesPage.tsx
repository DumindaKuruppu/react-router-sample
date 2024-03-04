import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

const ProfilesPage = () => {

  const profiles = [1, 2, 3, 4, 5];

  return (
    <div style={{display: "flex", gap: 20}}>
      <div>
        {profiles.map((profile, index) => {
          return (
            <div key={index}>
              <NavLink
                style={({isActive, isPending, isTransitioning}) => {
                  return {
                    display: "block",
                    border: "1px solid #000",
                    padding: 12,
                    margin: 10,
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "lightblue" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                key={profile} to={`/profile/${profile}`}>Profile {profile}
              </NavLink>
            </div>
          );
        })}
      </div>
      <Outlet/>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default ProfilesPage;