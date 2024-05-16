"use client";

import ProgressBar from "../components/ProgressBar";
import Page from "../app/welcome/page";

import { AnswersProvider } from "./answersContext";

export default function Home() {
  return (
    <AnswersProvider>
      <Page />
    </AnswersProvider>
  );
}
