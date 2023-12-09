import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
	return (
		<div className='navigate'>
			<nav>
				<ul>
					<li>
						<div className='content-nav'>
							<FontAwesomeIcon icon={faFileLines} />
							<p>Content</p>
						</div>
					</li>
					<li>
						<div className='customize-nav'>
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              <p>Customize</p>
            </div>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation

