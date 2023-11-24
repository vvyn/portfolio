import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-slate-100 p-4">
        <nav className="flex justify-between px-4">
          <h1 className="text-2xl text-indigo-950">vvyn</h1>
          <ul className="flex items-center text-indigo-950">
            <li onClick={() => window.open("https://github.com/vvyn")} className="ml-6 cursor-pointer">GitHub</li>
            <li onClick={() => window.open("https://www.linkedin.com/in/vvyn/")} className="ml-6 cursor-pointer">LinkedIn</li>
            <li>
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white px-4 py-2 rounded-xl ml-6 cursor-pointer"
              >
                Resume
                </div>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
        <div className="w-auto py-32 bg-blue-100">
          about
        </div>
        <div className="mt-10">expirence</div>
        <div className="flex">
          <div className="py-32 bg-gray-100 rounded-xl m-10 w-1/2">JPMC</div>
          <div className="py-32 bg-gray-100 rounded-xl m-10 w-1/2">Above & Beyond Studios, Inc.</div>
        </div>
        <div className="">projects</div>
        <div className="flex mt-10 mx-10">
          <div className="bg-indigo-100 py-32 w-1/3 rounded-xl">PawMatch</div>
          <div className="ml-10 bg-indigo-100 py-32 w-1/3 rounded-xl">Escapade</div>
          <div className="ml-10 bg-indigo-100 py-32 w-1/3 rounded-xl">HateDeception</div>
        </div>
        <div className="flex mt-10 mx-10">
          <div className="bg-indigo-100 py-32 w-1/3 rounded-xl">AIS Website</div>
          <div className="ml-10 bg-indigo-100 py-32 w-1/3 rounded-xl">HackAI Website</div>
          <div className="ml-10 bg-indigo-100 py-32 w-1/3 rounded-xl">Conceal & Reveal</div>
        </div>
        <div className="flex mt-10 mx-10">
          <div className="bg-indigo-100 py-32 w-1/3 rounded-xl">Kids-U: Online Form and Forgot Password Function</div>
          <div className="ml-10 bg-indigo-100 py-32 w-1/3 rounded-xl">Foodies</div>
          <div className="ml-10 bg-indigo-100 py-32 w-1/3 rounded-xl">OnlyRizz</div>
        </div>
        <div className="mt-10">other</div>
        <div className="flex">
          <div className="py-32 bg-gray-100 rounded-xl m-10 w-1/2">certifications: aws</div>          <div className="py-32 bg-gray-100 rounded-xl m-10 w-1/2">coding languages: js, ts, python, java, c++</div>
        </div>
        <div className="flex">
          <div className="py-32 bg-gray-100 rounded-xl m-10 w-1/2">technologies: bitbucket, github</div>
          <div className="py-32 bg-gray-100 rounded-xl m-10 w-1/2">frameworks: react, react native, ionic, angular</div>
        </div>
      </main>
    </div>
  );
}

export default App;
