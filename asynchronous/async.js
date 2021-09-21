const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical meeting",
      location: "Google meet",
      time: "10:30 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});

// .....
const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} was scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
};

// .....
async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
  } catch (error) {
    console.log(error);
  }
}

myMeeting();
