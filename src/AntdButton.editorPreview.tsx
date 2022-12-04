import { Component, ReactNode, createElement } from "react";

// import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { Button } from "antd";
import { AntdButtonPreviewProps } from "../typings/AntdButtonProps";

export class preview extends Component<AntdButtonPreviewProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                <Button
                    type={this.props.buttonType}
                    shape={this.props.buttonShape}
                    size={this.props.buttonSize}
                    danger={this.props.buttonDanger}
                    disabled={this.props.buttonDisabled}
                    block={this.props.buttonBlock}
                    ghost={this.props.buttonGhost}
                >
                    {this.props.caption}
                </Button>
            </div>
        );
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }
}

export function getPreviewCss(): string {
    return require("./ui/AntdButton.css");
}
