import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { loginUser } from "@/hooks/useAuth";
import LoginPage from "@/app/login/page";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/hooks/useAuth", () => ({
  loginUser: jest.fn(),
}));

jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
  };
});

describe("LoginPage", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it("should render the login form", () => {
    render(<LoginPage />);

    expect(screen.getByRole("heading", { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Insira seu login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Insira sua senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
  });

  it("should call loginUser and redirect on successful login", async () => {
    (loginUser as jest.Mock).mockResolvedValue(true);
    const user = userEvent.setup();

    render(<LoginPage />);

    await user.type(screen.getByPlaceholderText(/Insira seu login/i), "testuser");
    await user.type(screen.getByPlaceholderText(/Insira sua senha/i), "password123");
    await user.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(loginUser).toHaveBeenCalledWith({ login: "testuser", password: "password123" });
    expect(mockPush).toHaveBeenCalledWith("/");
  });

  it("should not redirect on failed login", async () => {
    (loginUser as jest.Mock).mockResolvedValue(false);
    const user = userEvent.setup();

    render(<LoginPage />);

    await user.type(screen.getByPlaceholderText(/Insira seu login/i), "testuser");
    await user.type(screen.getByPlaceholderText(/Insira sua senha/i), "wrongpassword");
    await user.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(loginUser).toHaveBeenCalledWith({ login: "testuser", password: "wrongpassword" });
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("should navigate to the register page when clicking 'Cadastrar'", async () => {
    const user = userEvent.setup();

    render(<LoginPage />);

    await user.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(screen.getByRole("button", { name: /Cadastrar/i })).toBeInTheDocument();
  });
});
