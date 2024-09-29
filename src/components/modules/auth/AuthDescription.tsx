import { Link } from "@nextui-org/link";

const AuthDescription = () => {
  return (
    <div className="w-full md:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-black/50 rounded-t-lg md:rounded-l-lg md:rounded-tr-none text-center md:text-left">
      <h1 className="text-3xl font-bold text-white mb-4">Welcome!</h1>
      <p className="text-gray-300 mb-6">To Travelio.</p>
      <p className="text-gray-300 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        asperiores.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <Link />
      </div>
    </div>
  );
};

export default AuthDescription;
