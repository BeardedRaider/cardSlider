import './App.css';

function App() {
  return (
    <div className="w-3/4 m-auto">
      <div className='mt-20'>
        {data.map((d) => (
          <div>
            <div>
              <img src={d.img} alt="" />
            </div>

            <div>
              <p>{d.name}</p>
              <p>{d.job}</p>
              <button>View Profile</button>
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
  img: "../public/users/user1.jpg",
  job: "Software Engineer",
  },
  {
  name: "John Doe",
  img: "/users/user2.jpg",
  job: "Software Engineer",
  },
  {
  name: "John Doe",
  img: "./public/users/user3.jpg",
  job: "Software Engineer",
  },
  {
  name: "John Doe",
  img: "./public/users/user4.jpg",
  job: "Software Engineer",
  },
  {
  name: "John Doe",
  img: "./public/users/5.jpg",
  job: "Software Engineer",
  },
]

export default App;

