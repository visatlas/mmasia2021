import React, { useEffect, useState } from 'react';
import { getUser } from "../../services/auth";

const Admin = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  // get all users
  useEffect(() => {
    fetch(`https://mmasia2021.uqcloud.net/api/users/getAll`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${getUser().token}` }
    }).then(res => res.json())
      .then(data => {
        if (!data.message) {
          setUserInfo(data);
          setIsAdmin(true);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {isAdmin && (
        <div className="max-w-7xl mx-auto py-10 px-8 lg:px-24">
          <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
          <div className="w-full overflow-scroll">
            <h2 className="text-xl mb-4">All users</h2>
            <p className="whitespace-pre-wrap">{JSON.stringify(userInfo, null)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
