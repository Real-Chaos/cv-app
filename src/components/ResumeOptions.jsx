import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ResumeOptions = () => {
  return (
    <div className="resume-options">
      <div className="clear-resume">
        <FontAwesomeIcon icon={faTrash} />
        <p>Clear Resume</p>
      </div>
      <div className="show-example">
        <p>Load Example</p>
      </div>
    </div>
  )
}


export default ResumeOptions