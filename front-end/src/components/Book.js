import EditBook from "./EditBook";

function Book(props) {
  return (
    <div className="min-w-[350px] max-h-[350px] m-2 p-6 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover block mx-auto h-32 rounded sm:mx-0 sm:shrink-0"
        src={props.cover}
        alt={props.title}
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.title}({props.year})</p>
          <p className="text-slate-500 font-medium">{props.author}</p>
        </div>
        {props.editBook}
      </div>
    </div>
  );
}

export default Book;
