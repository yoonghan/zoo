import { Link } from "@/components/Link";
import { zooProfile } from "@/config/profile";

type Administration = {
  department: string;
  email: string;
  departmentFunction: string;
};

export type ContactUsProps = {
  phoneNumber1: string;
  phoneNumber2: string;
  administration: Administration[];
};

export default function ContactUs() {
  const preDefinedData = zooProfile.contactus;

  return (
    <main className="my-16">
      <article>
        <h1 className="text-xl font-bold">Contact Us</h1>

        <p className="mt-8">
          For any enquiries, call our general lines{" "}
          <Link href={`tel:${preDefinedData.phoneNumber1}`}>
            {preDefinedData.phoneNumber1}
          </Link>{" "}
          /{" "}
          <Link href={`tel:${preDefinedData.phoneNumber2}`}>
            {preDefinedData.phoneNumber2}
          </Link>{" "}
          and ask for the following Department:
        </p>
      </article>

      {preDefinedData.administration.map((administration) => (
        <article key={administration.department}>
          <h2 className="text-lg font-bold">{administration.department}</h2>
          <div className={"text-sm"}>
            Email:{" "}
            <Link href={`mailto:${administration.email}`}>
              {administration.email}
            </Link>
          </div>
          <div>{administration.departmentFunction}</div>
        </article>
      ))}
    </main>
  );
}
