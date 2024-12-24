"use client"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface BadgeProps {
  defaultStatus: string;
}

const CustomBadge: React.FC<BadgeProps> = ({ defaultStatus }) => {
  const [status, setStatus] = useState<string>(defaultStatus); // Use default status as initial value

  return (
    <div className="flex items-center space-x-2">
      {/* Dropdown for selecting status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="To-Let">To-Let</option>
        <option value="Rented">Rented</option>
      </select>

      {/* Badge showing selected status */}
      <Badge
        className={` text-sm rounded-md ${
          status === "To-Let"
            ? "bg-red-500 text-white"
            : "bg-green-500 text-white"
        }`}
      >
        {status}
      </Badge>
    </div>
  );
};

export default CustomBadge;
