const express = require("express");
const cors = require("cors");

const app = express();
const port = 8081;

app.use(cors({ origin: "*" }));
app.use(express.json());

const users = [
  {
    name: "Abdelrahman",
    age: 25,
  },
  {
    name: "Sasa",
    age: 11,
  },
  {
    name: "Lolo",
    age: 14,
  },
];

const services = [
  {
    name: "Service 1",
    description: "This is service 1.",
  },
  {
    name: "Service 2",
    description: "This is service 2.",
  },
  {
    name: "Service 3",
    description: "This is service 3.",
  },
];
const contacts = [
  {
    id: 1,
    email: "service1@example.com",
    phone: "1234567890",
  },
  {
    id: 2,
    email: "service2@example.com",
    phone: "0987654321",
  },
  {
    id: 3,
    email: "service3@example.com",
    phone: "5555555555",
  },
];
app.use((req, res, next) => {
  const day = parseInt(req.headers["x-day"]);
  const hour = parseInt(req.headers["x-hour"]);

  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    console.log(req.headers["x-day"], req.headers["x-hour"]);
    return next();
  } else {
    res.end("no");
  }
});

app.get("/", (req, res) => {
  console.log(req.headers["x-hour"]);
  res.status(200).json({ users, services, contacts });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});
// app.get("/services", (req, res) => {
//   res.status(200).json({ services });
// });
// app.get("/contact", (req, res) => {
//   res.status(200).json({ contacts });
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
