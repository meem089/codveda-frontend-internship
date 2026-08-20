import PropTypes from "prop-types";

function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  error = "",
  required = false,
  disabled = false,
  ariaLabel,
}) {
  const inputId = `input-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
        {required && (
          <span
            className="ml-1 text-red-600"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-100 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
            : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200"
        }`}
      />

      {error && (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default Input;