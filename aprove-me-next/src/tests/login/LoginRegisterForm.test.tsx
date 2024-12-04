import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginRegisterForm from "@/components/login/LoginRegisterForm";

describe("LoginRegisterForm", () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render login and password fields", () => {
    render(<LoginRegisterForm onSubmit={mockSubmit} />);

    expect(screen.getByPlaceholderText(/Insira seu login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Insira sua senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
  });

  it("should call onSubmit with valid data", async () => {
    const user = userEvent.setup();

    render(<LoginRegisterForm onSubmit={mockSubmit} />);

    await user.type(screen.getByPlaceholderText(/Insira seu login/i), "testuser");
    await user.type(screen.getByPlaceholderText(/Insira sua senha/i), "password123");
    await user.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    const formData = mockSubmit.mock.calls[0][0];
    expect(formData).toEqual({
      login: "testuser",
      password: "password123",
    });
  });

  it("should not call onSubmit if fields are empty", async () => {
    const user = userEvent.setup();

    render(<LoginRegisterForm onSubmit={mockSubmit} />);

    await user.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("should display validation messages for invalid input", async () => {
    const user = userEvent.setup();

    render(<LoginRegisterForm onSubmit={mockSubmit} />);

    await user.click(screen.getByRole("button", { name: /Entrar/i }));

    expect(screen.getByText(/Login inválido/i)).toBeInTheDocument();
    expect(screen.getByText(/A senha deve ter pelo menos 6 caracteres/i)).toBeInTheDocument();
  });
});
