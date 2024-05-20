import Link from "next/link";

export default function jobZone3 (){
    return(
        <div className="block-group block-padding content-center">
            <h1 className="titleH1">Information On Job Zone 3: Medium Job Preparation</h1>
           
            <div className="paragraph">

                <h2>
                    <strong>Experience</strong>
                </h2>
                <p>
                Previous work-related skill, knowledge, or experience is needed for these careers. For example, an electrician must be in an apprenticeship for three to four years or have several years of job training. You may need to pass a test to get a license to do the job.
                </p>
                <h2>
                    <strong>Training</strong>
                </h2>
                <p>
                Employees in these careers need one or two years of training. Both on-the-job experience and informal training with experienced workers may be needed. An apprenticeship program may be a good choice for these careers.
                </p>
                <h2>
                    <strong>Education</strong>
                </h2>
                <p>
                Most of these careers need vocational school training, on-the-job experience, or an associate’s degree.
                </p>
                <h2>
                    <strong>Examples</strong>
                </h2>
                <p>
                These careers usually involve using communication and organizational skills to coordinate, supervise, manage, or train others to accomplish goals. Examples include hydroelectric production managers, desktop publishers, electricians, agricultural technicians, barbers, court reporters and simultaneous captioners, and medical assistants.
                </p>

                <div className="button-container mt-10">
                <Link href="/assessment/job-zones">
                <button className="blueButton">
                  Back
                </button>
                </Link>
                
                </div>
                <section className="gap"></section>
            </div>
        </div>
    )
}