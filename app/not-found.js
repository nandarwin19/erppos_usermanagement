import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full flex-col min-h-[80vh] flex items-center justify-center">
      <h1 className="text-xl tablet:text-3xl">
        Sorry to say that. We can't find that page
      </h1>
      <Image
        src="/img/notFound.gif"
        alt="404 Not Found"
        width={300}
        height={300}
      />
    </div>
  );
};

export default NotFound;
