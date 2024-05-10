import Link from "next/link";

const page = () => {
  return (
    <div className="pageDiv">
      <div className="text-center">
      <h1 className="titleH1">
        Special Notice: Proper Use Of O*Net Interest Profiler Results
      </h1>
      </div>
      <p className="py-5">
        The O*NET™M Career Exploration Tools are composed of the WORK IMPORTANCE
        LOCATOR and INTEREST PROFILER products and are owned by the U.S.
        Department of Labor, Employment and Training Administration (DOL/ETA).
        All O*NET Assessment/Counseling Tools are copyrighted. O*NET is a
        trademark of DOL/ETA.
      </p>
      <p className="py-5">
        The DOL/ETA developed the O*NET Career Exploration Tools as career
        counseling, career planning, and exploration tools. In order for each
        tool to provide an obiective assessment, extensive research and
        development was conducted to ensure that the directions, format, items,
        and score reports lead to valid assessment. DOL/ETA adhered to the high
        standards of the American Psychological Association, the American
        Education Research Association, and the National Council on Measurement
        in Education in developing the O*NET Career Exploration Tools. In
        developing the tools, fairness analyses were conducted to ensure that
        score results were equally valid both from a statistical and a usability
        perspective.
      </p>
      <p className="py-5">
        Results provided from the O*NET Career Exploration Tools are part of a
        whole-person approach to the assessment process. They provide useful
        information that individuals can use to identify their strengths, the
        parts of work they like to do, and the parts of work that they may find
        importait. Individuals can use results to identify training needs and
        careers that they may wish to explore further. Individuals are strongly
        encouraged to use additional information about themselves with O NET
        Career Exploration results when making career decisions.
      </p>
      <p className="py-5">
        As such, the use of the O*NET Career Exploration Tools is authorized for
        career exploration, career planning, and career counseling purposes
        only. Each O*NET Career Exploration Tool must be used consistent with
        its own “User’s Guide.” No other use of these tools or any part of the
        tools is valid or authorized.
      </p>
      <p className="py-5">
        All users are bound by the terms of “Special Notice: User’s Agreement.”
        If you use any of the O*NET Career Exploration Tools, you have agreed to
        be bound by the terms of “Special Notice: User’s Agreement.”
      </p>
      <p className="py-5">
        {" "}
        If any of the O*NET Career Exploration Tools is used for a purpose or
        purposes other than career exploration, career planning, and career
        counseling purposes, it is a violation of this agreement and neither the
        U.S. Department of Labor nor the Employment and Training Administration
        is liable for any misuse if the Tools The U.S. Department of Labor and
        the Employment and Training Adminstration reserve the right to pursue
        all legal remedies for violations of this User’s Agreement.
      </p>
      <p className="py-5">
        Recipients of federal assistance from the U.S. Department of Labor must
        ensure that individuals with disabilities are afforded an equal
        opportunity to use services based on the O*NET Career Exploration Tools.
        For further discussion of these obligations, see the Department of
        Labor’s Equal Opportunity Guidance Letter No. 4 L.
      </p>
      <p className="py-5">
        No additional license is required to obtain, copy in whole, use or
        distribute the O*NET Career Exploration Tools. A user must not remove
        any copyright or trademark notice or proprietary legend contained within
        the O”NET Career Exploration Products. Further, all copies and related
        documentation must include the copyright and trademark notices. Users
        must abide by the following instructions on proper trademark usage when
        using O*NET Career Exploration Products:
      </p>
      <ol className="list-decimal px-5">
        <li>
          Since O*NET is trademarked, users must acknowledge the use of O*NET
          Career Exploration Tools in and on their products. The trademark
          symbol must be properly displayed when referring to O*NET. When using
          the O*NET™M name, users must use “O*NET” as an adjective, not as a
          noun or verb, followed by the proper generic product name. For
          example: “…with O#NET Career Exploration Tools,” “…formulated from
          O”NET Career Exploration Tools,” or ” includes information from the
          O*NET Career Exploration Tools,” not “…includes O*NET.” In addition,
          the O*NET name must not-appear in the possessive form.
        </li>
        <p className="py-5">
          Proper trademark citation: O*NET™M is a trademark of the U.S.
          Department of Labor, Employment and Training Administration.
        </p>
        <li>
          The version number of O*NET Career Exploration Tools must be clearly
          stated in and on user products.
        </li>
        <li>
          “O*NET In It” bug with ™M symbol must appear in and on user products.
        </li>
      </ol>
      <p className="py-5">
        O*NET Career Exploration Tools are provided “AS IS” without expressed or
        implied warranties. Certain components and/or files of the software have
        been licensed by third parties to the U.S. Department of Labor. Such
        third parties own and/or have copyrights or other rights in those
        components and these components of the software may not be distributed
        separately. You may contact the U.S. Department of Labor or the National
        Center for O*NET Development for a list of such components and third
        parties. Your use of this software and these components is subject to
        this “Special Notice: User’s Agreement.”
      </p>
      <h1 className="text-3xl">Special Notice: Developer’s Agreement</h1>
      <p className="py-5">
        Users intending to develop other products, software or systems
        applications using O*NET Career Exploration Tools products must agree to
        the <a className="underline" href="https://www.onetcenter.org/license_agreements.html">O*NET Developer’s Agreement.</a>
      </p>
      <button className="mt-10 blueB py-5 text-base leading-7 text-white p-[65px] rounded-md">
        <Link href="/">Back</Link>
      </button>
    </div>
  );
};

export default page;
