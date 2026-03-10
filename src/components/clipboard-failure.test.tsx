import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { toast } from "sonner";

vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

const mockClipboardFailure = () => {
  Object.defineProperty(window.navigator, "clipboard", {
    value: {
      writeText: vi.fn().mockRejectedValue(new Error("clipboard failure")),
    },
    configurable: true,
  });
};

describe("clipboard failures", () => {
  beforeEach(() => {
    mockClipboardFailure();
    vi.clearAllMocks();
  });

  it("shows error toast when ContactSection email copy fails", async () => {
    render(<ContactSection />);

    const emailButton = screen.getByRole("button", { name: /jicoim@iu.edu/i });
    fireEvent.click(emailButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Could not copy email. Please try again.");
    });
    expect(toast.success).not.toHaveBeenCalled();
  });

  it("shows error toast when Footer email copy fails", async () => {
    render(<Footer />);

    const buttons = screen.getAllByRole("button");
    const emailIconButton = buttons[buttons.length - 1];
    fireEvent.click(emailIconButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Could not copy email. Please try again.");
    });
    expect(toast.success).not.toHaveBeenCalled();
  });
});

