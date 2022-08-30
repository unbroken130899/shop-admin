import { Wrapper } from "./button.e";

function Button({
  color,
  outline,
  rounded,
  soft,
  onClick,
  size,
  full,
  ghost,
  text,
  icon,
  disabled,
  type,
  loading,
}) {
  return (
    <Wrapper
      aria-label="button"
      type={type ? type : "button"}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${color ? color : ""} ${outline ? "outline" : ""} ${
        rounded ? "rounded" : ""
      } ${soft ? `soft soft-${soft}` : ""} ${size ? size : ""} ${
        full ? "full" : ""
      } ${ghost ? `ghost ghost-${ghost}` : ""} ${
        icon ? `icon icon-${icon}` : ""
      }`}
    >
      {loading ? "Loading ..." : text}
    </Wrapper>
  );
}

export default Button;
