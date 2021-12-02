import React from 'react';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const id = router.query.id;
  const type = router.query.type;

  return (
    <div>
      Profile page { id } { type } 
    </div>
  );
};

export default Profile;
