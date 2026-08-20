import PropTypes from "prop-types";

function Card({ title, description, children, footer }) {
  const titleId = `card-title-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <article
      aria-labelledby={titleId}
      className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <header>
        <h2
          id={titleId}
          className="text-xl font-bold text-slate-900"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}
      </header>

      <div className="mt-5">{children}</div>

      {footer && (
        <footer className="mt-6 border-t border-slate-100 pt-4">
          {footer}
        </footer>
      )}
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
};

export default Card;