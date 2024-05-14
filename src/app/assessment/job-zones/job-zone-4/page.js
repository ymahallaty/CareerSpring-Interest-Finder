import Link from "next/link";

export default function jobZone4() {
  return (
    <div className="block-group block-padding content-center">
      <h1 className="titleH1">
        Information On Job Zone 4: High Job Preparation
      </h1>

      <div>
        <h2>
          <strong>Experience</strong>
        </h2>
        <p>
          Long term work-related skill, knowledge, or experience is needed for
          these careers. For example, an accountant must complete four years of
          college and work several years in the field to be qualified for the
          job.
        </p>
        <h2>
          <strong>Training</strong>
        </h2>
        <p>
          Employees in these careers need several years of work-related
          experience and training. Both on-the-job and classroom job training
          may be needed.
        </p>
        <h2>
          <strong>Education</strong>
        </h2>
        <p>
          Most of these careers need a four-year bachelor’s degree, but some do
          not.
        </p>
        <h2>
          <strong>Examples</strong>
        </h2>
        <p>
          Many of these careers involve coordinating, supervising, managing, or
          training others. Examples include real estate brokers, sales managers,
          database administrators, graphic designers, conservation scientists,
          art directors, and cost estimators.
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
