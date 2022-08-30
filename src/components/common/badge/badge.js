import { Wrapper } from "./badge.e";

function Badge({
    style,
    color,
    outline,
    rounded,
    soft,
    onClick,
    ghost,
    text,
    icon,
    uppercase,
}){
    return(
        <Wrapper
            style={style}
            onClick={onClick}
            className={` ${color ? color : ""} ${outline ? "outline": ""} ${rounded ? "rounded" :""}
            ${soft ? `soft soft-${soft}` : ""} ${ghost ? `ghost ghost-${ghost}`: ""} ${icon ? `icon icon-${icon}` : ""} ${uppercase ? `uppercase` : ""}
            `}
        >
           {text}
        </Wrapper>
    )
}

export default Badge;