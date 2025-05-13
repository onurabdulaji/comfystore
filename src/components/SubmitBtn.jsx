import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSumbitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSumbitting}
    >
      {isSumbitting ? (
        <>
          <span className="loading loading-spinner">Sending...</span>
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitBtn;
