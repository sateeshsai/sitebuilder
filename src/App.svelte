<script>
  import { onMount } from "svelte";
  let themeDataset = document.documentElement.dataset;
  import { slide } from "svelte/transition";
  import Recursive from "./Recursive.svelte";
  $: console.log(themeDataset);
  let openModal = false;
import Test from "./Test.svelte";
  
</script>
<!-- <Recursive />  -->

<Test/>


<div class="container">
  <nav>
  <ul>
    <li><strong>Brand</strong></li>
  </ul>
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#" role="button">Button</a></li>
  </ul>
</nav>
</div>

<main class="container">
 
  <!-- With radio buttons -->
<details role="list">
  <summary aria-haspopup="listbox">Dropdown</summary>
  <ul role="listbox">
    <li>
      <label for="small">
        <input type="radio" id="small" name="size" value="small">
        Small
      </label>
    </li>
    <li>
      <label for="medium">
        <input type="radio" id="medium" name="size" value="medium">
        Medium
      </label>
    </li>
    <li>
      <label for="large">
        <input type="radio" id="large" name="size" value="large">
        Large
      </label>
    </li>
  </ul>
</details>

<!-- With checkboxes -->
<details role="list">
  <summary aria-haspopup="listbox">Dropdown</summary>
  <ul role="listbox">
    <li>
      <label>
        <input type="checkbox">
        Banana
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox">
        Watermelon
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox">
        Apple
      </label>
    </li>
  </ul>
