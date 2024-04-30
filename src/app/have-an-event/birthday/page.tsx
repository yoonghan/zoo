import { ImageSlider } from "@/components/ImageSlider";
import { Link } from "@/components/Link";
import { zooProfile } from "@/config/profile";
import { birthdayImages } from "./config";

export default function BirthdayEvent() {
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold text-center mb-10">Birthday Event</h1>
        <article className="primary anchor-link-header">
          <h2 className="text-2xl font-bold mb-4">
            Birthdays / Zoo Hunt / Explorace
          </h2>
          <p>
            Have you ever wondered how you could come up with a unique yet
            memorable birthday party for your child? Try having it at Zoo Negara
            and we will take care of your every need. We will even bring out
            some tame animals such as Spotty the python and Megat the hornbill
            for a special photography session!
          </p>
        </article>

        <article className="anchor-link-header">
          <h3 className="text-xl font-bold mb-4">The Wild Restaurant</h3>
          <p>
            Kiddy food packages, games and sing along songs awaits your child on
            his/her birthday! For details, please contact{" "}
            <Link href={`telno:${zooProfile.contactus.eventNumber}`}>
              {zooProfile.contactus.eventNumber}
            </Link>
            .
          </p>
          <p className="mt-4">
            For further details, you may contact the Customer Service Department
            of Zoo Negara at{" "}
            <Link href={`telno:${zooProfile.contactus.phoneNumber1}`}>
              {zooProfile.contactus.phoneNumber1}
            </Link>{" "}
            or email us at{" "}
            <Link href={`mailto:${zooProfile.contactus.customerserviceEmail}`}>
              {zooProfile.contactus.customerserviceEmail}
            </Link>
          </p>
        </article>

        <article className="primary anchor-link-header">
          <h4 className="text-xl font-bold mb-4">Our Memorial Photos</h4>
          <ImageSlider width={500} height={374} model={birthdayImages} />
        </article>
      </main>
    </>
  );
}
