import { useState } from "react";

function ModalMovie(props) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSaveComment = () => {
    props.onSaveComment(comment);
  };

  return (
    <div className="modal-movie">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSaveComment}>Save</button>
    </div>
  );
}

export default ModalMovie;
