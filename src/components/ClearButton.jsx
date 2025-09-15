import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export default function ClearButton({ clearState }) {
  const navigate = useNavigate();

  const handleClick = () => {
    clearState();
    navigate("/");
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        onClick={handleClick}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
        ⌂
      </Button>
    </div>
  );
}
