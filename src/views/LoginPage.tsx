import { createSignal } from "solid-js";
import { useLogin } from "../store/login";

export default () => {
  const [name,setName] = createSignal("");
  const [pass,setPass] = createSignal("");
  const clickLogin = async () => {
    console.log(name(),pass())
    await useLogin.login(name(), pass());
  };

  return (
    <>
      <div class="h-4/5 flex flex-col items-center justify-center">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
                value={name()}
                onInput={e=>setName(e.currentTarget.value)}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
                value={pass()}
                onInput={e=>setPass(e.currentTarget.value)}
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" onClick={clickLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
