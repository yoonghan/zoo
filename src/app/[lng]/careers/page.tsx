import { Link } from "@/components/Link";
import { zooProfile } from "@/config/profile";

export default function Career({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <section>
        <h1 className="text-2xl font-bold">Zoo Negara - Career</h1>
        <article>
          <p>Please refer to the official Zoo Negara website to view careers:</p>
          <Link
            href={zooProfile.careerLink}
            className="text-blue-500 hover:underline"
            >Official Zoo Negara Careers</Link>
        </article>
      </section>
    </main>
  );
}
