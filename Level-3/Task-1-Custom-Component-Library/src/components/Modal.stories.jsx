import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Welcome"
        >
          <p>
            This is a reusable and accessible modal component.
          </p>

          <div className="mt-5">
            <Button
              variant="secondary"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};