import express from "express"
import cors from "cors"
const app = express()
const port = process.env.port || 3000;

app.use(express.json());
app.use(cors());

const allUsers = [
  {
    "id": 1,
    "name": "Ayesha",
    "email": "ayesha@example.com",
    "password": "hashedpassword123"
  },
  {
    "id": 2,
    "name": "Ali",
    "email": "ali@example.com",
    "password": "hashedpassword456"
  },
  {
    "id": 3,
    "name": "Fatima",
    "email": "fatima@example.com",
    "password": "hashedpassword789"
  },
  {
    "id": 4,
    "name": "Ahmed",
    "email": "ahmed@example.com",
    "password": "hashedpassword321"
  },
  {
    "id": 5,
    "name": "Zainab",
    "email": "zainab@example.com",
    "password": "hashedpassword654"
  },
  {
    "id": 6,
    "name": "Hassan",
    "email": "hassan@example.com",
    "password": "hashedpassword987"
  },
  {
    "id": 7,
    "name": "Noor",
    "email": "noor@example.com",
    "password": "hashedpassword234"
  },
  {
    "id": 8,
    "name": "Umar",
    "email": "umar@example.com",
    "password": "hashedpassword567"
  },
  {
    "id": 9,
    "name": "Maryam",
    "email": "maryam@example.com",
    "password": "hashedpassword890"
  },
  {
    "id": 10,
    "name": "Bilal",
    "email": "bilal@example.com",
    "password": "hashedpassword112"
  },
  {
    "id": 11,
    "name": "Amina",
    "email": "amina@example.com",
    "password": "hashedpassword223"
  },
  {
    "id": 12,
    "name": "Salman",
    "email": "salman@example.com",
    "password": "hashedpassword334"
  },
  {
    "id": 13,
    "name": "Hafsa",
    "email": "hafsa@example.com",
    "password": "hashedpassword445"
  },
  {
    "id": 14,
    "name": "Tariq",
    "email": "tariq@example.com",
    "password": "hashedpassword556"
  },
  {
    "id": 15,
    "name": "Sara",
    "email": "sara@example.com",
    "password": "hashedpassword667"
  },
  {
    "id": 16,
    "name": "Kamran",
    "email": "kamran@example.com",
    "password": "hashedpassword778"
  },
  {
    "id": 17,
    "name": "Rabia",
    "email": "rabia@example.com",
    "password": "hashedpassword889"
  },
  {
    "id": 18,
    "name": "Daniyal",
    "email": "daniyal@example.com",
    "password": "hashedpassword990"
  },
  {
    "id": 19,
    "name": "Sadia",
    "email": "sadia@example.com",
    "password": "hashedpassword101"
  },
  {
    "id": 20,
    "name": "Usman",
    "email": "usman@example.com",
    "password": "hashedpassword202"
  }
]


//get request
app.get('/users', (req, res) => {
  res.send(allUsers);
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id
  const userData = allUsers.find((u) => u.id === Number(userId))
  if (userData) {
    res.send(userData)
  } else {
    res.status(404).send({ message: "User Not Found" })
  }
})


//post request
app.post('/users', (req, res) => {
  allUsers.push({ id: allUsers.length + 1, ...req.body });
  res.send("User Added Successfully");
})

//put request
// app.put('/users/:id', (req, res) => {
//   const userId = req.params.id
//   const userData = allUsers.find((u) => u.id === Number(userId))
//   console.log(userData)
//   if (userData) {
//     const updatedData = req.body
//     Object.assign(userData, updatedData)
//     res.send("User Updated Successfully");
//   } else {
//     res.status(404).send({ message: "User Not Found" })
//   }
// })
app.put('/users/:id', (req, res) => {
  const userId = req.params.id
  const index = allUsers.findIndex((u) => u.id === Number(userId))
  if (index !== -1) {
    allUsers.splice(index, 1,{...req.body,userId})
    res.send("User updated Successfully");
  } else {
    res.status(404).send({ message: "User Not Found" })
  }
})

//delete request
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id
  const index = allUsers.findIndex((u) => u.id === Number(userId))
  if (index !== -1) {
    allUsers.splice(index, 1)
    res.send("User Deleted Successfully");
  } else {
    res.status(404).send({ message: "User Not Found" })
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

