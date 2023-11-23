import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-slate-100 p-4">
        <nav className="flex justify-between px-4">
          <h1 className="text-2xl text-indigo-950">vvyn</h1>
          <ul className="flex items-center text-indigo-950">
            <li className="ml-6">About</li>
            <li className="ml-6">Projects</li>
            <li>
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white px-4 py-2 rounded-xl ml-6"
              >
                Resume
                </div>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
        <div className="w-auto py-32 bg-blue-200">
          about
        </div>
        <div className="flex mt-10">
          <div className="ml-10 bg-indigo-200 h-72 w-72 rounded-xl">Project 1</div>
          <div className="ml-10 bg-indigo-200 h-72 w-72 rounded-xl">Project 2</div>
          <div className="ml-10 bg-indigo-200 h-72 w-72 rounded-xl">Project 3</div>
          <div className="ml-10 bg-indigo-200 h-72 w-72 rounded-xl">Project 4</div>
        </div>
      </main>
    </div>
  );
}

export default App;
