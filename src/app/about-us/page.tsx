import { ButtonLink } from "@/components/Button";
import Styles from "./about-us.module.css";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";

const miniLinks: MiniMenuItems[] = [
  {
    hashId: "about-us",
    title: "About Us",
  },
  {
    hashId: "vision",
    title: "Vision",
  },
  {
    hashId: "mission",
    title: "Mission",
  },
  {
    hashId: "five-pillars",
    title: "Five Pillars",
  },
  {
    hashId: "journey-through-time",
    title: "Journey Through Time",
  },
];

export default function About() {
  return (
    <>
      <MiniMenu model={miniLinks} />
      <main className={Styles["about-us"]}>
        <article className="primary" id={miniLinks[0].hashId}>
          <h1 className="text-4xl text-center font-bold">
            Zoo Negara - {miniLinks[0].title}
          </h1>
          <p className="mt-10">
            Zoo Negara Malaysia is managed by the Malaysian Zoological Society,
            a non-governmental organization established to create the first
            local zoo for Malaysians. Zoo Negara was officially opened on 14th
            November 1963 and has matured into a well-known zoo all around the
            world. We have a total of over 5137 specimen from 476 species of
            mammals, birds, reptiles, amphibians and fish.
          </p>
          <p>
            Zoo Negara covers 110 acres of land which is situated only 5km from
            the city of Kuala Lumpur. Over the years, the zoo has transformed
            itself to an open concept zoo with over 90% of its animals being
            kept in spacious exhibits with landscape befitting its nature. We
            are working in making sure that the old zoo concept is changed
            entirely.
          </p>
          <center className="m-10">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/RSWHGcC-6nE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </center>
        </article>
        <article>
          <h2 className="text-xl font-bold" id={miniLinks[1].hashId}>
            Zoo Negara - {miniLinks[1].title}
          </h2>
          <p>
            To be one of the world’s premier zoological park and aquaria
            dedicated to conservation, recreation, education, training and
            research of various animal and plant species.
          </p>
        </article>
        <article>
          <h3 className="text-xl font-bold" id={miniLinks[2].hashId}>
            Zoo Negara - {miniLinks[2].title}
          </h3>
          <p>
            To provide an outstanding and dynamic habitat for animals and plant
            life and incorporating high quality animal health care and
            husbandry.
          </p>
          <p>
            To be the leader and innovator in wildlife conservation, recreation,
            education, training and research.
          </p>
          <p>
            To collaborate and disseminate scientific knowledge to local,
            regional and worldwide zoos through our science-based approach to
            wildlife management.
          </p>
        </article>

        <article id={miniLinks[3].hashId} className={Styles["five-pillars"]}>
          <h4 className="text-2xl font-bold">
            Zoo Negara - The {miniLinks[3].title} We Stand On
          </h4>
          <div>
            <strong>1) Education</strong>
            <p>
              We believe that education is the only key in creating awareness on
              wildlife conservation. Zoo Negara is an open classroom for young
              minds to learn and nurture their interest and care for wildlife.
              Check out our Education Package for schools and even for you!
            </p>
          </div>
          <div>
            <strong>2) Conservation</strong>
            <p>
              What will the world be without wildlife? Conserving Malaysian
              wildlife is one of our main missions. Animals such as the False
              Gharial and the Milky Storks are highly endangered wildlife that
              is not so well known compared to the Malayan Tiger or the Bornean
              Orang Utan. Zoo Negara has managed to breed these two species and
              we are currently working with the local Wildlife Department in
              releasing them back into the wild!
            </p>
          </div>
          <div>
            <strong>3) Research</strong>
            <p>
              Zoo Negara provides a haven knowledge and experience for all.
              Researchers students from the Zoology, Biology and Veterinary
              fields have a multitude of choices when doing their research at
              the zoo as we have more than 400 species to choose from. We
              welcome everybody (includiing foreigners) to enter our doors of
              knowledge.
            </p>
          </div>
          <div>
            <strong>4) Recreation</strong>
            <p>
              Entertainment is part of the Malaysian culture and the zoo is not
              an exception. Our animal shows potray the best in animal
              behaviour, all natural. Our animal shows are educational so
              visitors will be able to learn and have fun at the same time. Our
              shows are definitely not circus acts.
            </p>
          </div>
          <div>
            <strong>5) Training</strong>
            <p>
              Zoo Negara strives to provide the very best in assisting other
              zoos in Malaysia through its vast strong knowledge and experience
              in the field of wildlife management. Further more, we are actively
              involved in the national and international zoological community
              thereby contributing to Malaysia&apos;s overall national role.
            </p>
          </div>
        </article>

        <section className="primary pb-24 text-center" id={miniLinks[4].hashId}>
          <h5 className="text-4xl font-bold mb-6">{miniLinks[4].title}</h5>
          <p className="mb-12">
            If you are interested in our humble beginnings, the research paper
            below is available for download.
          </p>
          <center>
            <ButtonLink
              href="/docs/zoo-negara-journey-through-time.pdf"
              download={true}
              styling="Secondary"
              target="external"
            >
              Download our papers
            </ButtonLink>
          </center>
        </section>
      </main>
    </>
  );
}
