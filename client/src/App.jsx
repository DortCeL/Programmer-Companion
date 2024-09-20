import "./App.css";
import Header from "./components/Header";
import ProjectComponent from "./components/ProjectComponent";
import TodoComponent from "./components/TodoComponent";

function App() {
	return (
		<>
			<Header />
			<div className='grid grid-cols-2 w-screen h-screen'>
				<div className='bg-blue-300 p-6'>
					<ProjectComponent />
				</div>
				<div className='bg-red-400'>
					<TodoComponent />
				</div>
			</div>
		</>
	);
}

export default App;
