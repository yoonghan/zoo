import { Accordion } from "@/components/Accordion";
import { zooFaq } from "@/config/faq";

export default function Faq() {
  return (
    <>
      <main>
        <article>
          <h1 className="text-4xl font-bold text-center">
            Frequent Asked Questions
          </h1>
          <div className="mt-8">
            <Accordion model={zooFaq} groupName="faq" />
          </div>
        </article>
      </main>
    </>
  );
}
