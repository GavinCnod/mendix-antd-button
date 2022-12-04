/**
 * This file was generated from AntdButton.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export type ButtonTypeEnum = "primary" | "default" | "dashed" | "link" | "text";

export type ButtonShapeEnum = "default" | "circle" | "round";

export type ButtonSizeEnum = "large" | "middle" | "small";

export interface AntdButtonContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    caption: string;
    buttonType: ButtonTypeEnum;
    buttonShape: ButtonShapeEnum;
    buttonSize: ButtonSizeEnum;
    buttonBlock: boolean;
    buttonDisabled: boolean;
    buttonDanger: boolean;
    buttonGhost: boolean;
    onClickEvent?: ActionValue;
}

export interface AntdButtonPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    caption: string;
    buttonType: ButtonTypeEnum;
    buttonShape: ButtonShapeEnum;
    buttonSize: ButtonSizeEnum;
    buttonBlock: boolean;
    buttonDisabled: boolean;
    buttonDanger: boolean;
    buttonGhost: boolean;
    onClickEvent: {} | null;
}
