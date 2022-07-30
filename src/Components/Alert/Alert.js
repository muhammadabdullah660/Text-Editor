import React from "react";
export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        // style={{
        //   backgroundColor: props.mode === "dark" ? "#042745" : "",
        //   color: props.mode === "dark" ? "white" : "",
        // }}
      >
        {capitalize(props.alert.type)}: {capitalize(props.alert.message)}
      </div>
    )
  );
}
Alert.defaultProps = {
  message: "Put your message here",
};
