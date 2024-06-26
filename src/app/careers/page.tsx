import { Link } from "@/components/Link";
import { zooProfile } from "@/config/profile";

export default function Career() {
  return (
    <main>
      <section>
        <h1 className="text-2xl font-bold">Zoo Negara - Career</h1>
        <article>
          <h2 className="text-xl font-bold mt-8">Job Title : General Worker</h2>
          <h3>Salary Scale : RM 1,500.00 - RM 2,875.00</h3>

          <div className="mt-4">
            <strong className="text-lg">Requirements:</strong>
            <ul className="list-disc mb-2 ml-8">
              <li>Minimum SPM holder</li>
              <li>Age 18 years old and above</li>
              <li>
                Ability to read and write in Bahasa Malaysia to enable
                understand and follow written instruction and write simple
                report on his work area including animal behavior and enclosures
                needs
              </li>
              <li>
                Ability to observe animal behavior patterns to enable alert
                supervisors of unusual behavior
              </li>
              <li>Ability to undertake basic animal health treatment</li>
              <li>Ability to handle animals in normal circumstances</li>
              <li>Ability to exhibit and behave courteously to visitors</li>
              <li>
                Ability to work as a team with other keepers to ensure high
                quality animal care
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <strong className="text-lg">Responsibilities:</strong>
            <ul className="list-disc mb-2 ml-8">
              <li>To feed the animals with food provided by the kitchen</li>
              <li>To provide continuous supply of clean water</li>
              <li>To keep animal clean (where it is safe to do)</li>
              <li>
                To help safely handle the animals to enable to facilitate
                feeding, cleaning and administer basic health treatment
              </li>
              <li>
                To constantly observe animal behavior and accurately record
                behavior patterns and report unusual behavior to the supervisors
              </li>
              <li>
                To regularly clean enclosure and dispose of animal droppings and
                any unwanted debris
              </li>
              <li>
                To prevent encroachment by pests that would endanger animals’
                health and safety
              </li>
              <li>
                To inspect animal enclosure, identity areas that require
                maintenance and repairs, undertake minor repairs and report
                major discrepancies to the senior keeper
              </li>
              <li>To check and securely lock animal enclosures at all times</li>
              <li>To ensure visitors view and observe the animal safely</li>
              <li>
                To treat visitors with courtesy and to provide necessary
                assistance
              </li>
              <li>
                To provide correct information or direct visitors to locations
                for more complex
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <strong className="text-lg">Benefits:</strong>
            <ul className="list-disc mb-2 ml-8">
              <li>Quarters</li>
              <li>Laundry Allowance</li>
              <li>Transportation Allowance</li>
              <li>Meal</li>
              <li>Panel clinic</li>
              <li>Dental</li>
              <li>Insurance</li>
            </ul>
          </div>
        </article>
        <div className="mt-8">
          Interested applicants should submit a detailed curriculum vitae,
          recent photo, current & expected salary and contact number by email to{" "}
          <Link href={`mailto:${zooProfile.contactus.hrEmail}`}>
            {zooProfile.contactus.hrEmail}
          </Link>
          .
        </div>
        <hr className="my-8" />
        <article>
          <h4 className={"text-xl"}>e-Forms</h4>

          <table className="w-full mt-8">
            <thead>
              <tr>
                <th>Application Forms</th>
                <th>Download Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employment Application Form</td>
                <td>
                  <Link
                    href="/docs/career/Employment_Application_Form.pdf"
                    download={true}
                    target="_blank"
                  >
                    Download PDF
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
}
