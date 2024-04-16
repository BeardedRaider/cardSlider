import './App.css';

function App() {
  return (
    <div className="w-3/4 m-auto">
      <div className='mt-20'>
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl">
            <div className="h-56 rounded-t-xl bg-green-200 flex justify-center items-center">
              <img src={d.img} alt="" className="h-40 w-40 rounded-full"/>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 p-3">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="">{d.job}</p>
              <button className="bg-green-300 text-white text-lg px-6 py-1 rounded-xl">View Profile</button>
            </div>
          </div>
        ))}

      </div>
    
    </div>
  );
}



const data = [
  {
  name: "John Doe",
  img: "/users/user1.jpg",
  job: "Software Engineer",
  },
  {
  name: "John Smith",
  img: "/users/user2.jpg",
  job: "Software Developer",
  },
  {
  name: "Jane Doe",
  img: "/users/user3.jpg",
  job: "Graphic Designer",
  },
  {
  name: "Sven Doe",
  img: "/users/user4.jpg",
  job: "Product Manager",
  },
  {
  name: "Sam Doe",
  img: "/users/user5.jpg",
  job: "UI/UX Designer",
  },
]

export default App;

