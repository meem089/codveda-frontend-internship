import { useState } from "react";
import Input from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Input
          label="Full Name"
          name="fullName"
          placeholder="Enter your name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    );
  },
};

export const Required = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          required
        />
      </div>
    );
  },
};

export const WithError = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Input
          label="Email"
          name="emailError"
          type="email"
          placeholder="Enter your email"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          error="Please enter a valid email address."
        />
      </div>
    );
  },
};

export const Disabled = {
  render: () => {
    const [value] = useState("Disabled input");

    return (
      <div className="w-80">
        <Input
          label="Username"
          name="username"
          value={value}
          onChange={() => {}}
          disabled
        />
      </div>
    );
  },
};