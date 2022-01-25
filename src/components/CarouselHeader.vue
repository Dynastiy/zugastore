<template>
 <div>
    <div class="mb-4">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://wallpapertag.com/wallpaper/full/5/c/1/237072-gorgerous-4k-gaming-wallpapers-1920x1080.jpg" class="d-block  w-100"   alt="Game" />
        </div>
        <div class="carousel-item">
          <img src="https://wallpapercave.com/wp/NcKygwi.jpg" class="d-block w-100 " alt="Game" />
        </div>
        <div class="carousel-item">
          <img src="https://getwallpapers.com/wallpaper/full/1/c/b/13271.jpg" class="d-block w-100 "  alt="Game" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
 </div>
</template>

<style scoped>
.carousel img {
    object-fit: cover;
    opacity: 0.3;
    height: 400px;
    border-radius: 5px;
  }
  .carousel-item {
    border-radius: 5px;
    max-height: 100vh;
    background: black;
    overflow: hidden;
  }
  .carousel-indicators li {
    width: 12px;
    height: 12px;
    /* border-radius: 50%; */
  }
</style>
