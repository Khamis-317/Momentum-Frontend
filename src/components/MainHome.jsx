import { useState } from "react";
import {
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  Users,
  ArrowLeft,
  UserRoundPlus,
  Star
} from "lucide-react";

export default function MainHome() {
  const [showAll, setShowAll] = useState(false);

  const mentors = [
    {
      name: "Sarah Chen",
      username: "sarahchenn",
      pp: "https://randomuser.me/api/portraits/women/76.jpg",
      jobTitle: "Software Engineer",
      about:
        "Passionate software engineer with 5+ years of experience in full-stack development.",
      rating: 4.9,
    },
    {
      name: "Michael Smith",
      username: "michaellsmith",
      pp: "https://randomuser.me/api/portraits/men/30.jpg",
      jobTitle: "Frontend Developer",
      about:
        "Specialized in React and Vue.js with 4 years of industry experience.",
      rating: 4.8,
    },
    {
      name: "Emma Johnson",
      username: "emmaj",
      pp: "https://randomuser.me/api/portraits/women/65.jpg",
      jobTitle: "UX Designer",
      about:
        "Senior UX designer with expertise in user research and product design.",
      rating: 4.95,
    },
    {
      name: "David Wilson",
      username: "davidw",
      pp: "https://randomuser.me/api/portraits/men/22.jpg",
      jobTitle: "Data Scientist",
      about: "Machine learning expert with focus on NLP and computer vision.",
      rating: 4.85,
    },
    // {
    //   name: "Sarah Chen",
    //   username: "sarahchenn",
    //   pp: "https://randomuser.me/api/portraits/women/76.jpg",
    //   jobTitle: "Software Engineer",
    //   about:
    //     "Passionate software engineer with 5+ years of experience in full-stack development.",
    //   rating: 4.9,
    // },
  ];

  const upcomingSessions = [
    {
      topic: "Frontend development",
      date: "Sep 10, 2025",
      time: "2:00 PM",
      mentor: mentors[0],
    },
    {
      topic: "UI Design",
      date: "Sep 11, 2025",
      time: "5:00 PM",
      mentor: mentors[2],
    },
    {
      topic: "Flutter",
      date: "Sep 12, 2025",
      time: "10:00 AM",
      mentor: mentors[1],
    },
    {
      topic: "Flutter",
      date: "Sep 13, 2025",
      time: "11:00 AM",
      mentor: mentors[3],
    },
    {
      topic: "Backend APIs",
      date: "Sep 15, 2025",
      time: "4:00 PM",
      mentor: mentors[0],
    },
  ];
  const recommendedCommunities = [
    {
      photo:
        "https://multishoring.com/wp-content/uploads/2024/04/what-is-front-end-development.png",
      name: "Frontend developers Hub",
      description:
        "A community for frontend developers to share knowledge and collaborate",
      members: 1298,
    },
    {
      photo:
        "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
      name: "Fullstackers",
      description:
        "A group for developers to share knowledge on building complete apps, from frontend to backend.",
      members: 962,
    },
    {
      photo:
        "https://enozom.com/wp-content/uploads/2024/04/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp",
      name: "UI/UX Club",
      description:
        "A space for designers to explore trends, tools, and ideas for creating great user interfaces.",
      members: 524,
    },
  ];

  const displayedSessions = showAll
    ? upcomingSessions
    : upcomingSessions.slice(0, 4);

  return (
    <main className="w-full grid grid-cols-1 h-screen grid-rows-[12%_1fr_1fr_1fr] m-4">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-1">Welcome Back, Alex{/* user.name */}!👋🏻</h1>
        <span className="text-blue-100">
          Ready to continue learning journey?
        </span>
      </div>

      {/* Upccoming Sessions*/}
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800 mb-6 mt-4">
            Upcoming Sessions
          </h1>{" "}
          {/* View More Button */}
          {upcomingSessions.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex text-blue-700 mt-4 self-center bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
              {showAll ? <ChevronUp /> : <ChevronDown />}

              {showAll ? "View Less" : "View More"}
            </button>
          )}
        </div>
        <div className="grid grid-cols-4 gap-5 h-64 overflow-y-auto pr-2">
          {displayedSessions.map((session, index) => (
            <card
              className="flex flex-col justify-evenly bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              key={index}
            >
              <div className="flex items-center gap-2 ">
                <img
                  src={session.mentor.pp}
                  alt={session.mentor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />
                <div className="flex flex-col">
                  <h3 className="text-medium font-bold text-gray-800">
                    {session.mentor.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    @{session.mentor.username}
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg px-3 py-2 text-sm font-medium text-blue-700 mb-4">
                {session.topic}
              </div>
              <div className="flex flex-col gap-2 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{session.time}</span>
                </div>
              </div>
            </card>
          ))}
        </div>
      </div>

      {/* Recommended CCommunities */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-gray-800 mb-6 mt-4">
          Recommended Communities
        </h1>{" "}
        <div className="grid grid-cols-4 gap-5 h-64 pr-2">
          {recommendedCommunities.map((comm, index) => (
            <card
              className="flex flex-col bg-white justify-evenly p-4 rounded-lg shadow-sm border border-gray-100"
              key={index}
            >
              <div className="flex items-center gap-2 ">
                <img
                  src={comm.photo}
                  alt={comm.name}
                  className="w-12 h-12 rounded-md shadow-lg"
                />
                <div className="flex flex-col justify-evenly">
                  <h3 className="text-medium font-bold text-gray-800">
                    {comm.name}
                  </h3>
                  <div className="flex gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{comm.members} Members</span>
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-500">{comm.description}</span>
              <div className="flex items-center justify-between">
                <div className="flex items-center cursor-pointer text-blue-700 mt-4  bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Learn more</span>
                </div>
                <button className="flex items-center cursor-pointer mt-4 px-4 py-2 rounded-lg bg-blue-700 text-white transition">
                  <UserRoundPlus className="w-4 h-4" />
                  Join
                </button>
              </div>
            </card>
          ))}
        </div>
      </div>
      {/* Top Rated Mentors */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-gray-800 mb-6 mt-4">
          Top Rated Mentors
        </h1>{" "}
        <div className="grid grid-cols-4 gap-5 h-64 pr-2">
          {mentors.map((mentor, index) => (
            <card
              className="flex flex-col items-center bg-white justify-between p-4 rounded-lg shadow-sm border border-gray-100"
              key={index}
            >
              <img
                src={mentor.pp}
                alt={mentor.name}
                className="w-15 h-15 rounded-full object-cover border-2 border-white shadow"
              />
              <div className="flex flex-col justify-evenly items-center">
                <h3 className="text-medium font-bold text-gray-800">
                  {mentor.name}
                </h3>
                <span className="text-sm text-gray-500">
                  @{mentor.username}
                </span>
              </div>
              <div className="bg-blue-50 text-blue-700 items-center rounded-lg text-center p-1 px-2">
                {mentor.jobTitle}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="text-yellow-500 w-4 h-4" />
                <span className="flex gap-2 text-gray-600 text-sm">
                  {mentor.rating}
                </span>
              </div>
              <button className="flex items-center cursor-pointer mt-4 px-4 py-1 rounded-lg bg-blue-700 text-white transition">
                View Profile
              </button>
            </card>
          ))}
        </div>
      </div>
    </main>
  );
}
