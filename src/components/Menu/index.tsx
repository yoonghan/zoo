"use client"
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

const monitorAttribute = "data-self"
const breakPoint = 960

export function Menu({model}: {model: Pick<MenuItem, "label" | "items" | "url" | "icon" | "separator">[]}) {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < breakPoint)

    useLayoutEffect(() => {
        const updateSize = () => {
            setIsMobile(window.innerWidth < breakPoint)
        }
        window.addEventListener('resize', updateSize);
        return () => {window.removeEventListener('resize', updateSize)}
    }, [isMobile])

    const topMenuRenderer = useCallback((item:any) => {
        return (
            <a href={(!isMobile || !item.items)?item.url:undefined} id={item.label} 
                onMouseOver={(e) => {
                    const currentTarget = e.currentTarget
                    const nextElement = currentTarget.parentElement?.nextElementSibling as HTMLElement|undefined|null
                    if(item.items && nextElement?.style?.zIndex === '' && !isMobile) {
                        currentTarget.setAttribute(monitorAttribute, item.label)
                        currentTarget.click()

                    }
                }} 
                onClick={(e) => {
                    const currentTarget = e.currentTarget
                    if(currentTarget.getAttribute(monitorAttribute) === item.label) {
                        e.preventDefault()
                        currentTarget.removeAttribute(monitorAttribute)
                    } 
                }}
                className="p-menuitem-link" 
                tabIndex={-1} 
                aria-hidden="true" 
                data-pc-section="action">
                <span className="p-menuitem-text" data-pc-section="label">{item.label}</span>
                {item.items && <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-icon p-submenu-icon" aria-hidden="true" data-pc-section="submenuicon"><path d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z" fill="currentColor"></path></svg>}
            </a>
        );
    }, [isMobile]);

    const remapModel:{
        items: MenuItem[][]|undefined;
        template: (item: any) => JSX.Element;
        label?: string | undefined;
        url?: string | undefined;
        icon?: any;
        separator?: boolean | undefined;
    }[] = useMemo(() => model.map((menuItem) => ({
        ...menuItem,
        items: menuItem.items ? [menuItem.items as MenuItem[]]: undefined, //required to transform
        template: topMenuRenderer
    })),[topMenuRenderer])

    return <nav><MegaMenu model={remapModel} breakpoint={`${breakPoint}px`} /></nav>
}