import { Accordion } from "@/components/Accordion";
import { use } from "react";
import { PageParams } from "@/typings/params";

export default function Faq({params}: PageParams) {
  const { lng } = use(params);
  
  const faq = require(`../../../i18n/locales/${lng}/faq`).default

  return (
    <>
      <main>
        <article>
          <h1 className="text-4xl font-bold text-center">
            Frequent Asked Questions
          </h1>
          <div className="mt-8">
            <Accordion model={faq} groupName="faq"/>
          </div>
        </article>
      </main>
    </>
  );
}
