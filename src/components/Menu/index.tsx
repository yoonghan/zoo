import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';

export function Menu({model}: {model: MenuItem[]}) {
    return <MegaMenu model={model} breakpoint="960px" />
}