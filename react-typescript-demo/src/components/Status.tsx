type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message: string = "";
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error fetching data!";
  }

  return <div>Status - {message}</div>;
};

export default Status;
