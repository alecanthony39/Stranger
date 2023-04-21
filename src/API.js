export const loginMyUser = async (username, password) => {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2301-FTB-CT-WEB-PT/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
