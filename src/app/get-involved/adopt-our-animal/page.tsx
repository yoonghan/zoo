import { ButtonLink } from "@/components/Button";
import { Link } from "@/components/Link";
import { zooProfile } from "@/config/profile";
import { htmlConvertor } from "@/util/htmlConvertor";
import React from "react";
import Image from "next/image";
import MiniMenu, { MiniMenuItems } from "@/components/MiniMenu";
import style from "./adopt-our-animal.module.css";

const miniLinks: MiniMenuItems[] = [
  {
    hashId: "adoption-package",
    title: "Adoption Package",
  },
  {
    hashId: "adopting-helps",
    title: "Why Adopting Our Animal Helps?",
  },
  {
    hashId: "adoption-packages",
    title: "Adoption Packages",
  },
  {
    hashId: "enquiries",
    title: "Enquiries",
  },
];

export default function GetInvolved() {
  return (
    <>
      <MiniMenu model={miniLinks} />
      <main>
        <h1 className="text-4xl text-center font-bold my-10">
          Adopt Our Animals
        </h1>
        <article
          className="primary mt-8 anchor-link-header"
          id={miniLinks[0].hashId}
        >
          <h2 className="text-2xl font-bold">{miniLinks[0].title}</h2>
          <p className="mt-2">
            All our animals are up for adoption and you may help us adopt one by
            maintaining its annual food, enrichment and veterinary care. In
            return, you will receive a <strong>certificate</strong> of adoption
            stating your selected animal.
          </p>
          <p className="mt-4">
            Zoo Negara Malaysia has partnered with Ticket2u to create a new way
            for people to donate, allowing donors to support &apos;Adopt An
            Animal&apos; initiatives and Zoo Negara will be getting the
            financial support needed to take care of our animals family.
          </p>
          <div className="mt-8 text-center">
            <ButtonLink href={zooProfile.adoption.url} styling="Secondary">
              {zooProfile.adoption.text}
            </ButtonLink>
          </div>
        </article>

        <article className="anchor-link-header" id={miniLinks[1].hashId}>
          <h3 className="text-2xl font-bold">{miniLinks[1].title}</h3>
          <p>
            You contributions helps contribute financially to support the care
            of our animal family:
          </p>
          <ul className="list-disc ml-4">
            <li>Food and Enrichment</li>
            <li>Health and nutrition</li>
            <li>Habitat Maintenance</li>
          </ul>
        </article>

        <article
          className="primary anchor-link-header"
          id={miniLinks[2].hashId}
        >
          <h4 className="text-2xl font-bold">{miniLinks[2].title}</h4>
          <p className="mt-2">
            In return to your contribution for every donation you will receive
            an <strong>e-certificate</strong>.
          </p>
          {zooProfile.adoption.donations.map((donation) => (
            <div className="mt-4" key={donation.price}>
              <p className={style.donation__price}>
                For donation above <strong>{donation.price}</strong>, receive a:
              </p>
              <ul className="list-disc ml-4">
                {donation.gifts.map((gift) => (
                  <li className="italic" key={gift}>
                    {htmlConvertor(gift)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <figure className="p-3 mt-8">
            <Image
              src="/images/getting-involved/adopt-our-animal/gift.jpg"
              alt="Samples of adoption gifts"
              width={1350}
              height={1350}
            />
            <figcaption className="text-center">Merchandise samples</figcaption>
          </figure>
        </article>

        <article className="anchor-link-header" id={miniLinks[3].hashId}>
          <h5 className="text-2xl font-bold mb-4">{miniLinks[3].title}</h5>
          <p>
            You can check-out more details at our <Link href="/faq">FAQ</Link>{" "}
            page for general questions on our animal adoption programme.
          </p>
          <p className="mt-2">
            For further details, do contact the Public Relations & Marketing
            Department at {zooProfile.contactus.phoneNumber1} or email us at{" "}
            <Link href={zooProfile.contactus.marketingEmail}>
              {zooProfile.contactus.marketingEmail}
            </Link>{" "}
            or{" "}
            <Link href={zooProfile.contactus.donationEmail}>
              {zooProfile.contactus.donationEmail}
            </Link>
            .
          </p>
        </article>
      </main>
    </>
  );
}
