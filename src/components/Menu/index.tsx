import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';



export function Menu({model}: {model: Pick<MenuItem, "label" | "items" | "url" | "icon" | "separator">[]}) {
    return <MegaMenu model={model} breakpoint="960px" />
}