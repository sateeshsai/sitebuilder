<script>
  import { activeElementStore, siteEditMode } from "./stores/stores.js";
  import Controls from "./Controls.svelte";
  import { writable } from "svelte/store";
  import { elementsArrayStore } from "./stores/stores";
  import ElementsNewTest from "./Elements.svelte";
  import ControlsPage from "./ControlsPage.svelte";
  import { xlink_attr } from "svelte/internal";
  import "@picocss/pico";

  $elementsArrayStore = JSON.parse(localStorage.getItem("elementsStore")) || $elementsArrayStore;
  $: firstLevelElements = $elementsArrayStore.filter((el) => el.parent === "");

  $siteEditMode = false;

  $: if ($siteEditMode === false) {
    window.document.body.classList.remove("siteEditMode");
    $activeElementStore = undefined;
  } else {
    window.document.body.classList.add("siteEditMode");
  }
</script>

<!-- <dialog open>
  <article>
    <header>
      <a href="#close" aria-label="Close" class="close"></a>
      Modal title
    </header>
    <p>
      Nunc nec ligula a tortor sollicitudin dictum in vel enim. 
      Quisque facilisis turpis vel eros dictum aliquam et nec turpis. 
      Sed eleifend a dui nec ullamcorper. 
      Praesent vehicula lacus ac justo accumsan ullamcorper.
    </p>
  </article>
</dialog> -->
<div class="grid">

<button>Button</button>
<input type="submit">
</div>
{#if !$siteEditMode}
  <!-- <button
    class="edit-site"
    on:drag={(e) => console.log(e.x, e.y)}
    draggable="true"
    on:click={() => ($siteEditMode = true)}>Edit site</button
  > -->
{:else}
  <button class="edit-site" on:click={() => ($siteEditMode = false)}>Preview site</button>
{/if}

<div class="root-element" class:siteEditMode={$siteEditMode}>
  <ElementsNewTest elementsData={firstLevelElements} />
</div>

{#if $siteEditMode}
  {#if $activeElementStore}
    <Controls />
  {:else}
    <ControlsPage />
  {/if}
{/if}

<style>
  /* button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    padding: var(--size4) var(--size6);
    border-radius: var(--size3);
    background-color: aqua;
  } */

  .root-element {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    gap: 0;
  }
  .siteEditMode {
    gap: var(--size5);
  }

  :global(.siteEditMode) {
    grid-template-columns: 5fr minmax(300px, 1fr);
    gap: 0;
  }
</style>
