interface props {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  deleteTaskFunc: (taskId: string) => void;
  toggleDoneTaskFunc: (taskId: string) => void;
}

export default function TaskCard({
  id,
  title,
  description,
  isDone,
  deleteTaskFunc,
  toggleDoneTaskFunc,
}: props) {
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const toggleDoneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4">
            <h5
              className={
                isDone
                  ? "text-decoration-line-through card-title"
                  : "card-title"
              }
            >
              {title}
            </h5>
          </div>
          <div className="col-lg-4">
            <p
              className={
                isDone
                  ? "text-decoration-line-through card-text"
                  : "card-text"
              }
            >
              {description}
            </p>
          </div>
          <div className="col-lg-2">
            <button
              className="btn btn-success me-2"
              onClick={toggleDoneBtnOnClick}
            >
              Done
            </button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger" onClick={deleteBtnOnClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
