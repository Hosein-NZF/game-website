<template>
  <v-container>
    <div class="subscribe">
      <h2 class="subscribe__head">Subscribe to get<br />Updates</h2>

      <div class="email-container">
        <input
          class="subscribe__put"
          type="text"
          placeholder="Enter your email address"
        />
        <button class="subscribe__btn">Subscribe</button>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "SubscribeGetUpdates",
};
</script>

<style scoped>
.subscribe {
  background: linear-gradient(90deg, #4056a0 0%, #33b6e8 51.04%, #4056a0 100%);
  border-radius: 30px;
  width: 100%;
  padding-bottom: 40px;
  margin: 150px 0;
}
.subscribe__head {
  color: #fff;
  font-size: 60px;
  text-align: center;
  padding-top: 50px;
}
.email-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.subscribe__put {
  color: #0c0d21;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
  height: 38px;
  width: 250px;
  padding: 0 15px;
}
.subscribe__put:focus {
  outline: unset;
}
.subscribe__btn {
  background-color: #0c0d21;
  height: 38px;
  border-radius: 0 12px 12px 0;
  padding: 0 15px;
}
.theme--light .subscribe__btn {
  color: #fff;
}

@media (max-width: 600px) {
  .subscribe__head {
    font-size: 45px;
  }
}
</style>
