import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="w-full h-full flex flex-col background relative items-center">
    <h1 className="bg-white rounded-lg text-center
    mt-[40px] w-[90%] py-2 px-10 font-bold text-4xl">Random Gifs</h1>
    <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
      <Random />
      <Tag />
    </div>
  </div>
)}
