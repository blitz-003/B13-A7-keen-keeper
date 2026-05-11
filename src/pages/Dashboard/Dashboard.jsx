import { useEffect, useState } from "react";
import { getFriends } from "../../api/friendsApi";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const data = await getFriends();
      setFriends(data);
      setLoading(false);
    };

    fetchFriends();
  }, []);

  if (loading) {
    return <p className="text-center">Loading friends...</p>;
  }

  // Stats calculations
  const totalFriends = friends.length;

  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const almostDue = friends.filter((f) => f.status === "almost due").length;
  const overdue = friends.filter((f) => f.status === "overdue").length;

  // const interactionsThisMonth = friends.reduce(
  //   (acc, f) => acc + (f.goal || 0),
  //   0,
  // );

  return (
    <div className="space-y-8 container mx-auto">
      {/* HEADER SECTION */}
      <div className="space-y-2 flex flex-col items-center my-20">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-600">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="flex items-center gap-2 bg-emerald-900 text-white px-4 py-2 rounded-md w-fit mt-3">
          <Plus size={18} />
          Add Friend
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-8 border rounded-md text-center">
          <h2 className="text-xl font-bold">{totalFriends}</h2>
          <p>Total Friends</p>
        </div>

        <div className="p-8 border rounded-md text-center">
          <h2 className="text-xl font-bold text-emerald-700">{onTrack}</h2>
          <p>On Track</p>
        </div>

        <div className="p-8 border rounded-md text-center">
          <h2 className="text-xl font-bold text-orange-500">{almostDue}</h2>
          <p>Need Attentation</p>
        </div>

        <div className="p-8 border rounded-md text-center">
          <h2 className="text-xl font-bold text-red-500">{overdue}</h2>
          <p>Interactions this month</p>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* FRIENDS GRID */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="border rounded-lg p-4 text-center space-y-2 cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={friend.picture}
                className="w-16 h-16 mx-auto rounded-full"
              />

              <h3 className="font-semibold">{friend.name}</h3>

              <p className="text-sm text-gray-500">
                {friend.days_since_contact} days since contact
              </p>

              <div className="flex flex-wrap justify-center gap-1">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full text-white ${
                  friend.status === "overdue"
                    ? "bg-red-500"
                    : friend.status === "on-track"
                      ? "bg-emerald-800"
                      : "bg-orange-500"
                }`}
              >
                {friend.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
