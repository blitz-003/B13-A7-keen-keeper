import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFriends } from "../../api/friendsApi";

import {
  AlarmClock,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
} from "lucide-react";

const FriendDetail = () => {
  const { id } = useParams();

  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriend = async () => {
      const friends = await getFriends();

      const foundFriend = friends.find((f) => f.id === Number(id));

      setFriend(foundFriend);
      setLoading(false);
    };

    fetchFriend();
  }, [id]);

  if (loading) {
    return <p>Loading friend...</p>;
  }

  if (!friend) {
    return <p>Friend not found</p>;
  }

  const statusColor =
    friend.status === "overdue"
      ? "bg-red-500"
      : friend.status === "on-track"
        ? "bg-emerald-800"
        : "bg-orange-500";

  return (
    <div
      className="
    grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-8
    gap-4
    mx-auto
    px-4
    lg:px-0
    my-10
    max-w-7xl
  "
    >
      {/* PROFILE CARD */}
      <div
        className="
        border rounded-xl p-6 flex flex-col items-center text-center gap-4

        lg:col-start-1
        lg:col-end-3

        lg:row-start-1
        lg:row-end-6
        
      "
      >
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full"
        />

        <h1 className="text-2xl font-bold">{friend.name}</h1>

        <span className={`text-white px-3 py-1 rounded-full ${statusColor}`}>
          {friend.status}
        </span>

        <div className="flex flex-wrap justify-center gap-2">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-600">{friend.bio}</p>

        <p className="text-sm text-gray-500">{friend.email}</p>
      </div>

      {/* SNOOZE */}
      <button
        className="
        border rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition

        lg:col-start-1
        lg:col-end-3

        lg:row-start-6
        lg:row-end-7
        p-4
      "
      >
        <AlarmClock />
        Snooze
      </button>

      {/* ARCHIVE */}
      <button
        className="
        border rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition

        lg:col-start-1
        lg:col-end-3

        lg:row-start-7
        lg:row-end-8
        p-4
      "
      >
        <Archive />
        Archive
      </button>

      {/* DELETE */}
      <button
        className="
        border rounded-xl flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 transition

        lg:col-start-1
        lg:col-end-3

        lg:row-start-8
        lg:row-end-9
        p-4
      "
      >
        <Trash2 />
        Delete
      </button>

      {/* DAYS CARD */}
      <div
        className="
        border rounded-xl flex flex-col justify-center items-center text-center

        lg:col-start-3
        lg:col-end-4

        lg:row-start-1
        lg:row-end-4
        p-4
      "
      >
        <h2 className="text-3xl font-bold">{friend.days_since_contact}</h2>

        <p className="text-gray-500">Days Since Contact</p>
      </div>

      {/* GOAL CARD */}
      <div
        className="
        border rounded-xl flex flex-col justify-center items-center text-center

        lg:col-start-4
        lg:col-end-5

        lg:row-start-1
        lg:row-end-4
        p-4
      "
      >
        <h2 className="text-3xl font-bold">{friend.goal}</h2>

        <p className="text-gray-500">Goal (Days)</p>
      </div>

      {/* NEXT DUE CARD */}
      <div
        className="
        border rounded-xl flex flex-col justify-center items-center text-center

        lg:col-start-5
        lg:col-end-6

        lg:row-start-1
        lg:row-end-4
        p-4
      "
      >
        <h2 className="text-lg font-bold">{friend.next_due_date}</h2>

        <p className="text-gray-500">Next Due</p>
      </div>

      {/* RELATIONSHIP GOAL */}
      <div
        className="
        border rounded-xl p-6 sm:flex-col sm:gap-y-10 md:flex items-center justify-between

        lg:col-start-3
        lg:col-end-6

        lg:row-start-4
        lg:row-end-6
      "
      >
        <div className="space-y-2">
          <p className="text-emerald-800 font-semibold">Relationship Goal</p>

          <h2 className="text-xl font-bold">
            Connect every {friend.goal} days
          </h2>
        </div>

        <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition mt-4">
          Edit
        </button>
      </div>

      {/* QUICK CHECK-IN */}
      <div
        className="
        border rounded-xl p-6

        lg:col-start-3
        lg:col-end-6

        lg:row-start-6
        lg:row-end-9
      "
      >
        <p className="text-emerald-700 font-semibold mb-4">Quick Check-In</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* CALL */}
          <button className="bg-gray-100 rounded-xl p-6 flex flex-col items-center gap-2 hover:bg-gray-200 transition">
            <Phone />
            <span>Call</span>
          </button>

          {/* TEXT */}
          <button className="bg-gray-100 rounded-xl p-6 flex flex-col items-center gap-2 hover:bg-gray-200 transition">
            <MessageSquare />
            <span>Text</span>
          </button>

          {/* VIDEO */}
          <button className="bg-gray-100 rounded-xl p-6 flex flex-col items-center gap-2 hover:bg-gray-200 transition">
            <Video />
            <span>Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
