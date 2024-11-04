import { RiSignalWifiErrorFill } from "react-icons/ri";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <div className="text-7xl text-red-600">
        <RiSignalWifiErrorFill />
      </div>
      <div>
        <h4 className="text-7xl text-black font-bold ">Page Not Found</h4>
      </div>
    </div>
  );
};

export default Error;