import axios from "axios";

axios
  .post("http://localhost:3000/register", {
    username: "Sameera223",
    password: "1000",
  })
  .then((response) => {
    console.log(response?.data);
  })
  .catch((error) => {
    console.error("Error:", error.response?.data);
  });

axios
  .post("http://localhost:3000/login", {
    username: "Sameera223",
    password: "1000",
  })
  .then((response) => {
    console.log(response?.data?.message1);
  })
  .catch((error) => {
    console.error("Error:", error.response?.data);
  });

// axios
//   .get("http://localhost:3000/users")
//   .then((response) => {
//     console.log(response?.data);
//   })
//   .catch((error) => {
//     console.error("Error:", error.response?.data);
//   });
