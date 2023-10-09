import React from "react";
import useStores from "@/core/stores/UseStores";
function UserAvatar(): React.ReactElement {
  const {
    authStore: { userProfile },
  } = useStores();

  return (
    <div className='flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary text-white'>
      {userProfile?.email.split("")[0].toUpperCase()}
    </div>
  );
}

export default UserAvatar;
