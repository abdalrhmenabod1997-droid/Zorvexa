export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        name,
        email
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email } = req.body;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: "JWT_TOKEN_WILL_BE_GENERATED_LATER",
      user: {
        email
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
