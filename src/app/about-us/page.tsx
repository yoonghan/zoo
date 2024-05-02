import { ButtonLink } from "@/components/Button";
import Styles from "./about-us.module.css";
import MiniMenu from "@/components/MiniMenu";
import Image from "next/image";
import { Link } from "@/components/Link";
import { miniLinks } from "./config";

export default function About() {
  return (
    <>
      <MiniMenu model={miniLinks} />
      <main className={Styles["about-us"]}>
        <h1 className="text-4xl text-center font-bold my-10">About Us</h1>
        <article
          className="primary anchor-link-header"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-4xl text-center font-bold">
            Zoo Negara - {miniLinks[0].title}
          </h2>
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
          <div className="m-10 mx-auto">
            <iframe
              data-testid="youtube"
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/RSWHGcC-6nE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </article>
        <article className="anchor-link-header" id={miniLinks[1].hashId}>
          <h3 className="text-xl font-bold">
            Zoo Negara - {miniLinks[1].title}
          </h3>
          <p>
            To be one of the world’s premier zoological park and aquaria
            dedicated to conservation, recreation, education, training and
            research of various animal and plant species.
          </p>
        </article>
        <article
          className="primary anchor-link-header"
          id={miniLinks[2].hashId}
        >
          <h4 className="text-xl font-bold">
            Zoo Negara - {miniLinks[2].title}
          </h4>
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

        <article
          id={miniLinks[3].hashId}
          className={`${Styles["five-pillars"]} anchor-link-header`}
        >
          <h5 className="text-2xl font-bold">
            Zoo Negara - The {miniLinks[3].title} We Stand On
          </h5>
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
              welcome everybody (including foreigners) to enter our doors of
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

        <section
          className="primary pb-24 text-center anchor-link-header"
          id={miniLinks[4].hashId}
        >
          <h6 className="text-4xl font-bold mb-6">{miniLinks[4].title}</h6>
          <p className="mb-12">
            If you are interested in our humble beginnings, the research paper
            below is available for download.
          </p>
          <ButtonLink
            href="/docs/zoo-negara-journey-through-time.pdf"
            download={true}
            styling="Secondary"
            target="external"
            className="mx-auto"
          >
            Download our papers
          </ButtonLink>
        </section>

        <section
          className="pb-24 text-center anchor-link-header"
          id={miniLinks[5].hashId}
        >
          <h6 className="text-4xl font-bold mb-6">{miniLinks[5].title}</h6>
          <p className="mb-12">
            Few published research papers on Zoo Negara conservations:
          </p>
          <div className={`flex gap-8 flex-col ${Styles["research"]}`}>
            <figure>
              <div>
                <Image
                  src="/images/research/milky-stork.jpg"
                  width={400}
                  height={300}
                  alt="Milky Stork"
                />
              </div>
              <figcaption>
                This research is about Captive Breeding of False Gharial
                (Tomistoma schlegelii) at Zoo Negara, Malaysia. The False
                Gharial is a large fresh water crocodile. Once widespread
                species currently can be found only in Peninsular Malaysia, West
                Borneo, Java and Sumatra. With habitat destruction being the
                main contributor to their disappearance, it is believed that
                there are fewer than 2500 individuals left in the wild. The
                species is listed on Appendix 1 (Endangered) of the Convention
                of International Trade of Endangered Species (CITES).
                <p>
                  <Link
                    href="/docs/research/zoo-negara-research-papers-on-milky-stork.pdf"
                    download={true}
                    target="_blank"
                  >
                    &gt;&gt; Download milky stork papers
                  </Link>
                </p>
              </figcaption>
            </figure>
            <figure>
              <div>
                <Image
                  src="/images/research/false-gharial.jpg"
                  width={400}
                  height={300}
                  alt="False Gahrial"
                />
              </div>
              <figcaption>
                This research is about Captive Breeding of Milky Storks (Myctera
                cinerea) at Zoo Negara, Malaysia. These birds can be found in
                South East Asia. It forages on tidal mudflats, in saline pools,
                fresh water marshes, fishponds and rice-fields. Lost of natural
                habitat and food source has drastic effect on the birds&apos;
                population. The BirdLife classifies the species as vulnerable on
                IUCN Red List. This species is also listed on Appendix 1
                (Endangered) of the Convention of International Trade of
                Endangered Species (CITES).
                <p>
                  <Link
                    href="/docs/research/zoo-negara-research-papers-on-false-gharial.pdf"
                    download={true}
                    target="_blank"
                  >
                    &gt;&gt; Download false gharial papers
                  </Link>
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
