import { Component, ReactNode, createElement } from "react";
import { Button} from "antd";

import { AntdButtonContainerProps } from "../typings/AntdButtonProps";
//import { BadgeSample } from "./components/BadgeSample";
import "./ui/AntdButton.css";

//import { ButtonProps } from "antd/es/button";

export class AntdButton extends Component<AntdButtonContainerProps> {
    private readonly onClickHandler = this.onClick.bind(this);


    render(): ReactNode {

        return (
            <Button
                type={this.props.buttonType}
                shape={this.props.buttonShape}
                size={this.props.buttonSize}
                danger={this.props.buttonDanger}
                disabled={this.props.buttonDisabled}
                block={this.props.buttonBlock}
                ghost={this.props.buttonGhost}
                //icon={this.props.buttonIcon}
                onClick={this.onClickHandler}>
                 {this.props.caption}
            </Button>
        );
    }


    private onClick(): void {
        if (this.props.onClickEvent && this.props.onClickEvent.canExecute) {
            this.props.onClickEvent.execute();
        }
    }
}
