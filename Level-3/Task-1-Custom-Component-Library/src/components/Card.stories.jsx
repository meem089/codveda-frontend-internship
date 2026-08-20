import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  args: {
    title: "Welcome to Our Platform",
    description:
      "A reusable card component designed for modern web applications.",
    children: (
      <p className="text-sm leading-6 text-slate-600">
        This content can be customized and reused in different parts of an
        application.
      </p>
    ),
  },
};

export const WithFooter = {
  args: {
    title: "Premium Plan",
    description: "Everything you need to build professional applications.",
    children: (
      <div>
        <p className="text-3xl font-bold text-slate-900">$29</p>
        <p className="mt-1 text-sm text-slate-500">per month</p>
      </div>
    ),
    footer: (
      <p className="text-sm font-medium text-indigo-600">
        Start your free trial →
      </p>
    ),
  },
};