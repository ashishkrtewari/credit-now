<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="row window-height">
      <aside
        :class="[
          mobileView
            ? 'fixed full-width fixed-bottom bg-white'
            : 'column full-height overflow-auto bg-secondary text-white',
        ]"
      >
        <nav
          :class="[
            mobileView
              ? 'row justify-between items-center'
              : 'column items-start',
          ]"
        >
          <div class="logo-container" v-if="!mobileView">
            <img src="@/assets/logo.svg" alt="" />
            <p class="text-muted">
              Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </p>
          </div>
          <a
            href="#"
            :class="[mobileView ? 'column' : 'row', 'nav__item items-center']"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <defs></defs>
              <path fill="transparent" d="M0 0h24v24H0z" />
              <path
                class="icon-path"
                d="M23.5 14.772c0 .067 0 .133-.069.133a.149.149 0 01-.138-.133c-.207-.266-10.675-11.323-11.157-11.723-.207-.2-.275-.133-.482.067C11.588 3.182.707 14.639.569 14.838c-.069.067-.138.067-.138-.067a10.912 10.912 0 01-.413-3.663 10.341 10.341 0 011.515-5.062A11.451 11.451 0 019.384.318 11.829 11.829 0 0120.61 3.582a10.907 10.907 0 013.237 6.261 8.818 8.818 0 01.138 1.932 15.1 15.1 0 01-.485 2.997z"
              />
              <path
                class="icon-path"
                d="M3.531 20.034c-.069-.067-.138-.133 0-.266s8.195-8.593 8.402-8.793c.069-.067.138-.067.138 0 .275.333 8.2 8.726 8.4 8.859.069.067.069.133-.069.133a9.34 9.34 0 01-1.515 1.266 11.776 11.776 0 01-5.923 2.131 6.121 6.121 0 01-1.1.067 11.907 11.907 0 01-8.333-3.397z"
              /></svg
            ><span>Home</span>
          </a>
          <a
            href="#"
            :class="[
              mobileView ? 'column' : 'row',
              'nav__item items-center nav__item--active',
            ]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g transform="translate(-2.5 4)">
                <rect
                  class="empty-path"
                  width="24"
                  height="24"
                  transform="translate(2.5 -4)"
                />
                <g transform="translate(2.5 -91.333)">
                  <g transform="translate(0 98.333)">
                    <path
                      class="icon-path"
                      d="M23.5,213.333H.5a.474.474,0,0,0-.5.5v7.053a2.485,2.485,0,0,0,2.5,2.519h19a2.485,2.485,0,0,0,2.5-2.519v-7.053A.474.474,0,0,0,23.5,213.333Zm-20,4.03h4a.5.5,0,0,1,0,1.008h-4a.5.5,0,0,1,0-1.008Zm7,3.023h-7a.5.5,0,0,1,0-1.008h7a.5.5,0,0,1,0,1.008Zm8.5,0a1.68,1.68,0,0,1-1-.3,1.68,1.68,0,0,1-1,.3,2.015,2.015,0,0,1,0-4.03,1.68,1.68,0,0,1,1,.3,1.68,1.68,0,0,1,1-.3,2.015,2.015,0,0,1,0,4.03Z"
                      transform="translate(0 -213.333)"
                    />
                  </g>
                  <g transform="translate(0 90.333)">
                    <path
                      class="icon-path"
                      d="M21.5,85.333H2.5c-1.4,0-2.5,1.378-2.5,3.132v1.253c0,.376.2.626.5.626h23c.3,0,.5-.251.5-.626V88.465C24,86.711,22.9,85.333,21.5,85.333Z"
                      transform="translate(0 -85.333)"
                    />
                  </g>
                </g>
              </g></svg
            ><span>Cards</span>
          </a>
          <a
            href="#"
            :class="[mobileView ? 'column' : 'row', 'nav__item items-center']"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24.25"
              viewBox="0 0 24 24.25"
            >
              <g transform="translate(-2 4.125)">
                <rect
                  class="empty-path"
                  width="24"
                  height="24"
                  transform="translate(2 -4)"
                />
                <g transform="translate(-21.169 -14)">
                  <path
                    class="icon-path"
                    style="
                      stroke: #0c365a;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-width: 0.25px;
                    "
                    d="M35.169,10A11.837,11.837,0,0,0,23.5,22,11.838,11.838,0,0,0,35.167,34a11.33,11.33,0,0,0,6.651-2.2c.5-.473.811-.529.811-1.041l.007-.1a1.075,1.075,0,0,0-1.06-1.09,1.026,1.026,0,0,0-.764.343,9.322,9.322,0,0,1-5.633,1.9,9.7,9.7,0,0,1-9.563-9.833,9.567,9.567,0,1,1,19.127,0,10.009,10.009,0,0,1-.921,4.19,9.724,9.724,0,0,0-.49,1.185l-.007.1a1.078,1.078,0,0,0,1.063,1.092,1.054,1.054,0,0,0,1-.776l0,0A12.189,12.189,0,0,0,46.836,22,11.835,11.835,0,0,0,35.169,10ZM28.653,20.7a1.045,1.045,0,0,0,.3.676,1.026,1.026,0,0,0,.676.3h0a.791.791,0,0,0,.108,0l10.8,0a1.033,1.033,0,1,0,0-2.067l-8.437.012,1.222-1.234a1,1,0,0,0-1.413-1.413l-2.956,2.983a.988.988,0,0,0-.289.632l-.007,0a.654.654,0,0,0,0,.11ZM36.9,27.591a1,1,0,0,0,1.416,0l2.958-2.978a1,1,0,0,0,.289-.629l.007,0s0-.073,0-.108h0a1.039,1.039,0,0,0-.3-.673,1.05,1.05,0,0,0-.676-.3h0a.791.791,0,0,0-.108,0l-10.8,0a1.031,1.031,0,1,0,0,2.062l8.439-.012-1.222,1.237A.987.987,0,0,0,36.9,27.591Z"
                    transform="translate(0 0)"
                  />
                </g>
              </g></svg
            ><span>Payments</span>
          </a>
          <a
            href="#"
            :class="[mobileView ? 'column' : 'row', 'nav__item items-center']"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g transform="translate(-1.5 4)">
                <rect
                  class="empty-path"
                  width="24"
                  height="24"
                  transform="translate(1.5 -4)"
                />
                <g transform="translate(1.5 -4.001)">
                  <path
                    class="icon-path"
                    d="M12,24A12,12,0,0,1,3.515,3.516,12,12,0,0,1,20.485,20.487,11.922,11.922,0,0,1,12,24ZM10.453,9.746v8.837a1.162,1.162,0,0,0,1.161,1.161h.775a1.162,1.162,0,0,0,1.161-1.161V9.746l3.5,3.652a1.159,1.159,0,0,0,1.659.021l.527-.533a1.161,1.161,0,0,0,.342-.827,1.142,1.142,0,0,0-.342-.812L12.823,4.825a1.159,1.159,0,0,0-1.64,0L4.757,11.247a1.155,1.155,0,0,0-.342.824,1.142,1.142,0,0,0,.342.815l.527.533a1.166,1.166,0,0,0,.823.339,1.151,1.151,0,0,0,.842-.36l3.5-3.65Z"
                    transform="translate(0 0)"
                  />
                </g>
              </g></svg
            ><span>Credit</span>
          </a>
          <a
            href="#"
            :class="[mobileView ? 'column' : 'row', 'nav__item items-center']"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g transform="translate(-2 4)">
                <rect
                  class="empty-path"
                  width="24"
                  height="24"
                  transform="translate(2 -4)"
                />
                <g transform="translate(4 -4)">
                  <path
                    class="icon-path"
                    d="M92.817,11.547a5.6,5.6,0,0,0,4.091-1.691A5.58,5.58,0,0,0,98.6,5.773a5.581,5.581,0,0,0-1.7-4.082,5.793,5.793,0,0,0-8.181,0,5.581,5.581,0,0,0-1.7,4.082,5.58,5.58,0,0,0,1.7,4.082A5.605,5.605,0,0,0,92.817,11.547Zm0,0"
                    transform="translate(-82.957)"
                  />
                  <path
                    class="icon-path"
                    d="M19.975,254.17a14.244,14.244,0,0,0-.194-1.515,11.921,11.921,0,0,0-.373-1.523,7.517,7.517,0,0,0-.627-1.42,5.36,5.36,0,0,0-.945-1.23,4.168,4.168,0,0,0-1.358-.852,4.7,4.7,0,0,0-1.733-.313,1.76,1.76,0,0,0-.94.4c-.282.183-.611.4-.979.63a5.612,5.612,0,0,1-1.266.557,4.923,4.923,0,0,1-3.1,0,5.6,5.6,0,0,1-1.265-.557c-.364-.232-.694-.445-.98-.631a1.758,1.758,0,0,0-.939-.4,4.691,4.691,0,0,0-1.733.314,4.165,4.165,0,0,0-1.358.852,5.361,5.361,0,0,0-.945,1.23,7.532,7.532,0,0,0-.627,1.42,11.949,11.949,0,0,0-.373,1.523,14.193,14.193,0,0,0-.194,1.515c-.032.459-.048.935-.048,1.416A3.978,3.978,0,0,0,1.184,258.6a4.264,4.264,0,0,0,3.05,1.111H15.79a4.263,4.263,0,0,0,3.05-1.111,3.976,3.976,0,0,0,1.184-3.012C20.023,255.1,20.007,254.626,19.975,254.17Zm0,0"
                    transform="translate(0 -235.708)"
                  />
                </g>
              </g></svg
            ><span>Settings</span>
          </a>
        </nav>
      </aside>
      <main :class="[{ 'full-height': !mobileView }, 'column col']">
        <div class="row col-auto items-end balance-header">
          <div class="col">
            <p class="text-14 text-height-16">Available Balance</p>
            <div class="row items-center">
              <q-badge class="font-13 text-height-16 text-bold q-px-md q-py-sm"
                >S$</q-badge
              >
              <p class="text-26 q-mb-none text-bold">3,000</p>
            </div>
          </div>
          <q-btn
            :color="!mobileView ? 'accent' : ''"
            :flat="mobileView"
            :text-color="mobileView ? 'info' : ''"
            no-caps
            icon="add_circle"
            label="New Card"
          />
        </div>
        <div class="row col-auto justify-start tab-group">
          <button class="tab-group__tab tab-group__tab--active">
            My debit cards
          </button>
          <button class="tab-group__tab">All company cards</button>
        </div>
        <section
          :class="[
            mobileView
              ? 'column'
              : 'row overflow-auto justify-around full-width',
            'col wrapper',
          ]"
        >
          <div class="col-auto card-container">
            <div class="row justify-end items-center q-mb-md">
              <img
                src="@/assets/remove_red_eye-24px.svg"
                width="16"
                height="16"
                alt=""
                class="q-mr-sm"
              />
              <p
                class="text-12 text-height-20 text-primary text-bold q-ma-none"
              >
                Show card number
              </p>
            </div>
            <div class="card bg-primary text-white">
              <div class="column justify-between full-height no-wrap">
                <div class="row col-auto justify-end">
                  <img
                    class="card__logo"
                    src="@/assets/aspire-logo-1.svg"
                    alt=""
                  />
                </div>
                <div class="row justify-start">
                  <p class="text-bold text-24 text-height-20 full-width">
                    Mark Henry
                  </p>
                  <div
                    class="row justify-start items-center q-mb-md full-width"
                  >
                    <div class="row q-mr-md">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div class="row q-mr-md">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <div class="row q-mr-md">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                    <span class="text-14 text-height-20 text-bold">2020</span>
                  </div>
                  <div class="row justify-center items-center">
                    <p
                      class="text-14 text-height-20 text-bold q-mb-none q-mr-xl"
                    >
                      Thru: 12/20
                    </p>
                    <p class="text-14 text-height-20 text-bold q-ma-none">
                      CVV: &#8727;&#8727;&#8727;
                    </p>
                  </div>
                </div>
                <div class="row col-auto justify-end">
                  <img src="@/assets/visa-logo.svg" alt="" />
                </div>
              </div>
            </div>
            <div
              class="card__actions full-width row justify-between text-center"
            >
              <button class="card__actions__btn">
                <img
                  class="q-mb-sm"
                  src="@/assets/freeze-card.svg"
                  alt="ice crystal icon"
                />
                <p class="q-ma-none">Freeze<br />Card</p>
              </button>
              <button class="card__actions__btn">
                <img
                  class="q-mb-sm"
                  src="@/assets/set-spend-limit.svg"
                  alt="meter guage icon"
                />
                <p class="q-ma-none">Set spend<br />Limit</p>
              </button>
              <button class="card__actions__btn">
                <img class="q-mb-sm" src="@/assets/GPay.svg" alt="GPay icon" />
                <p class="q-ma-none">Add to<br />GPay</p>
              </button>
              <button class="card__actions__btn">
                <img
                  class="q-mb-sm"
                  src="@/assets/replace-card.svg"
                  alt="replace icon"
                />
                <p class="q-ma-none">Replace<br />card</p>
              </button>
              <button class="card__actions__btn">
                <img
                  class="q-mb-sm"
                  src="@/assets/deactivate-card.svg"
                  alt="trash can icon"
                />
                <p class="q-ma-none">Cancel<br />card</p>
              </button>
            </div>
          </div>
          <div class="col column details-container">
            <div class="accordion">
              <h2 class="accordion__header">
                <button class="accordion__button">
                  <img src="@/assets/details.svg" alt="" />Card Details
                </button>
              </h2>
            </div>
            <div class="accordion expanded">
              <h2 class="accordion__header">
                <button class="accordion__button">
                  <img src="@/assets/recent.svg" alt="" />Recent transactions
                </button>
              </h2>
              <div class="accordion__body">
                <div class="transaction__list">
                  <div class="transaction__item">
                    <div class="transaction__icon transaction__icon--retail">
                      <img src="@/assets/file-storage.svg" alt="" />
                    </div>
                    <div class="transaction__details">
                      <q-item-label class="transaction__label"
                        >Hamleys</q-item-label
                      >
                      <q-item-label class="transaction__date" caption lines="1"
                        >20 May 2020</q-item-label
                      >
                      <q-btn
                        class="text-accent row items-center"
                        flat
                        dense
                        no-caps
                        ><q-badge
                          class="
                            transaction__action
                            q-mr-sm q-py-xs q-px-sm
                            rounded-point-75
                          "
                          color="accent"
                        >
                          <img
                            src="@/assets/business-and-finance.svg"
                            alt="" /></q-badge
                        >Refund on debit card</q-btn
                      >
                    </div>
                    <div class="row items-center">
                      <span
                        class="
                          q-mr-md
                          text-bold
                          transaction__amount transaction__amount--credit
                        "
                        >+S$ 150</span
                      >
                      <img src="@/assets/next.svg" alt="" />
                    </div>
                  </div>
                  <div class="transaction__item">
                    <div class="transaction__icon transaction__icon--travel">
                      <img src="@/assets/flights.svg" alt="" />
                    </div>
                    <div class="transaction__details">
                      <q-item-label class="transaction__label"
                        >Hamleys</q-item-label
                      >
                      <q-item-label class="transaction__date" caption lines="1"
                        >20 May 2020</q-item-label
                      >
                      <q-btn
                        class="text-accent row items-center"
                        flat
                        dense
                        no-caps
                        ><q-badge
                          class="
                            transaction__action
                            q-mr-sm q-py-xs q-px-sm
                            rounded-point-75
                          "
                          color="accent"
                        >
                          <img
                            src="@/assets/business-and-finance.svg"
                            alt="" /></q-badge
                        >Charged to debit card</q-btn
                      >
                    </div>
                    <div class="row items-center">
                      <span
                        class="
                          q-mr-md
                          text-bold
                          transaction__amount transaction__amount--debit
                        "
                        >-S$ 150</span
                      >
                      <img src="@/assets/next.svg" alt="" />
                    </div>
                  </div>
                  <div class="transaction__item">
                    <div class="transaction__icon transaction__icon--misc">
                      <img src="@/assets/megaphone.svg" alt="" />
                    </div>
                    <div class="transaction__details">
                      <q-item-label class="transaction__label"
                        >Hamleys</q-item-label
                      >
                      <q-item-label class="transaction__date" caption lines="1"
                        >20 May 2020</q-item-label
                      >
                      <q-btn
                        class="text-accent row items-center"
                        flat
                        dense
                        no-caps
                        ><q-badge
                          class="
                            transaction__action
                            q-mr-sm q-py-xs q-px-sm
                            rounded-point-75
                          "
                          color="accent"
                        >
                          <img
                            src="@/assets/business-and-finance.svg"
                            alt="" /></q-badge
                        >Charged to debit card</q-btn
                      >
                    </div>
                    <div class="row items-center">
                      <span
                        class="
                          q-mr-md
                          text-bold
                          transaction__amount transaction__amount--debit
                        "
                        >-S$ 150</span
                      >
                      <img src="@/assets/next.svg" alt="" />
                    </div>
                  </div>
                  <div class="transaction__item">
                    <div class="transaction__icon transaction__icon--retail">
                      <img src="@/assets/file-storage.svg" alt="" />
                    </div>
                    <div class="transaction__details">
                      <q-item-label class="transaction__label"
                        >Hamleys</q-item-label
                      >
                      <q-item-label class="transaction__date" caption lines="1"
                        >20 May 2020</q-item-label
                      >
                      <q-btn
                        class="text-accent row items-center"
                        flat
                        dense
                        no-caps
                        ><q-badge
                          class="
                            transaction__action
                            q-mr-sm q-py-xs q-px-sm
                            rounded-point-75
                          "
                          color="accent"
                        >
                          <img
                            src="@/assets/business-and-finance.svg"
                            alt="" /></q-badge
                        >Charged to debit card</q-btn
                      >
                    </div>
                    <div class="row items-center">
                      <span
                        class="
                          q-mr-md
                          text-bold
                          transaction__amount transaction__amount--debit
                        "
                        >-S$ 150</span
                      >
                      <img src="@/assets/next.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="accordion__body-action">
                  <button>View all card transactions</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { computed, onMounted, onUnmounted } from "@vue/runtime-core";
