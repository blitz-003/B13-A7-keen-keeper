import { useMemo, useState } from "react";
import { useCommunication } from "../../hooks/useCommunication";

const Timeline = () => {
  const { communications } = useCommunication();
  const [filter, setFilter] = useState("all");

  // Filter logic
  const filtered = useMemo(() => {
    if (filter === "all") return communications;

    return communications.filter(
      (item) => item.type?.toLowerCase() === filter.toLowerCase(),
    );
  }, [communications, filter]);

  // Sort latest → oldest
  const sorted = useMemo(() => {
    return [...filtered].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
    );
  }, [filtered]);

  // Icon mapping (from public/assets)
  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return "/assets/call.png";
      case "Text":
        return "/assets/text.png";
      case "Video":
        return "/assets/video.png";
      default:
        return "/assets/text.png";
    }
  };

  // Date formatting
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* TITLE (NO SUBTITLE) */}
      <h1 className="text-3xl font-bold">Timeline</h1>

      {/* DROPDOWN FILTER */}
      <div className="w-full">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md px-3 py-2 w-64"
        >
          <option value="all">Timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {/* RECORDS */}
      <div className="space-y-4">
        {sorted.length === 0 ? (
          <p className="text-gray-500">No records found</p>
        ) : (
          sorted.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 flex items-start gap-4 text-left"
            >
              {/* ICON */}
              <img
                src={getIcon(item.type)}
                alt={item.type}
                className="w-10 h-10"
              />

              {/* CONTENT */}
              <div className="flex flex-col text-left">
                {/* MAIN TEXT */}
                <p className="font-semibold">
                  {item.type} with {item.name}
                </p>

                {/* DATE */}
                <p className="text-sm text-gray-500">
                  {formatDate(item.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
