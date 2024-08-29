import * as React from "react";
import { cn } from "../../lib/utils";
import { PiEyeLight as Eye } from "react-icons/pi";
import { PiEyeSlash as EyeOff } from "react-icons/pi";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          className={cn(
            "h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-colorPrimary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-75",
            icon ? "pl-10" : "pl-3", // Adjust padding-left if there's an icon
            className
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleTogglePassword}
          >
            {showPassword ? <EyeOff color="#004882" size={20} /> : <Eye color="#004882" size={20} />}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
