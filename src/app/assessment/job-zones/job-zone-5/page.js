import Link from "next/link";

export default function jobZone5() {
  return (
    <div className="block-group block-padding content-center">
      <h1 className="titleH1">
        Information On Job Zone 5: Extensive Job Preparation
      </h1>
      <div>
        <h2>
          <strong>Experience</strong>
        </h2>
        <p>
          Extensive skill, knowledge, and experience are needed for these
          careers. Many require more than five years of experience. For example,
          surgeons must complete four years of college and an additional five to
          seven years of specialized medical training to be able to do their
          job.
        </p>
        <h2>
          <strong>Training</strong>
        </h2>
        <p>
          Employees may need some on-the-job training. However, the person will
          usually have the needed skills, knowledge, work-related experience,
          and training before starting the job.
        </p>
        <h2>
          <strong>Education</strong>
        </h2>
        <p>
          Most of these careers need a graduate school education. For example,
          they may require a master’s degree, and some require a Ph.D., M.D., or
          J.D. (law degree).
        </p>
        <h2>
          <strong>Examples</strong>
        </h2>
        <p>
          These careers often involve coordinating, training, supervising, or
          managing the activities of others to accomplish goals. Very advanced
          communication and organizational skills are required. Examples include
          pharmacists, lawyers, astronomers, biologists, clergy, physician
          assistants, and veterinarians.
        </p>
        <div className="button-container mt-10">
          <div className="blueBut">
            <Link href="/assessment/job-zones">
                <button>Back</button>
            </Link>
          </div>
        </div>
        <section class="gap"></section>
      </div>
    </div>
  );
}
