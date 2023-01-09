import React, {
  InputHTMLAttributes,
  createContext,
  forwardRef,
  useRef,
  Children,
  cloneElement,
} from "react";

interface PinxContext {
  value?: string[];
  activeInput?: number;
  inputRefs?: any;
  handleKeyDown?: (index: number) => (ev: any) => void;
  handleChange?: (index: number) => (ev: any) => void;
  handleFocus?: (index: number) => (ev: any) => void;
}

const Context = createContext<PinxContext>({});
const usePinx = () => React.useContext(Context);

interface RootProps {
  children: React.ReactNode | React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children }) => {
  const [activeInput, setActiveInput] = React.useState<number>(0);
  const [value, setValue] = React.useState<string[]>(
    Children.map(children, () => "") as string[]
  );
  const inputRefs = useRef([]);

  const next = () => {
    const next = activeInput + 1;
    if (next < inputRefs.current.length) {
      (inputRefs.current[next] as any).focus();
    }
  };
  const handleFocus = (index: number) => () => {
    if (index !== activeInput) setActiveInput(index);
  };
  const handleKeyDown = (index: number) => (ev: any) => {
    if (ev.key === "Backspace" && value[index] === "") {
      const prev = index - 1;
      if (prev >= 0) {
        (inputRefs.current[prev] as any).focus();
      }
    }
  };
  const handleChange = (index: number) => (ev: any) => {
    const { value } = ev.target;
    setValue((prev) => {
      const next = [...prev];
      next[index] = value[0] || "";
      return next;
    });
    if (value.length > 0) next();
  };

  const ctxValue = {
    value,
    inputRefs,
    next,
    handleKeyDown,
    handleChange,
    handleFocus,
  };

  return (
    <Context.Provider value={ctxValue}>
      {Children.map(children, (child, i) =>
        cloneElement(child as React.ReactElement, { index: i })
      )}
    </Context.Provider>
  );
};

interface PinProps extends InputHTMLAttributes<HTMLInputElement> {
  index: number;
}

export const Pin = forwardRef<HTMLInputElement, PinProps>(
  ({ index, ...props }, ref) => {
    const { value, inputRefs, handleFocus, handleChange, handleKeyDown } =
      usePinx();

    const handleRef = (el: any) => {
      inputRefs.current[index] = el;
      if (typeof ref == "function") ref(el);
      else if (ref && ref.current) ref.current = el;
    };

    return (
      <input
        {...props}
        type="text"
        value={value?.[index]}
        onInput={handleChange?.(index)}
        onFocus={handleFocus?.(index)}
        onKeyDown={handleKeyDown?.(index)}
        ref={handleRef}
      />
    );
  }
);
