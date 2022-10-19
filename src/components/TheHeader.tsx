import { Show } from "solid-js";
import { useLogin } from "../store/login";

export default () => {
  const isLoggedIn = useLogin.isLoggedIn()
  return (
    <>
      <div class="navbar bg-base-100 rounded-xl shadow-2xl">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Water</a>
        </div>
        <Show when={isLoggedIn}>
        <div class="flex-none dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Temp Code</a>
            </li>
            <li>
              <a>Fixed Code</a>
            </li>
            <li>
              <a>Info</a>
            </li>
          </ul>
        </div>
        </Show>
      </div>
    </>
  );
};
