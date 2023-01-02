<script>
  import { tick } from "svelte";
  import Controls from "./Controls.svelte";
  import {
    cssStore,
    elementsArrayStore,
    renderedElementsStore,
    selfClosingElements,
    activeElementStore,
    cssStringsStore,
    controlsNode,
    siteEditMode,
  } from "./stores/stores";
  import { randomID, clickOutside } from "./util/helpers";
  import Moveable from "svelte-moveable";
  import { preventEnterKey } from "./util/actions";

  export let elementsData;

  let elementsStateObject = {};

  $: if ($elementsArrayStore) {
    console.log($elementsArrayStore)
    for (const el of elementsData) {
      elementsStateObject[el.Id] = {};
    }
  }

  function handleElementOnClick(e, elementDataId) {
    // console.log(elementDataId);
    if (e.target === e.currentTarget && $siteEditMode === true) {
      elementsStateObject[elementDataId].editMode = true;
      $activeElementStore = elementDataId;
    }
  }

  function handleElementTextChange(e, elementData) {
    console.log(e.key);
    if (e.key === "Escape") {
      $activeElementStore = undefined;
    } else {
      elementData.text = e.target.textContent;
      console.log(elementData.text)
    }

    localStorage.setItem("elementsStore", JSON.stringify($elementsArrayStore));
  }

  function closeControls(e) {
    console.log(e.key);
    if (e.key === "Escape") {
      $activeElementStore = undefined;
    }
  }

  async function addChildElement(parentElement) {
    let newElementData = {};
    newElementData.Id = randomID();
    newElementData.type = "div";
    newElementData.text = "new element" + newElementData.Id;
    newElementData.parent = parentElement.Id;
    newElementData.level = parentElement.level + 1;
    newElementData.order = 1;
    $elementsArrayStore = [newElementData, ...$elementsArrayStore];
  }

  async function addElement(currentElement, position) {
    let newElementData = {};
    newElementData.Id = randomID();
    newElementData.type = "div";
    newElementData.text = "new element" + newElementData.Id;
    newElementData.parent = currentElement.parent;
    newElementData.level = currentElement.level + 1;
    let allSiblingElementsData = $elementsArrayStore
      .filter((el) => el.parent === currentElement.parent)
      .sort((a, b) => (a.order >= b.order ? 1 : -1));

    let currentElementIndex = allSiblingElementsData.findIndex((el) => el.Id === currentElement.Id);

    if (position === "before") {
      for (const [elementIndex, siblingElement] of allSiblingElementsData.entries()) {
        if (elementIndex >= currentElementIndex) {
          siblingElement.order = siblingElement.order + 1;
        }
      }
      newElementData.order = currentElement.order;
    }

    if (position === "after") {
      for (const [elementIndex, siblingElement] of allSiblingElementsData.entries()) {
        if (elementIndex > currentElementIndex) {
          siblingElement.order = siblingElement.order + 1;
        }
      }
      newElementData.order = currentElement.order + 1;
    }
    $elementsArrayStore = [newElementData, ...$elementsArrayStore];
    localStorage.setItem("elementsStore", JSON.stringify($elementsArrayStore));

    $activeElementStore = $elementsArrayStore.find((el) => el.Id === newElementData.Id).Id;
  }

  function onDragStart(detail) {}
  function onDrag(detail) {}
  function onDragEnd(detail) {}
  function onResizeStart(detail) {}
  function onResize(detail) {}
  function onResizeEnd(detail) {}

  function onScaleStart(detail) {}
  function onScale(detail) {}
  function onScaleEnd(detail) {}

  function onWarpStart(detail) {}
  function onWarp(detail) {}
  function onWarpEnd(detail) {}

  function onRotateStart(detail) {}
  function onRotate(detail) {}
  function onRotateEnd(detail) {}

  function onPinchStart(detail) {}
  function onPinch(detail) {}
  function onPinchEnd(detail) {}

  function formatText(elementId) {
    let selectedText = window.getSelection().toString();
    if (selectedText.length) {
      let elementDataToEdit = $elementsArrayStore.find((el) => el.Id === elementId);
      let splitArray = elementDataToEdit.text.split(selectedText);
      console.log(splitArray);
    }
  }
</script>

<svelte:body on:click={(e) => (e.target.id === "app" ? ($activeElementStore = undefined) : "")} />

