<script lang="ts">
  import GreatLeader from "$lib/img/gl.png";
</script>

<h1 class="text-6xl font-bold p-5 pb-0 text-center">About us</h1>

<article
  class="flex flex-col gap-5 p-5 justify-center"
>
  <section>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu eu
      enim euismod efficitur a tincidunt neque. Sed ultricies, velit in
      imperdiet rutrum, nisi purus lacinia enim, eu dignissim augue arcu non
      nisl. Pellentesque sit amet sagittis magna. Cras sit amet est vestibulum,
      feugiat eros vitae, finibus nunc. Vivamus eget placerat erat. Sed commodo
      ligula eros, id posuere lorem imperdiet eget. Nulla laoreet, ligula ut
      sodales finibus, quam odio porta nisi, eget dignissim tellus ipsum ut
      nibh. Cras accumsan non felis nec tincidunt. Proin sagittis vehicula diam
      in accumsan.
    </p>
  </section>
  <section>
    <h2>Mellom Title</h2>
    <p>
      Duis quis magna porta, semper diam ac, commodo leo. Maecenas a semper
      felis, vitae cursus odio. Duis ut purus vitae mauris iaculis sagittis sit
      amet a sapien. Suspendisse quis lectus sodales, vehicula turpis ac,
      pulvinar lacus. Cras auctor convallis arcu, id laoreet tortor eleifend ut.
      Quisque non elementum ante, at pharetra elit. Proin malesuada odio ex, id
      porta risus tristique ut. Vivamus porta a sem sed aliquam. Vestibulum
      ultrices ultrices cursus. Donec quis iaculis justo. Fusce aliquam neque
      tellus. Maecenas pharetra gravida rhoncus. Suspendisse aliquam ligula
      enim, ac pretium justo fringilla et.
    </p>
  </section>
  <section>
    <h2>Våre Verdier</h2>
    <p>
      Proin lobortis mauris id metus suscipit tempor. Vestibulum blandit
      pellentesque imperdiet. Cras egestas gravida leo, sit amet tincidunt
      turpis dictum eget. Nullam commodo tincidunt dui, nec consequat nisi
      ultricies convallis. Sed aliquet nisi sed nisi dictum consequat. Sed
      mollis nec mi vitae tristique. In mauris magna, placerat a ante ac,
      commodo lobortis massa. Nam sollicitudin nulla quis dolor mattis egestas.
      Cras mattis id neque ut hendrerit. Maecenas et enim tincidunt, rhoncus dui
      sit amet, ullamcorper leo. Sed a rutrum magna. Proin eget consequat
      turpis.
    </p>
  </section>
  <section>
    <h2>Ledelsen</h2>
    <div class="grid grid-cols-2 gap-5">
      <p>
        Phasellus at ultricies velit, ac venenatis felis. Praesent eget
        facilisis erat. Phasellus in mi a ex congue blandit et ut libero. Proin
        consectetur porta rutrum. In ac erat a est elementum egestas id nec
        turpis. Quisque magna sapien, luctus quis sapien ac, consectetur varius
        ipsum. In non arcu sit amet mauris pulvinar imperdiet. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed eget rutrum est, a aliquam
        turpis. Fusce dignissim rhoncus odio id euismod. Nam nec auctor mi, a
        fringilla lorem. Donec varius diam eu dolor sagittis viverra. Nulla
        consequat libero in diam cursus luctus vel quis leo. Morbi vehicula
        lorem gravida libero tincidunt aliquet. Ut nisi purus, laoreet eget
        mollis sit amet, suscipit sed diam. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Sed a
        diam auctor, malesuada dui et, rhoncus elit. Sed maximus urna neque, vel
        auctor ante pharetra vel. In scelerisque lacinia nunc, ut venenatis
        turpis sagittis id. Proin augue quam, fermentum sed interdum vehicula,
        commodo ut arcu. Nunc accumsan augue sed libero congue viverra.
        Vestibulum dapibus, ex vel lacinia semper, tortor libero congue nunc,
        quis varius nisl odio non turpis. In hac habitasse platea dictumst.
        Mauris dui mi, hendrerit id ex efficitur, venenatis rhoncus quam.
      </p>
      <img
        src={GreatLeader}
        alt="Our Great Leader and divine Ruler, her majesty Kasane Teto"
        class="rounded-xl h-50 w-50 object-cover"
      />
    </div>
  </section>
</article>

<hr class="hline">

<form class="grid grid-flow-row w-[50vw] h-auto bg-(--secondary-color) rounded-2xl m-auto mb-5 gap-2 p-5">
    <h3 class="text-4xl font-semibold text-center">Contact Us</h3>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" class="w-full rounded-md p-2 bg-amber-100" required />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" class="w-full rounded-md p-2 bg-amber-100" required />
    <label for="message">Message</label>
    <textarea id="message" name="message" class="w-full rounded-md p-2 bg-amber-100 h-40" required></textarea>
    <button type="submit" class="btn btn-outline">Submit</button>
</form>

<style>
  @import "tailwindcss";
  h2 {
    @apply text-2xl font-bold;
  }
  p {
    @apply w-[75vw] text-lg;
  }
</style>
