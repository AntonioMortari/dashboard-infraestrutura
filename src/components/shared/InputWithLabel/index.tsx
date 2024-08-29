import { Label } from "../../ui/label";
import { Input, InputProps } from "../../ui/input";
import { ReactNode } from "react";

interface InputWithLabelProps extends InputProps {
    label?: string;
    icon?: ReactNode;
}

const InputWithLabel= ({ label, ...rest}: InputWithLabelProps) => {

    return (
        <div className="grid w-full items-center gap-1.5 mt-[10px] mb-[10px]">
            <Label className="text-colorPrimary font-normal" htmlFor={label}>{label}</Label>

            <Input
                {...rest}
            />
        </div>
    );
}

export { InputWithLabel };