import Card from "../Card";
const Home: React.FC = () => {
  return (
    <div className="text-white container mx-auto lg:mt-20 mt-10">
      <div className="bg-emerald-800  p-2">
        <p className="text-7xl text-center font-semibold">HI! I'm Raghav</p>
        <p className=" text-2xl text-center">
          University of Waterloo '27 Computer Science
        </p>
        <p className=" text-2xl text-center">
          {" "}
          Looking for{" "}
          <b className="text-orange-400">Summer'25, Winter'26 Internships</b>
        </p>

      </div>

        <p className=" text-2xl text-center">Add small paragraph description about the myself,hobbies future interests</p>
      <div className="lg:mt-20 container mx-auto mt-10 flex justify-evenly">
        <div className="grid gap-5 lg:gap-10 xl:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
