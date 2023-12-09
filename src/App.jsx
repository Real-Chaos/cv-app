import DisplayResume from './components/DisplayResume'
import Navigation from './components/Navigate'
import ResumeDetails from './components/ResumeDetails'
import ResumeOptions from './components/ResumeOptions'
import './styles/index.css'

function App() {
	return (
		<>
			<div className='app'>
				<div className='app-content'>
					<div className='app-left-view'>
						<Navigation />
						<div>
							<ResumeOptions />
							<ResumeDetails />
						</div>
					</div>
					<DisplayResume />
				</div>
			</div>
		</>
	)
}

export default App
