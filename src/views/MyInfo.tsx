import type { Component } from "solid-js";

export default () => {
  return (
    <>
      <div class="h-4/5 flex flex-col justify-center lg:w-1/3 mx-auto">
        <div class="stats stats-vertical shadow-xl">
          <div class="stat">
            <div class="stat-title">Username</div>
            <div class="stat-value">Username</div>
          </div>

          <div class="stat">
            <div class="stat-title">Balance</div>
            <div class="stat-value">4,200</div>
          </div>

          <div class="stat">
            <div class="stat-title">School</div>
            <div class="stat-value">1,200</div>
          </div>

          <div class="stat">
            <div class="stat-title">School</div>
            <div class="stat-value">1,200</div>
          </div>
        </div>
      </div>
    </>
  );
};