</details>


  <article>
    <header>Title here</header>
    <!-- Search -->
    <div class="card-content">
      <input in:slide type="search" id="search" name="search" placeholder="Search" />

      <!-- File browser -->
      <label for="file"
        >File browser
        <input type="file" id="file" name="file" />
      </label>

      <!-- Range slider -->
      <label for="range"
        >Range slider
        <input type="range" min="0" max="100" value="50" id="range" name="range" />
      </label>

      <!-- Date -->
      <label for="date"
        >Date
        <input type="date" id="date" name="date" />
      </label>

      <!-- Time -->
      <label for="time"
        >Time
        <input type="time" id="time" name="time" />
      </label>

      <!-- Color -->
      <label for="color"
        >Color
        <input type="color" id="color" name="color" value="#0eaaaa" />
      </label>
    </div>
    <footer>
      <a href="#cancel" role="button" class="secondary outline">Cancel</a>
      <a href="#confirm" role="button" class="contrast outline">Confirm</a>
      <a href="#confirm" role="button">Confirm</a>
    </footer>
  </article>

   <details role="list">
    <summary aria-haspopup="listbox">Dropdown</summary>
    <ul role="listbox">
      <li><a>Action</a></li>
      <li><a>Another action</a></li>
      <li><a>Something else here</a></li>
    </ul>
  </details>

     <details role="list">
    <summary aria-haspopup="listbox">Dropdown</summary>
    <ul role="listbox">
      <li><a>Action</a></li>
      <li><a>Another action</a></li>
      <li><a>Something else here</a></li>
    </ul>
  </details>

  <!-- Select -->
  <select>
    <option value="" disabled selected>Select</option>
    <option>…</option>
  </select>

  <details>
    <summary>Accordion 1</summary>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam, tincidunt nec porta sed, auctor
      id velit. Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris ipsum. Aliquam eu
      posuere orci. Nulla convallis lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar
      pulvinar mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit amet, congue turpis.
    </p>
  </details>

  <details open>
    <summary>Accordion 2</summary>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam, tincidunt nec porta sed, auctor
        id velit. Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris ipsum. Aliquam eu
        posuere orci. Nulla convallis lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar
        pulvinar mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit amet, congue
        turpis.
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam, tincidunt nec porta sed, auctor
        id velit. Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo. Nulla non mauris ipsum. Aliquam eu
        posuere orci. Nulla convallis lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar
        pulvinar mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit amet, congue
        turpis.
      </li>
    </ul>
  </details>

  <figure>
    <table role="grid">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="col">#</th>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
        </tr>
      </tfoot>
    </table>
  </figure>

  <button on:click={() => (openModal = true)}>Dark</button>
  <p>
    Nunc nec <mark role="button" data-tooltip="full name">ligula</mark> a tortor sollicitudin dictum in vel enim. Quisque
    facilisis turpis vel eros dictum aliquam et nec turpis. Sed eleifend a dui nec ullamcorper. Praesent vehicula lacus ac
    justo accumsan ullamcorper.
  </p>

  {#if openModal === true}
    <dialog open>
      <article transition:slide>
        <header>
          <a href="#close" aria-label="Close" class="close" on:click={() => (openModal = false)} />
          Modal title
        </header>
        <p>
          Nunc nec ligula a tortor sollicitudin dictum in vel enim. Quisque facilisis turpis vel eros dictum aliquam et
          nec turpis. Sed eleifend a dui nec ullamcorper. Praesent vehicula lacus ac justo accumsan ullamcorper.
        </p>
      </article>
    </dialog>
  {/if}
  <form>
    <!-- Select -->
    <label for="fruit">Fruit</label>
    <select id="fruit" required>
      <option value="" selected>Select a fruit…</option>
      <option>…</option>
    </select>

    <!-- Radios -->
    <fieldset>
      <legend>Size</legend>
      <label for="small">
        <input type="radio" id="small" name="size" value="small" checked />
        Small
      </label>
      <label for="medium">
        <input type="radio" id="medium" name="size" value="medium" />
        Medium
      </label>
      <label for="large">
        <input type="radio" id="large" name="size" value="large" />
        Large
      </label>
      <label for="extralarge">
        <input type="radio" id="extralarge" name="size" value="extralarge" disabled />
        Extra Large
      </label>
    </fieldset>

    <!-- Checkboxes -->
    <fieldset>
      <label for="terms">
        <input type="checkbox" id="terms" name="terms" />
        I agree to the Terms and Conditions
      </label>
      <label for="terms_sharing">
        <input type="checkbox" id="terms_sharing" name="terms_sharing" disabled checked />
        I agree to share my information with partners
      </label>
    </fieldset>

    <!-- Switches -->
    <fieldset>
      <label for="switch">
        <input type="checkbox" id="switch" name="switch" role="switch" />
        Publish on my profile
      </label>
      <label for="switch_disabled">
        <input type="checkbox" id="switch_disabled" name="switch_disabled" role="switch_disabled" />
        User must change password at next logon
      </label>
    </fieldset>
  </form>

  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>

  <div class="grid">
    <button data-tooltip="blah blah" on:click={() => (themeDataset.theme = "light")}>Light</button>
    <button on:click={() => (themeDataset.theme = "dark")}>Dark</button>
    <button on:click={() => (themeDataset.theme = "test")}>Test</button>
  </div>
  <form>
    <!-- Grid -->
    <div class="grid">
      <!-- Markup example 1: input is inside label -->
      <label for="firstname">
        First name
        <input type="text" id="firstname" name="firstname" placeholder="First name" required />
      </label>

      <label for="lastname">
        Last name
        <input type="text" id="lastname" name="lastname" placeholder="Last name" required />
      </label>
    </div>

    <!-- Markup example 2: input is after label -->
    <label for="email">Email address</label>
    <input type="email" id="email" name="email" placeholder="Email address" required />
    <small>We'll never share your email with anyone else.</small>

    <!-- Button -->
    <button type="submit" on:click|once>Submit</button>
  </form>

  <div class="grid">
    <input type="text" placeholder="Valid" aria-invalid="false" />
    <input type="text" placeholder="Invalid" aria-invalid="true" />
    <input type="text" placeholder="Disabled" disabled />
    <input type="text" value="Readonly" readonly />
  </div>

  <h1>Hello Pico!</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maiores iusto. Dolore vel, non id nisi quos ipsum
    cum suscipit praesentium. Architecto animi quidem possimus beatae, quae hic porro odio. Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Maxime provident illum iusto adipisci eos necessitatibus, laborum consequatur, dicta
    dolores distinctio natus ad in aperiam tenetur? Iste, libero quo. Beatae, aspernatur?Lorem ipsum dolor sit, amet
    consectetur adipisicing elit. Rerum harum voluptates sit necessitatibus. Error, temporibus, est molestiae corrupti
    id perspiciatis sequi eveniet rem consequuntur nam quia esse ratione accusamus quae ut, labore autem distinctio
    nulla ex sapiente possimus consequatur quam dolores. Quaerat obcaecati natus fuga debitis odio praesentium
    perspiciatis laboriosam tenetur iusto, eveniet consectetur. Illo, praesentium maxime provident nulla doloribus modi
    necessitatibus temporibus doloremque est neque laudantium harum impedit, iste dolores quam? Dignissimos optio, at
    saepe voluptatum, obcaecati magnam deserunt dolorum nobis sequi dolor quam quisquam beatae non illum animi quasi?
    Sint earum nemo quos quisquam saepe vero nihil, repellendus ut? Eveniet expedita provident ex inventore aliquid
    possimus harum at, quis labore id aut dicta libero praesentium natus illum corporis maiores doloremque odio laborum
    fuga excepturi tempora ipsam consequuntur! Ex rerum ea veniam repudiandae. Aliquid, perferendis error! Perspiciatis
    velit qui earum corrupti voluptate. Temporibus veritatis ipsum odio omnis officiis laboriosam ad, sequi esse non
    fuga! Non corporis numquam, iure ut, aperiam minus cum nisi ratione praesentium repudiandae temporibus nobis, fugiat
    consequuntur architecto iste accusamus molestias accusantium placeat sint perspiciatis tempora aspernatur hic? Nobis
    fugit nam assumenda et asperiores sed veniam beatae doloribus quibusdam illo sit modi impedit id mollitia quo omnis,
    earum repellat? Repudiandae quidem eligendi, praesentium ipsum animi ipsam maiores asperiores omnis fugiat, odit
    quia vitae ab accusantium reprehenderit iusto odio quas ad dolores cum veniam excepturi deleniti dignissimos ipsa
    consequatur. Vero culpa necessitatibus minus numquam cumque nihil iusto commodi deleniti, velit repellat distinctio
    unde temporibus quasi voluptatum porro tempora doloremque vel tempore quod molestiae doloribus delectus iure.
    Laborum eius, a, modi quod et fuga nihil dicta, accusamus distinctio magnam nulla sint doloribus. Dolorem aliquid
    tempora neque aperiam modi sapiente provident alias iure error saepe nobis quidem expedita rerum atque, similique
    odio aliquam ipsa ipsam molestias laboriosam officiis temporibus!
  </p>
</main>

<style>
  main {
    display: grid;
    gap: calc(var(--spacing) * 2);
  }

  summary {
    transform: translateY(-100%);
  }

  footer {
    display: flex;
    gap: var(--spacing);
    justify-content: flex-end;
  }
</style>
