import type { Component } from "solid-js";
import { getInfo } from "../store/info";

export default () => {
  const info = getInfo
  return (
    <>
      <div class="h-4/5 flex flex-col justify-center lg:w-1/3 mx-auto">
        <div class="stats stats-vertical shadow-xl">
          <div class="stat">
            <div class="stat-title">Username</div>
            <div class="stat-value">{info.name}</div>
          </div>

          <div class="stat">
            <div class="stat-title">Balance</div>
            <div class="stat-value">{info.balance}</div>
          </div>

          <div class="stat">
            <div class="stat-title">School</div>
            <div class="stat-value">{info.school}</div>
          </div>

          <div class="stat">
            <div class="stat-title">phone</div>
            <div class="stat-value">{info.phone}</div>
          </div>
        </div>
      </div>
    </>
  );
};
