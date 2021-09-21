const users = [
  {
    id: 1,
    name: "MD. Iqbal Hasan",
    age: 23,
    title: "Graphics Designer",
    sallary: 30000,
    joinDate: "01 October 2021",
    character: {
      char1: "Good",
      char2: "Very good",
      char3: "Excellent",
    },
    address: {
      home: "Tangail, Bangladesh",
      current: "Gazipur, Bangladesh",
    },
    phone: "(+880) 18xxxxxxxx",
    email: "iqbal.hasan@gmail.com",
    website: "www.iqbalhasan.com",
  },
  {
    id: 2,
    name: "Mr. Mridul Chawdhary",
    age: 24,
    title: "Web Designer",
    sallary: 40000,
    joinDate: "01 November 2021",
    character: {
      char1: "Good",
      char2: "Very good",
      char3: "Excellent",
    },
    address: {
      home: "Bogura, Bangladesh",
      current: "Gazipur, Bangladesh",
    },
    phone: "(+880) 19xxxxxxxx",
    email: "mridul.chawdhary@gmail.com",
    website: "www.mridulchawdhary.com",
  },
  {
    id: 3,
    name: "Mr. Simon Hembrom",
    age: 25,
    title: "Web Developer",
    sallary: 50000,
    joinDate: "01 Desember 2021",
    character: {
      char1: "Good",
      char2: "Very good",
      char3: "Excellent",
    },
    address: {
      home: "Rajshahi, Bangladesh",
      current: "Gazipur, Bangladesh",
    },
    phone: "(+880) 17zzzzzzzz",
    email: "simon.hembrom@gmail.com",
    website: "www.simonhembrom.com",
  },
];

// .....
const fetchData = (data, isAdmin) => {
  return new Promise((resolve, reject) => {
    if (isAdmin) {
      const userData = data;
      resolve(userData);
    } else {
      reject(new Error("You are currently not an admin!"));
    }
  });
};

// .....
const addToData = (data) => {
  const newData = data;
  return Promise.resolve(newData);
};

// .....
async function getData(data, isAdmin) {
  try {
    const newData = await fetchData(data, isAdmin);
    const currentData = await addToData(newData);
    console.log(currentData);
  } catch (error) {
    console.log(error.message);
  }
}

getData(users, true);
