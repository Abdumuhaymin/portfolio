import Image from "next/image";

const Home = () => {
  const imgUrl = "https://i.postimg.cc/59sR5r8Q/IMG-20230327-214043-606.jpg";
  return (
    <div className="h-[100vh] bg-secondary">
      <section className=" container mx-auto flex flex-col lg:flex-row lg:justify-around px-4 justify-center  text-white text-center  py-20">
        <Image
          src={imgUrl}
          className="w-[300px] h-auto rounded-[50%]"
          width={300}
          height={300}
          alt="my img"
        />
        <div>
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">
            Here you can find my projects and contact me.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