<!-- {#if showActiveElementControls}
  <Controls elementData={activeElement} on:closecontrols={() => (showActiveElementControls = false)} />
{/if} -->

<!-- use:clickOutside={$controlsNode}
    on:click_outside|stopPropagation={() => ($activeElementStore = undefined)} -->

{#each elementsData.sort((a, b) => (a.order >= b.order ? 1 : -1)) as elementData (elementData.Id)}
  {@const elementChildren = $elementsArrayStore.filter((el) => el.parent === elementData.Id)}
  <!-- on:click|stopPropagation={(e) => handleElementOnClick(e, elementData.Id)} -->
  <!-- on:keyup={closeControls} -->

  <div
    class="element-wrapper"
    style={$cssStringsStore[elementData.Id] ? $cssStringsStore[elementData.Id] : ""}
    class:editMode={elementData.Id === $activeElementStore}
  >
    {#if !selfClosingElements.includes(elementData.type)}
      <!--  -->
      {#if elementData.Id === $activeElementStore}
        <button
          id="add-element"
          on:click={() => addElement(elementData, "before")}
          class="add-element top"
          class:row={$cssStore[elementData.parent]?.["flex-direction"] &&
            $cssStore[elementData.parent]?.["flex-direction"] === "row"}>+</button
        >

        <div class="toolbar text-edit-toolbar">
          <button on:click={formatText} class="tool bold">B</button>
          <button class="tool italic">I</button>
          <button class="tool underline">U</button>
          <button class="tool underline">TA</button>
          <button class="tool underline">🔗</button>
        </div>
      {/if}

      {#if elementChildren.length === 0}
        {#if elementData.Id === $activeElementStore}
          <button id="add-element" on:click={() => addChildElement(elementData)} class="add-element middle">+</button>
        {/if}
      {/if}
      <!--  -->
      <!-- {@debug} -->
      <svelte:element
        this={elementData.type}
        class:editMode={elementData.Id === $activeElementStore}
        class="element level{String(elementData.level)}"
        contenteditable={elementChildren.length === 0 && $siteEditMode === true}
        id={"element" + elementData.Id}
        bind:this={$renderedElementsStore[elementData.Id]}
        on:click|stopPropagation={(e) => handleElementOnClick(e, elementData.Id)}
        on:keyup|stopPropagation={(e) => handleElementTextChange(e, elementData)}
        style={$cssStringsStore[elementData.Id] ? $cssStringsStore[elementData.Id] : ""}
        on:dblclick={() => {}}
        use:preventEnterKey
      >
        <!-- use:reportDimension={elementData} -->
        {#if elementChildren.length === 0}
          {@html elementData.text}
        {:else}
        {console.log("else")}
          <svelte:self elementsData={elementChildren} />
        {/if}
        <!--  -->
      </svelte:element>
      <!-- <Moveable
        target={$renderedElementsStore[elementData.Id]}
        origin={true}
        edge={false}
        draggable={true}
        throttleDrag={0}
        on:dragStart={({ detail }) => onDragStart(detail)}
        on:drag={({ detail }) => onDrag(detail)}
        on:dragEnd={({ detail }) => onDragEnd(detail)}
        keepRatio={false}
        renderDirections={["nw", "ne", "sw", "se", "n", "w", "s", "e"]}
        resizable={false}
        throttleResize={0}
        on:resizeStart={({ detail }) => onResizeStart(detail)}
        on:resize={({ detail }) => onResize(detail)}
        on:resizeEnd={({ detail }) => onResizeEnd(detail)}
        scalable={false}
        throttleScale={0}
        on:scaleStart={({ detail }) => onScaleStart(detail)}
        on:scale={({ detail }) => onScale(detail)}
        on:scaleEnd={({ detail }) => onScaleEnd(detail)}
        rotatable={false}
        throttleRotate={0}
        on:rotateStart={({ detail }) => onRotateStart(detail)}
        on:rotate={({ detail }) => onRotate(detail)}
        on:rotateEnd={({ detail }) => onRotateEnd(detail)}
        warpable={false}
        on:warpStart={({ detail }) => onWarpStart(detail)}
        on:warp={({ detail }) => onWarp(detail)}
        on:warpEnd={({ detail }) => onWarpEnd(detail)}
        pinchable="false"
        on:pinchStart={({ detail }) => onPinchStart(detail)}
        on:pinch={({ detail }) => onPinch(detail)}
        on:pinchEnd={({ detail }) => onPinchEnd(detail)}
      /> -->

      <!--  -->
      {#if elementData.Id === $activeElementStore}
        <button
          id="add-element"
          on:click={() => addElement(elementData, "after")}
          class="add-element bottom"
          class:row={$cssStore[elementData.parent]?.["flex-direction"] &&
            $cssStore[elementData.parent]?.["flex-direction"] === "row"}>+</button
        >
      {/if}

      <!--  -->
    {:else}
      <!--  -->
      {#if elementData.Id === $activeElementStore}
        <button id="add-element" on:click={() => addElement(elementData, "before")} class="add-element top"
          >Add before</button
        >
      {/if}
      {#if elementData.type === "input"}
        <input
          class="element level{String(elementData.Id).length}"
          bind:value={elementData.name}
          bind:this={$renderedElementsStore[elementData.Id]}
          on:click={(e) => handleElementOnClick(e, elementData.Id)}
        />
      {/if}

      {#if elementData.type === "textarea"}
        <textarea
          class="element level{String(elementData.Id).length}"
          bind:value={elementData.name}
          bind:this={$renderedElementsStore[elementData.Id]}
          on:click={(e) => handleElementOnClick(e, elementData.Id)}
        />
      {/if}

      {#if elementData.type === "img"}
        <img
          class="element level{String(elementData.Id).length} image"
          src={elementData.text}
          alt={elementsData.text}
          bind:this={$renderedElementsStore[elementData.Id]}
          on:click={(e) => handleElementOnClick(e, elementData.Id)}
        />
      {/if}

      {#if elementData.Id === $activeElementStore}
        <button id="add-element" on:click={() => addElement(elementData, "after")} class="add-element bottom"
          >Add after</button
        >
      {/if}
      <!--  -->
    {/if}
  </div>
{/each}

<style>
  .controls-wrapper {
    /* position: relative; */
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: blue;
    padding: var(--size5) var(--size6);
    bottom: 100%;
  }

  .tool {
    font-size: var(--size6);
    aspect-ratio: 1/1;
    background-color: skyblue;
    border-radius: var(--size3);
    width: 3ch;
  }

  .editMode {
    border: solid 2px rgb(96, 0, 251);
  }

  .editHover {
    outline: solid 3px red;
    margin: 0.5rem;
  }

  .element-wrapper {
    position: relative;
    display: flex;
    flex: 1;
  }

  .element {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    padding: var(--size6);
    gap: 1rem;
    flex: 1;
    /* border: 1px solid blue; */
    /* min-width: 10rem; */
  }

  .element-wrapper:focus,
  .element:focus {
    outline: none;
  }

  :global(button) {
    padding: 0.2rem;
    width: fit-content;
  }

  .add-element {
  }
  .level1 {
    background-color: hsl(210, 10%, 10%);
  }

  .level2 {
    background-color: hsl(210, 10%, 15%);
  }

  .level3 {
    background-color: hsl(210, 10%, 20%);
  }

  .level4 {
    background-color: hsl(210, 10%, 25%);
  }

  .level5 {
    background-color: hsl(210, 10%, 30%);
  }

  .add-element {
    border: 1px solid hsl(210, 10%, 20%);
    color: hsl(210, 10%, 50%);
    justify-self: center;
    align-self: center;
    position: absolute;
    border-radius: 0.2rem;
    font-size: var(--size6);
    left: 50%;
    translate: -50% 0;
    width: fit-content;
    padding: var(--size2) var(--size4);
    white-space: nowrap;
    z-index: 1;
    user-select: none;
  }

  .add-element:active {
    background-color: red;
  }

  .top {
    top: -0.5rem;
  }

  .bottom {
    bottom: -0.5rem;
  }

  .middle {
    top: 50%;
    translate: -50% -50%;
  }

  .add-element.row.top {
    top: 50%;
    left: 0%;
    translate: 0% -50%;
  }

  .add-element.row.bottom {
    top: 50%;
    left: 100%;
    translate: -0% -50%;
    bottom: auto;
  }

  .image {
    max-width: 5rem;
  }
</style>
