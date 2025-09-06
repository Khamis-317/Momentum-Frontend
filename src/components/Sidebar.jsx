import {
  MapPin,
  Briefcase,
  Calendar,
  Award,
  Users,
  MessageSquare,
} from "lucide-react";

export default function Sidebar() {
  const user = {
    name: "Alex Johnson",
    username: "alexjohnson",
    jobTitle: "Software Engineer",
    country: "Brazil",
    joinDate: "January 2022",
    about:
      "Passionate software engineer with 5+ years of experience in full-stack development. Always eager to learn new technologies and mentor others in the field.",
    profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
    stats: {
      sessions: 156,
      rating: 4.9,
    },
  };

  return (
    <aside className="h-full shadow-lg rounded-lg top-0 pt-20 bg-white fixed w-[20%]">
      <div className="flex flex-col items-center w-full h-full py-6 px-4 overflow-y-auto">
        {/* Profile Image */}
        <div className="relative mb-6">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Name and Username */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
          <span className="text-sm text-gray-500">@{user.username}</span>
        </div>

        {/* Job Title */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
            <Briefcase className="h-4 w-4" />
            <span className="font-medium">{user.jobTitle}</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{user.country}</span>
          </div>
          {/* Join Date */}
          <div className="flex items-center justify-center gap-1 text-gray-500 text-sm mt-1">
            <Calendar className="h-4 w-4" />
            <span>Joined {user.joinDate}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <MessageSquare className="h-5 w-5 text-green-600 mx-auto mb-1" />
            <p className="font-bold text-lg text-gray-800">
              {user.stats.sessions}
            </p>
            <p className="text-xs text-gray-500">Sessions</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-3 text-center">
            <Award className="h-5 w-5 text-amber-600 mx-auto mb-1" />
            <p className="font-bold text-lg text-gray-800">
              {user.stats.rating}
            </p>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
        </div>

        {/* About Section */}
        <div className="w-full mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">About</h4>
          <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            {user.about}
          </p>
        </div>
      </div>
    </aside>
  );
}
