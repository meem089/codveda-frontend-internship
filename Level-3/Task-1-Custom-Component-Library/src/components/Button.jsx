import PropTypes from "prop-types";

function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  ariaLabel,
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500",
    secondary:
      "bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:ring-slate-500",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
    outline:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-500",
  };

  const sizes = {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-7 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "outline",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string,
};

export default Button;