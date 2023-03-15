import "./styles.css";
import List from "./components/List";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <div className="App">
      <h1>Reach me</h1>
      <List />
      <div className="introdiv">
        <div className="introdiv1">
          <p className="intro">
            <h3>Discription</h3>I am Bhavya This page take you through My
            profile, My projects and my intrests you can see my experties by
            reaching these sites.
          </p>
        </div>
      </div>
    </div>
  );
}
