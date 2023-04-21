import { useState, useEffect } from "react";

function Profile({ myToken }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProfileData();
  }, []);

  async function getProfileData() {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2301-FTB-CT-WEB-PT/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${myToken}`,
          },
        }
      );
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <div>
      <h1>Welcome, {data.username}</h1>
    </div>
  );
}

export default Profile;
