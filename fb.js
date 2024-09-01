// Use require instead of import
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc } = require("firebase/firestore"); 

// Firebase configuration (replace with your own config)
const firebaseConfig = {
  apiKey: "AIzaSyBLt6ucbk16pwilIh9NLle2caepXRekWhE",
  authDomain: "courses-c03f7.firebaseapp.com",
  projectId: "courses-c03f7",
  storageBucket: "courses-c03f7.appspot.com",
  messagingSenderId: "1026538579323",
  appId: "1:1026538579323:web:77c92e93a2d268b36909de",
  measurementId: "G-HWW8QR0S8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Example courses data with instructorId field
const courses = [
  {
    courseName: "Introduction to Cloud Computing",
    instructorId: "GHh4isR1UZLiOSFZg3aw",
    description: "Get started with cloud computing concepts and services.",
    status: "Open",
    duration: "6 weeks",
    schedule: "Tue, Thu - 1:00 PM to 3:00 PM",
    location: "Room 909, Cloud Lab",
    prerequisites: "None",
    syllabus: [
      { week: 1, topic: "Overview of Cloud Computing" },
      { week: 2, topic: "Cloud Service Models" },
      { week: 3, topic: "Cloud Providers and Platforms" },
      // Add more weeks as needed
    ]
  },
  {
    courseName: "Mobile App Development with Flutter",
    instructorId: "IMZWFfRfuIYyoJKqO0hC",
    description: "Learn how to build cross-platform mobile apps using Flutter.",
    status: "In Progress",
    duration: "10 weeks",
    schedule: "Mon, Wed - 10:00 AM to 12:00 PM",
    location: "Room 1010, Mobile Lab",
    prerequisites: "Basic knowledge of programming",
    syllabus: [
      { week: 1, topic: "Introduction to Flutter" },
      { week: 2, topic: "Building User Interfaces" },
      { week: 3, topic: "State Management" },
      // Add more weeks as needed
    ]
  },
  {
    courseName: "Software Engineering Principles",
    instructorId: "ZfK6Io2UmmKzWKnZ1UC3",
    description: "Understand the principles and practices of software engineering.",
    status: "Open",
    duration: "14 weeks",
    schedule: "Mon, Wed, Fri - 9:00 AM to 11:00 AM",
    location: "Room 2020, Engineering Hall",
    prerequisites: "Basic knowledge of programming",
    syllabus: [
      { week: 1, topic: "Software Development Life Cycle" },
      { week: 2, topic: "Requirements Gathering" },
      { week: 3, topic: "Design Patterns" },
      // Add more weeks as needed
    ]
  },
  {
    courseName: "Introduction to AI and Machine Learning",
    instructorId: "abLhflOf4wenm7kXZx7R",
    description: "An introductory course to Artificial Intelligence and Machine Learning.",
    status: "Closed",
    duration: "12 weeks",
    schedule: "Tue, Thu - 2:00 PM to 4:00 PM",
    location: "Room 3030, AI Lab",
    prerequisites: "Basic understanding of programming",
    syllabus: [
      { week: 1, topic: "Introduction to AI" },
      { week: 2, topic: "Machine Learning Algorithms" },
      { week: 3, topic: "Model Evaluation" },
      // Add more weeks as needed
    ]
  },
  {
    courseName: "Introduction to Blockchain Technology",
    instructorId: "nxJrsV5XbhB5UPpMU18R",
    description: "Explore the fundamentals of blockchain technology and its applications.",
    status: "Open",
    duration: "8 weeks",
    schedule: "Mon, Wed - 3:00 PM to 5:00 PM",
    location: "Room 4040, Blockchain Lab",
    prerequisites: "None",
    syllabus: [
      { week: 1, topic: "Basics of Blockchain" },
      { week: 2, topic: "Cryptocurrency Fundamentals" },
      { week: 3, topic: "Smart Contracts" },
      // Add more weeks as needed
    ]
  },
  {
    courseName: "User Experience Design",
    instructorId: "v9mEAVvYXVNoVGZrlHRG",
    description: "Learn the principles of user experience design to create user-friendly applications.",
    status: "In Progress",
    duration: "8 weeks",
    schedule: "Tue, Thu - 4:00 PM to 6:00 PM",
    location: "Room 5050, Design Lab",
    prerequisites: "None",
    syllabus: [
      { week: 1, topic: "Introduction to UX Design" },
      { week: 2, topic: "User Research Methods" },
      { week: 3, topic: "Wireframing and Prototyping" },
      // Add more weeks as needed
    ]
  },
  {
    courseName: "Digital Marketing Fundamentals",
    instructorId: "2UbJQIuHBN8A2mkttNxN",
    description: "Get a comprehensive overview of digital marketing strategies and tools.",
    status: "Open",
    duration: "10 weeks",
    schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    location: "Room 6060, Marketing Suite",
    prerequisites: "None",
    syllabus: [
      { week: 1, topic: "Introduction to Digital Marketing" },
      { week: 2, topic: "SEO Basics" },
      { week: 3, topic: "Social Media Marketing" },
      // Add more weeks as needed
    ]
  },
  {
    courseName: "Ethical Hacking and Cybersecurity",
    instructorId: "GHh4isR1UZLiOSFZg3aw",
    description: "Learn ethical hacking techniques and cybersecurity practices to protect systems.",
    status: "Open",
    duration: "12 weeks",
    schedule: "Tue, Thu - 1:00 PM to 3:00 PM",
    location: "Room 7070, Security Lab",
    prerequisites: "Basic understanding of networks",
    syllabus: [
      { week: 1, topic: "Ethical Hacking Overview" },
      { week: 2, topic: "Penetration Testing Techniques" },
      { week: 3, topic: "Security Tools and Practices" },
      // Add more weeks as needed
    ]
  }
];



// Function to add courses to the Firestore database
async function addCourses() {
  try {
    // Iterate over each course in the courses array
    for (let course of courses) {
      // Create a new document reference with an auto-generated ID in the "courses" collection
      const newCourseRef = doc(collection(db, "courses"));

      // Set the document data with the course details
      await setDoc(newCourseRef, course);

      // Log the ID of the new document to the console
      console.log(`Course added with ID: ${newCourseRef.id}`);
    }

    console.log("All courses have been added successfully!");
  } catch (error) {
    console.error("Error adding courses: ", error);
  }
}

// Call the function to add courses
addCourses();
