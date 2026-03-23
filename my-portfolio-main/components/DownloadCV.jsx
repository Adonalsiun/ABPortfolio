"use client";

import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const DownloadCV = () => {
  const router = useRouter();

  const handleDownloadClick = () => {
    router.push("/about");
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownloadClick}
    >
      <span>More About Me</span>
      <FiArrowRight className="text-xl" />
    </Button>
  );
};

export default DownloadCV;
