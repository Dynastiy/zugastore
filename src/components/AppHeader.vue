<template>
  <div>
      <!-- Top Header -->
    <div class="bg-dark">
      <header
        class="main-nav container d-flex justify-content-between align-items-center py-3"
      >
        <div>
          <router-link class="text-white font-weight-bold" to="/">Samzuga App Store</router-link>
        </div>
        <div>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2"
                > <i class="fa fa-search" aria-hidden="true"></i> </span
              >
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<style></style>
