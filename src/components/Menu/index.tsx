import { MegaMenu, MenuItem } from 'primereact/megamenu';

export function Menu({model}: {model: MenuItem}) {
    return <MegaMenu model={model} breakpoint="960px" />
}