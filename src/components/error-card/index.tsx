import { Error } from "../../enums/error.enum";

export default function ErrorCard({ error }: { error: Error }) {
  const getErrorMessage = () => {
    switch (error) {
      case Error.FETCHING:
        return "it occurred when trying to obtain the data of the city of Brastlewark.";
      default:
        return "it's something internal and that we are already working to solve it. Please try again in a few minutes 😄";
    }
  };
  return (
    <div className="error-card-container">
      <div className="error-card">
        <div className="error-card-title">
          We're so sorry, there was an error! 😞
        </div>
        <div className="error-card-description">
          The only thing you can know about the error is that{" "}
          {getErrorMessage()}
        </div>
        <div className="error-card-description">
          You can reload the page to try again. If the problem persists, please
          feel free to contact our great support team 🚀
        </div>
      </div>
    </div>
  );
}
