import Heading from "./components/Heading";
import PersonalInfo from "./components/PersonalInfo";
import Qualification from "./components/Qualification";
import Courses from "./components/Courses";

export default function App() {
  return (
    <>
      <Heading />
      <form>
        <PersonalInfo />
        <Qualification />
        <Courses />
      </form>
    </>
  );
}