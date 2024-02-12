import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="notfound">
      <div>
        <h1>4 <span>🤷‍♀️</span>4</h1>
      </div>
      <div>
        <NavLink to="/">
          <button>Go to home page</button>
        </NavLink>
      </div>
    </main>
  );
}
