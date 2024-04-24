import { formatStringAsId } from "@/util/idGenerator";
import { useMemo } from "react";
import style from "./accordion.module.css";
import { htmlConvertor } from "@/util/htmlConvertor";

type AccordionItem = {
  label: string;
  content: string;
};

type AccordionProps = AccordionItem[];

export function Accordion({
  model,
  groupName,
}: {
  model: AccordionProps;
  groupName: string;
}) {
  const renderedAccordions = useMemo(
    () =>
      model.map((accordianItem, idx) => {
        const id = `${idx}-${formatStringAsId(accordianItem.label)}`;
        return (
          <div key={accordianItem.label} className={style.tab}>
            <input type="radio" id={id} name={groupName} />
            <label htmlFor={id} className={style["tab-label"]}>
              {accordianItem.label}
            </label>
            <div className={style["tab-content"]}>
              <p>{htmlConvertor(accordianItem.content)}</p>
            </div>
          </div>
        );
      }),
    [model, groupName]
  );

  return <div className={style.accordion}>{renderedAccordions}</div>;
}
