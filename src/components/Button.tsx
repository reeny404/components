type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export function Button({ label, ...rest }: ButtonProps) {
  const Component = rest.href ? 'a' : 'button';

  return (
    <Component
      className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      {...rest}
    >
      {label}
    </Component>
  );
}
