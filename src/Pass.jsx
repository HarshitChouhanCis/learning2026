import { useState } from "react";

function PasswordValidator() {
  const [password, setPassword] = useState("");

  // Conditions
  const isLengthValid = password.length >= 8;
  const hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  // Calculate strength
  const strength =
    (isLengthValid ? 1 : 0) +
    (hasUpperLower ? 1 : 0) +
    (hasNumber ? 1 : 0);

  const getStrengthText = () => {
    if (strength === 0) return "";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Medium";
    if (strength === 3) return "Strong";
  };

  const getProgressWidth = () => {
    return (strength / 3) * 100 + "%";
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h3>Password Validator</h3>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />

      {/* Progress Bar */}
      <div
        style={{
          height: "10px",
          background: "#ddd",
          marginTop: "10px",
          borderRadius: "5px"
        }}
      >
        <div
          style={{
            height: "100%",
            width: getProgressWidth(),
            background:
              strength === 1
                ? "red"
                : strength === 2
                ? "orange"
                : strength === 3
                ? "green"
                : "transparent",
            borderRadius: "5px",
            transition: "0.3s"
          }}
        ></div>
      </div>

      <p>{getStrengthText()}</p>

      {/* Validation Messages */}
      <ul>
        <li style={{ color: isLengthValid ? "green" : "red" }}>
          At least 8 characters
        </li>
        <li style={{ color: hasUpperLower ? "green" : "red" }}>
          Contains uppercase & lowercase
        </li>
        <li style={{ color: hasNumber ? "green" : "red" }}>
          Contains a number
        </li>
      </ul>
    </div>
  );
}

export default PasswordValidator;