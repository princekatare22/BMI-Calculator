import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="heading">Admission Form</h1>
      <div className="adform">
        <form>
          <p>
            <label htmlFor="name">Student Name : </label>
            <input type="text" className="inputtext" />
            <br />
          </p>
          <p>
            <label htmlFor="enrollment">Enrollment Number : </label>
            <input type="text" className="inputtext" />
            <br />
          </p>
          <p>
            <label htmlFor="branch">Branch : </label>
            <select>
              <option value="CSE" selected>
                Computer Science Engineering
              </option>
              <option value="Mech">Mechanical Engineering</option>
              <option value="Chem">Chemical Engineering</option>
              <option value="ECE">Electrical Engineering</option>
            </select>
            <br />
          </p>
          <p>
            <label htmlFor="batch">Batch : </label>
            <input type="text" className="inputtext" />
            <br />
          </p>
          <p>
            <h4 className="text1">Your Experience : </h4>
            <textarea rows="10" cols="60">
              Write about your experience in your Summer Internship
            </textarea>
            <br />
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
