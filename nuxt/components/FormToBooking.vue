<template>
  <div class="form-to-booking">
    <!-- FORM SCREEN -->
    <div v-if="!submitted" class="form-wrap">
      <div class="instructions" v-if="showInstructions">
        <p>
          Please complete the short questionnaire below. After submitting the form,
          the page will automatically show a button to book a time.
        </p>
      </div>

      <!-- IFRAME WRAPPER -->
      <div
        ref="iframeContainer"
        class="iframe-container"
        :style="iframeContainerStyle"
      >
        <iframe
          ref="formIframe"
          :src="formSrc"
          width="100%"
          :height="iframeHeight"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style="border: none; max-width:100%;"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
          @load="onIframeLoad"
        ></iframe>
      </div>

      <div class="fallback-cta" v-if="showManualConfirm">
        <p>Didn't get redirected? Click below after you submit the form.</p>
        <button class="btn btn-secondary" @click="manualConfirm">
          I Submitted — Show Booking
        </button>
      </div>
    </div>

    <!-- BOOKING SCREEN -->
    <div v-else class="booking-wrap">
      <p class="booking-intro">
        Thanks — you're ready to book. Pick a time that works for you:
      </p>

      <div class="booking-actions">
        <button class="btn btn-primary cta" @click="openBooking">
          Book Your Time
        </button>
      </div>

      <p v-if="popupBlocked" class="warning">
        Popup was blocked — please allow popups or click the button again.
      </p>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";

interface Props {
  formSrc: string;
  bookingUrl: string;
  autoOpen?: boolean;
  iframeHeight?: number;
  showInstructions?: boolean;
}

const props = defineProps<Props>();
const { formSrc, bookingUrl } = props;

// Defaults
const autoOpen = props.autoOpen ?? false;
const iframeHeight = props.iframeHeight ?? 700;
const showInstructions = props.showInstructions ?? true;

// Refs
const formIframe = ref<HTMLIFrameElement | null>(null);
const iframeContainer = ref<HTMLElement | null>(null);

const submitted = ref(false);
const popupBlocked = ref(false);
const showManualConfirm = ref(false);

// Track iframe load events (legacy backup method)
const loadCount = ref(0);
const lastLoadAt = ref<number | null>(null);

// Style for iframe wrapper
const iframeContainerStyle = {
  height: `${iframeHeight}px`,
};

// IFRAME LOAD-BASED DETECTION (fallback)
const MIN_SUBMIT_LOAD_INTERVAL = 400;
const MAX_SUBMIT_LOAD_INTERVAL = 15000;

function onIframeLoad() {
  const now = Date.now();
  loadCount.value += 1;

  if (lastLoadAt.value === null) {
    lastLoadAt.value = now;

    // show fallback after a while
    window.setTimeout(() => {
      if (!submitted.value) showManualConfirm.value = true;
    }, 6000);

    return;
  }

  const delta = now - lastLoadAt.value;
  lastLoadAt.value = now;

  if (
    loadCount.value >= 2 &&
    delta >= MIN_SUBMIT_LOAD_INTERVAL &&
    delta <= MAX_SUBMIT_LOAD_INTERVAL
  ) {
    markSubmitted();
  }
}

// CONFIRM SUBMISSION & SWITCH TO BOOKING
function markSubmitted() {
  if (submitted.value) return;

  submitted.value = true;
  showManualConfirm.value = false;

  if (autoOpen) {
    attemptOpenPopup();
  }
}

// Manual fallback click
function manualConfirm() {
  markSubmitted();
}

// OPEN BOOKING POPUP/WINDOW
function attemptOpenPopup() {
  popupBlocked.value = false;

  const win = window.open(
    bookingUrl,
    "bookingWindow",
    "width=800,height=600,top=100,left=100,resizable=yes,scrollbars=yes"
  );

  if (!win) {
    popupBlocked.value = true;
    return;
  }

  try {
    win.focus();
  } catch {}
}

function openBooking() {
  attemptOpenPopup();
}

// #### IFRAME POLLING METHOD (RELIABLE) ####
let poller: number | null = null;

function startPolling() {
  poller = window.setInterval(() => {
    const iframe = formIframe.value;
    if (!iframe) return;

    try {
      const doc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;

      const text = (doc.body?.innerText || "").toLowerCase();

      // Matches Microsoft Forms thank-you variants
      if (
        text.includes("thanks") ||
        text.includes("thank you") ||
        text.includes("your response was submitted")
      ) {
        markSubmitted();
        if (poller) {
          clearInterval(poller);
          poller = null;
        }
      }
    } catch {
      // Likely cross-origin; skip until available.
    }
  }, 600);
}

// Optional postMessage listener (for future MS support)
function onMessage(e: MessageEvent) {
  try {
    const origin = e.origin || "";
    if (
      origin.includes("forms.office") ||
      origin.includes("office.com")
    ) {
      if (
        e.data === "form-submitted" ||
        e.data?.type === "form-submitted"
      ) {
        markSubmitted();
      }
    }
  } catch {
    // ignore
  }
}

onMounted(() => {
  window.addEventListener("message", onMessage);
  startPolling();
});

onUnmounted(() => {
  window.removeEventListener("message", onMessage);
  if (poller) clearInterval(poller);
});
</script> -->


<style scoped>
.form-to-booking {
  max-width: 900px;
  /* margin: 0 auto; */
}

.iframe-container {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: var(--black);
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}

.instructions {
  margin-bottom: 12px;
  color: var(--black);;
}

.fallback-cta {
  margin-top: 12px;
  display:flex;
  gap:12px;
  align-items:center;
}

.booking-wrap {
  text-align: center;
  padding: 28px 16px;
  border-radius: 8px;
  background: var(--black);
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}

.booking-actions {
  display:flex;
  gap: 12px;
  justify-content:center;
  margin-top: 12px;
}

.warning {
  color: #b45309;
  margin-top: 8px;
}

/* Basic style for your existing classes, keep or replace with your design system */
/* .btn { padding: 10px 16px; border-radius: 6px; cursor: pointer; }
.btn-primary { background: #0ea5a4; color: white; border: none; }
.btn-secondary { background: #e2e8f0; border: none; }
.btn-outline { background: transparent; border: 1px solid #cbd5e1; }
.cta { font-weight: 600; } */
</style>
