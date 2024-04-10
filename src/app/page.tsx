import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Image
          src="/images/header.jpg"
          width={960}
          height={130}
          alt="Zoo logo"
        />
        <Image
          src="/images/home/zoo-negara-lion.jpg"
          width={960}
          height={320}
          alt="Zoo tiger in water"
        />
        <article className="primary">
          <h1 className="font-bold text-4xl my-4 text-center">
            Welcome to Zoo Negara
          </h1>

          <figure>
            <figcaption className="mb-4">
              Zoo Negara Malaysia is managed by the Malaysian Zoological
              Society, a non-governmental organization established to create the
              first local zoo for Malaysians. Zoo Negara was officially opened
              on 14th November 1963 and has matured into a well-known zoo all
              around the world. We have a total of over 5137 specimen from 476
              species of mammals, birds, reptiles, amphibians and fish.
            </figcaption>

            <Image
              src="/images/home/zoo-negara-entrance.jpg"
              alt="Zoo Entrance"
              width={200}
              height={185}
              className="m-auto"
            />
          </figure>
        </article>
      </main>
    </>
  );
}
