import { ImageSlider } from "@/components/ImageSlider";
import { Link } from "@/components/Link";
import { zooProfile } from "@/config/profile";
import { familyEventImages } from "./config";

export default function FamilyEvent() {
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold text-center mb-10">Family Event</h1>
        <article className="primary anchor-link-header">
          <h2 className="text-2xl font-bold mb-4">
            Family Day/ Corporate Function/ Event
          </h2>
          <p className="mt-4">
            The zoo is a beautiful scenic location to have a family day for
            corporate companies. Besides having a variety on entertaining
            activities to choose from, we even have the facilities to
            accommodate over 3000 people at one time!
          </p>
          <p className="mt-4">
            We have designed a variety of games and activities that you may only
            get at the zoo. Try out our exciting “Zoo Hunt” or our very own “Do
            You Dare” Challenges which are not for the faint of hearts!
          </p>
          <p className="mt-4">
            There are also a number of children activities which are
            incorporated with educational aspects of wildlife. Besides having
            fun, they may learn at the same time!
          </p>
          <p className="mt-4">
            What could even be more fun than getting to know our tame orang
            utans, pythons and birds during a special meet-the-fans session! Zoo
            Negara does not fall short when it comes to facilities; try out our
            open air 12,000 sq feet picnic field located in the heart of the
            zoo, or our air-conditioned theatrette and multi-purpose hall for a
            more personal touch
          </p>
        </article>

        <article className="anchor-link-header">
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
          <ImageSlider width={500} height={374} model={familyEventImages} />
        </article>
      </main>
    </>
  );
}
