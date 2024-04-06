import { formatStringAsId } from "@/util/idGenerator";

type AccordianItem = {
  label: string;
  content: React.ReactNode | string;
};

export type AccordianProps = AccordianItem[];

export function Accordian({ model }: { model: AccordianProps }) {
  const renderAccordians = model.map((accordianItem, idx) => {
    const id = `${idx}-${formatStringAsId(accordianItem.label)}`;
    return (
      <div key={accordianItem.label}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{accordianItem.label}</label>
        <div>{accordianItem.content}</div>
      </div>
    );
  });

  return renderAccordians;
}
