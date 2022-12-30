<script>
  import { activeElementStore, controlsNode } from "./stores/stores";
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";
  const dispatch = createEventDispatcher();
  import { clickOutside } from "./util/helpers";
  import { cssStore, renderedElementsStore, elementsDataStore } from "./stores/stores.js";
  import { writable } from "svelte/store";

  let cssPropertiesSections = writable({
    //SECTION
    appearence: {
      //CATEGORY
      primary: {
        //PROP: VALUE
        color: "",
        "font-family": "",
        "font-size": "1rem",
        "font-weight": "400",
        "font-style": "",
        border: "",
        "border-color": "",
        "border-width": "",
        "border-style": "",
        "border-radius": "",
      },
      more: {},
    },

    background: {
      primary: {
        "background-color": "",
        "background-image": "",
        "background-size": "100%",
        "background-position": "center",
      },
      more: {},
    },
    layout: {
      primary: {
        "flex-direction": "",
        flex: "",
        padding: "",
        display: "",
        "grid-template-columns": "",
        width: "",
        height: "",
        position: "",
        "z-index": "",
      },
      more: {
        "min-width": "",
        "min-height": "",
        "max-width": "",
        "max-height": "",
        "justify-content": "",
        "align-items": "",
      },
    },
  });

  $: if ($activeElementStore) {
    Object.entries($cssPropertiesSections).map(([cssPropertiesSectionKey, cssPropertiesSection]) => {
      Object.entries(cssPropertiesSection).map(([cssCategoryKey, cssCategory]) => {
        Object.entries(cssCategory).map(([cssProp, cssValue]) => {
          if ($cssPropertiesSections[cssPropertiesSectionKey][cssCategoryKey][cssProp])
            $cssPropertiesSections[cssPropertiesSectionKey][cssCategoryKey][cssProp] = "";
        });
        if ($cssStore[$activeElementStore]) {
          Object.entries($cssStore[$activeElementStore]).map(([cssProp, cssValue]) => {
            $cssPropertiesSections[cssPropertiesSectionKey][cssCategoryKey][cssProp] = cssValue;
          });
        }

        // console.log(cssPropertiesSection);
        // if ($cssStore[$activeElementStore]) {

        //     if ($cssPropertiesSections[cssPropertiesSectionKey][cssCategoryKey][cssProperty] !== undefined) {
        //       $cssPropertiesSections[cssPropertiesSectionKey][cssCategoryKey][cssProperty] = cssValue;
        //     }
        //   // $cssPropertiesSections[cssPropertiesSectionKey][cssCategoryKey][cssProp] = cssValue;
        //   // Object.entries($cssStore[elementData.Id]).map(([cssProp, cssValue]) => {
        //   //   $cssPropertiesSections[cssPropertiesSectionKey][cssCategoryKey][cssProp] = cssValue;
        //   // });
        // }
      });
    });
  }

  function addCSSProperty(e, cssProp, cssValue) {
    if (!$cssStore[$activeElementStore]) $cssStore[$activeElementStore] = {};
    $cssStore[$activeElementStore][cssProp] = e.currentTarget.value;
    localStorage.setItem("cssStore", JSON.stringify($cssStore));
  }

  // $: console.table($cssStore);
</script>

{#key $activeElementStore}
  <!-- style="left: {elementDimesnions.x + elementDimesnions.width + controlsElement?.clientWidth > window.innerWidth
    ? window.innerWidth
    : elementDimesnions.x}px" -->
  <!-- use:clickOutside={{ exceptionIds: ["add-element"], elementNode: $renderedElementsStore[elementData.Id] }}
  on:click_outside|stopPropagation={() => {
    // elementData.editMode = false;
    dispatch("closecontrols");
    // console.log(elementData.editMode);
  }} -->
  <div id="controls" class="controls-component" bind:this={$controlsNode}>
    <div class="controls-header">
      <div>Controls for {$activeElementStore}</div>
      <button class="close-controls" on:click={() => ($activeElementStore = undefined)}> X </button>
    </div>
    <div class="controls-container">
      {#each Object.entries($cssPropertiesSections) as [cssPropertiesSectionKey, cssPropertiesSection]}
        <div class="css-section-name">
          {cssPropertiesSectionKey}
        </div>
        <div class="controls-section">
          {#key $activeElementStore}
            {#each Object.entries(cssPropertiesSection) as [cssCategoryKey, cssCategory]}
              <div class="css-gategory-name">
                {cssCategoryKey}
              </div>

              <div class="css-category-container">
                {#each Object.entries(cssCategory) as [cssProp, cssValue]}
                  <div class="property-wrapper">
                    <p>{cssProp}:</p>
                    <input type="text" bind:value={cssValue} on:keyup={(e) => addCSSProperty(e, cssProp, cssValue)} />
                  </div>
                {/each}
              </div>
            {/each}
          {/key}
        </div>
      {/each}
    </div>
  </div>
{/key}

<style>
  .controls-component {
    /* position: absolute; */
    z-index: 1;
    /* border: 10px red solid; */
    background-color: white;
    color: red;
    font-size: var(--size6);
    white-space: nowrap;
    min-width: fit-content;
    top: 0;
    right: 0;
  }

  .controls-header {
    display: flex;
    justify-content: space-between;
    background-color: var(--color9);
    padding: var(--size5);
  }

  .close-controls {
    font-size: var(--size6);
    padding: var(--size2) var(--size5);
    border-radius: var(--size3);
  }

  .controls-container {
    display: flex;
    flex-direction: column;
    gap: var(--size5);
  }

  .controls-section {
    display: flex;
    flex-direction: column;
    gap: var(--size5);
    background-color: var(--color4);
    padding: var(--size8);
  }

  .property-wrapper {
    display: flex;
    flex: 1;
    gap: var(--size5);
  }

  p {
    text-align: left;
    flex: 1;
  }

  input {
    flex: 1;
    font-size: var(--size6);
    border-radius: var(--size3);
  }
</style>
