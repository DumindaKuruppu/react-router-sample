import React from 'react';
import {useParams} from "react-router-dom";

const ProfilePage = () => {

  const params = useParams<{ profileId: string }>();
  return (
    <div>
      <h1>Profile {params.profileId}</h1>
    </div>
  );
};

export default ProfilePage;