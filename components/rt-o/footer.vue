<template>
  <footer class="rooftop-footer flex-row">
    <div class="footer-container">
      <div class="to-top-wrapper">
        <rt-o-to-top />
      </div>
      <div class="footer-content flex-row">
        <logo class="obenstadt-logo" />
        <div class="copy">© 2022 <a href="https:www.obenstadt.de" class="footer-link">obenstadt.de</a></div>
        <div class="footer-links flex-row">
          <NuxtLink class="footer-link" to="/impressum">Impressum</NuxtLink>
        </div>

      </div>

    </div>

  </footer>
</template>

<script setup lang="ts">
import logo from "../../assets/images/obenstadt-logo.svg"
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

footer {
  width: 100%;
  min-height: 177px;
  background-color: $black;
  color: $white;
  align-content: center;
  justify-content: center;
  margin: auto 0 0 0;

  .footer-container {
    width: $inner-container;
    margin: auto;
  }

  .to-top-wrapper {
    margin-top: -90px;
  }

  .footer-content {
    width: 100%;
    margin: auto 0;

    >* {
      margin: auto $space-small;
    }

    .copy,
    .footer-link {
      color: $white;
      padding: 0 $space-tiny;
    }
  }

  .obenstadt-logo {
    // margin: auto 0;
  }

}
</style>