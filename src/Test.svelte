<script>
  import { fabric } from "fabric-pure-browser";
  import { onMount } from 'svelte';

  let canvas;
let rect
let canv;
  onMount(() => {
     canv = new fabric.Canvas(canvas);
    canvas.backgroundColor = '#fff';
// canv.isDrawingMode = true; //For free hand drawing

     rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 50,
      height: 50,
      fill: "blue",
        angle: 45

    });
    canv.add(rect);
    

  });

</script>

<canvas bind:this={canvas} width="500" height="300" />

<button on:click={() => {
    rect.set({ left: 0, top: 0 }); 
    canv.renderAll();
    }} > Move</button>