export default {
  setup() {
    const screenWidth = ref(window.innerWidth);
    const screenHeight = ref(window.innerHeight);
    const onResize = () => {
      screenWidth.value = window.innerWidth;
      screenHeight.value = window.innerHeight;
    };
    const mobileView = computed(() => screenWidth.value < 600);
    onMounted(() => {
      window.addEventListener("resize", onResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", onResize);
    });
    return {
      screenWidth,
      screenHeight,
      mobileView,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/quasar.variables.scss";
$aside-size: 21.25rem;
$width-xs: 599px;

.border-radius-half {
  border-radius: 0.5rem;
}
.border-radius-one {
  border-radius: 1rem;
}
.transparent-button {
  background-color: transparent;
  border: none;
}
body {
  .overflow-auto {
    overflow: auto;
  }
  .round {
    border-radius: 50%;
  }
  .rounded-point-75 {
    border-radius: 0.75rem;
  }
  .bg-info-light {
    background-color: $info-light;
  }
  .text-muted {
    color: $muted;
  }
  .text-black {
    color: $black;
  }
  .text-12 {
    font-size: 0.75rem;
  }
  .text-13 {
    font-size: 0.8125rem;
  }
  .text-14 {
    font-size: 0.875rem;
  }
  .text-24 {
    font-size: 1.5rem;
  }
  .text-26 {
    font-size: 1.625rem;
  }
  .text-height-16 {
    line-height: 1rem;
  }
  .text-height-18 {
    line-height: 1.125rem;
  }
  .text-height-20 {
    line-height: 1.25rem;
  }
}
aside {
  z-index: 1;
  nav {
    padding: 0.5625rem 1.875rem;
  }
  .nav__item {
    font-size: 0.5625rem;
    line-height: 0.8125rem;
    text-decoration: none;
    color: $grey;

    .q-icon {
      width: 1.5rem;
      height: 1.5rem;
    }
    .icon-path {
      fill: $grey;
    }
    &--active {
      color: $primary;
      font-weight: bold;
      .icon-path {
        fill: $primary;
      }
    }
    .empty-path {
      fill: rgba(255, 255, 255, 0);
    }
  }
  @media only screen and (min-width: #{$width-xs}) {
    padding: 3rem 3.4375rem 3rem;
    width: $aside-size;
    .logo-container {
      margin-bottom: 1.25rem;
      img {
        margin-bottom: 1.1875rem;
      }
    }
    .nav__item {
      font-size: 1rem;
      line-height: 2rem;
      margin: 1.9375rem 0;
      color: $white;
      svg {
        margin-right: 1rem;
      }
    }
    .icon-path {
      fill: $white;
    }
    nav {
      padding: 0;
    }
  }
}
main {
  color: $black;
  padding: 1.5rem;
  @media only screen and (min-width: #{$width-xs}) {
    width: calc(100vw - #{$aside-size});
    padding: 3.75rem;
  }
  .balance-header {
    margin-bottom: 2rem;
    .q-badge {
      margin-right: 0.75rem;
    }
  }
  .tab-group {
    margin-bottom: 1.25rem;
    &__tab {
      @extend .transparent-button;
      border-bottom: 2px solid transparent;
      color: $black;
      cursor: pointer;
      @extend .text-14;
      @extend .text-height-20;
      margin-right: 2rem;
      opacity: 0.6;
      &--active {
        opacity: 1;
        font-weight: 500;
        border-color: $info;
        cursor: default;
      }
    }
  }
  .wrapper {
    @extend .border-radius-half;
    @media only screen and (min-width: #{$width-xs}) {
      box-shadow: rgba(0, 0, 0, 0.078) 0 2px 12px;
      padding: 2rem 2.5rem 2.5rem;
      .card-container {
        padding-right: 1.4375rem;
        margin-bottom: 0;
      }
      .card {
        width: 25.875rem;
        height: 15.53125rem;
      }
    }
  }
  .card-container {
    margin-bottom: 1.5rem;
  }
  .card {
    @extend .border-radius-one;
    margin-bottom: 2rem;
    padding: 1.6875rem;
    height: 50vw;
    .card__logo {
      width: 5.21875rem;
    }
    .dot {
      background-color: white;
      border-radius: 50%;
      margin-right: 6.77px;
      width: 10px;
      height: 10px;
    }
  }
  .card__actions {
    @extend .border-radius-one;
    background-color: $info-light;
    padding: 1.25rem 1.6875rem;

    &__btn {
      @extend .transparent-button;
      img {
        width: 2rem;
      }
    }
  }
  .details-container {
    @media only screen and (min-width: #{$width-xs}) {
      padding-left: 1.4375rem;
    }
  }
  .accordion {
    @extend .border-radius-half;
    border: 1px solid #f0f0f0;
    margin-bottom: 1.5rem;
    @media only screen and (min-width: #{$width-xs}) {
      width: 22.875rem;
    }
    .accordion__header {
      @extend .text-14;
      line-height: 1.125rem;
      margin: 0;
    }
    button.accordion__button {
      @extend .border-radius-half;
      border: 1px solid #f5f5f5;
      background-color: $info-light;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 1.5rem;

      img {
        margin-right: 0.75rem;
      }

      &::after {
        content: "";
        background-image: url("../assets/down-arrow.svg");
        background-repeat: no-repeat;
        background-size: 1.25rem;
        margin-left: auto;
        width: 1.25rem;
        height: 1.25rem;
        transition: transform 0.2s ease-in-out;
      }
    }
    .accordion__body {
      background-color: lighten($color: $primary, $amount: 50%);
      .accordion__body-action {
        button {
          @extend .text-13;
          @extend .text-height-18;
          font-weight: 500;
          border: none;
          border-radius: 0 0 0.4rem 0.4rem;
          background-color: lighten($color: $primary, $amount: 50%);
          color: $primary;
          padding: 1rem;
          width: 100%;
        }
      }
    }
    &.expanded {
      button.accordion__button::after {
        transform: rotate(180deg);
      }
    }
  }
  .transaction__list {
    border-bottom: 1px solid #f0f0f0;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: $white;
  }
  .transaction__item {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem 1.5rem 1rem;
    position: relative;
    &:not(:last-of-type)::after {
      content: "";
      height: 1px;
      width: 75%;
      position: absolute;
      bottom: 0;
      left: 50%;
      background-color: #f5f5f5;
      transform: translateX(-50%);
    }
    .transaction__icon {
      width: 2.75rem;
      height: 2.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      @extend .round;
      margin-right: 1rem;
      &--retail {
        background-color: $info-light;
      }
      &--travel {
        background-color: lighten($color: $primary, $amount: 50%);
      }
      &--misc {
        background-color: lighten($color: $negative, $amount: 50%);
      }
    }
    .transaction__details {
      @extend .text-height-18;
      flex: 1;
      margin-top: 0.3rem;
      .transaction__label {
        @extend .text-14;
        font-weight: bold;
      }
      .transaction__date {
        @extend .text-13;
        @extend .text-muted;
      }
    }
    .transaction__amount {
      &--credit {
        color: $primary;
      }
      &--debit {
        color: $black;
      }
    }
  }
}
</style>
