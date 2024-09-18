import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);

  const getUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(({ avatar_url, name, location }) => {
        setAvatarUrl(avatar_url);
        setName(name);
        setLocation(location);
      });
  };

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  if (avatarUrl === null || name === null || location === null) {
    return <div className="user">Loading...</div>;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
