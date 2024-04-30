import ProgressBar from "../components/ProgressBar";
import Page from "../app/welcome/page";
import QuizPage from "./quiz/quiz-page";
import carrerspringImg from "../resources/careerspring.png"
import test from "../../public/next.svg"

export default function Home() {
  return (
    <>
      <QuizPage/>
      <img src={test} height="100"width="400"/>
      {/* <Page /> */}
    </>
  );
}
