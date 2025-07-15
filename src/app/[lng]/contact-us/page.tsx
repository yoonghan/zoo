import { Link } from "@/components/Link";
import { TranslatorProps, withTranslator } from "@/components/util/hoc/withTranslator";
import { zooProfile } from "@/config/profile";
import { getTranslation } from "@/i18n";
import { generateSiteMeta } from "@/util/generateMeta";
import { Metadata } from "next";


type Props = {
  params: Promise<{ lng: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { lng } = await params
  const { t } = await getTranslation(lng, "pages")

  return generateSiteMeta(lng, t('headers.contactUs.title'), t('headers.contactUs.description'))
}

type Administration = {
  department: string;
  email: string;
  departmentFunction: string;
};

export type ContactUsProps = {
  phoneNumber1: string;
  phoneNumber2: string;
  hrEmail: string;
  marketingEmail: string;
  donationEmail: string;
  administration: Administration[];
  eventNumber: string;
  customerserviceEmail: string;
};

function ContactUs({ t }: TranslatorProps) {
  const preDefinedData = zooProfile.contactus;

  return (
    <main className="pb-24">
      <article>
        <h1>{t('contactUs.title')}</h1>

        <p className="pt-8">{t('contactUs.description')} [<Link href="https://zoonegara.my/contact.html" target="_blank">1</Link>]</p>

        <p>
          {t('contactUs.enquiry1')}{" "}
          <Link href={`tel:${preDefinedData.phoneNumber1}`}>
            {preDefinedData.phoneNumber1}
          </Link>{" "}
          /{" "}
          <Link href={`tel:${preDefinedData.phoneNumber2}`}>
            {preDefinedData.phoneNumber2}
          </Link>{" "}
          {t('contactUs.enquiry2')}:
        </p>
      </article>

      {preDefinedData.administration.map((administration) => (
        <article key={administration.department}>
          <h2 className="text-lg font-bold">{t(administration.department)}</h2>
          <div className={"text-sm"}>
            Email:{" "}
            <Link href={`mailto:${administration.email}`}>
              {administration.email}
            </Link>
          </div>
          <div>{t(administration.departmentFunction)}</div>
        </article>
      ))}
    </main>
  );
}

export default withTranslator(ContactUs, "pages")