import { CuiIconsPack } from 'bpd-cui-icons/esm/index';
import * as React from 'react'
import { GeneralObject } from '../../../../core/models';
import { PageWithHeaderBase } from '../../../../components/base/PageWithHeaderBase';
import { mapObjectToArray } from '../../../../core/functions';
import { copyText } from '../../../../utils/function';
import { is } from 'bpd-toolkit/dist/esm/index';
import { toast } from '../../../../core/cui';
import { useIsLoading } from '../../../../components/hooks/loading';
import { IsLoading } from '../../../../components/base/IsLoading';

interface CuiIconPackItem {
    name: string;
    data: string;
    selected: boolean;
    index: number;
}

export function CuiDocsIconPackBuilder() {
    const [icons, setIcons] = React.useState<CuiIconPackItem[]>([]);
    function onClearSelectionClick() {
        setIcons(icons.map(icon => {
            icon.selected = false;
            return icon
        }))
    }

    function onSelectAllClick() {
        setIcons(icons.map(icon => {
            icon.selected = true;
            return icon
        }))
    }

    function onBuildClick() {
        let outObj = icons.reduce<GeneralObject<string>>((out: GeneralObject<string>, current: CuiIconPackItem) => {
            if (current.selected) {
                out[current.name] = current.data;
            }
            return out;
        }, {});

        if (is(outObj)) {
            copyText(JSON.stringify(outObj)).then(() => {
                toast("Package has been copied")
            })
        }
    }

    React.useEffect(() => {
        // Map icons object to array
        setIcons(mapObjectToArray(CuiIconsPack, (icon: string, iconData: string, index: number) => {
            return {
                name: icon,
                data: iconData,
                selected: false,
                index: index
            }
        }))
        return () => { }
    }, [])
    return (<PageWithHeaderBase name="Icons builder" description="Tool which allows to build custom icon pack">
        <div className="cui-flex cui-right">
            <button className="cui-button cui-default" onClick={onSelectAllClick}>Select All</button>
            <button className="cui-button cui-error cui-margin-small-left" onClick={onClearSelectionClick}>Clear</button>
        </div>
        <div className="cui-flex-grid cui-child-width-1-2 cui-child-width-1-3--m cui-child-width-1-4--l">
            {icons.map((icon) => {
                return <div key={icon.index}>
                    <CuiIconPackBuilderCard item={icon} onClick={(item => {
                        let copy = [...icons];
                        copy[item.index] = item;
                        setIcons(copy)
                    })} /></div>
            })}
        </div>
        <div className="cui-container cui-center cui-position-float cui-position-bottom cui-position-center">
            <button className="cui-button cui-default cui-background-default cui-large cui-box-shadow cui-rounded cui-icon-margin" cui-icon="wrench" onClick={onBuildClick}>Build</button>
        </div>
    </PageWithHeaderBase>);
}

export interface CuiIconPackBuilderCardProps {
    item: CuiIconPackItem;
    onClick: (item: CuiIconPackItem) => void
}

export function CuiIconPackBuilderCard(props: CuiIconPackBuilderCardProps) {
    function onSelect() {
        props.item.selected = !props.item.selected;
        props.onClick(props.item);
    }

    function getClass(isSelected: boolean) {
        return "cui-card cui-cursor-pointer cui-margin-small " + (isSelected ? "cui-accent" : "cui-default");
    }
    return (<div className={getClass(props.item.selected)} onClick={onSelect}>
        <div className="cui-flex cui-nowrap">
            <span cui-icon={props.item.name}></span>
            <span className="cui-margin-left cui-overflow-hidden">{props.item.name}</span>
        </div>
    </div>);
}
