<script lang='ts'>
  import { habits } from "../../logic/stores";

  let total = 0;
  let completed = 0;
  
  $: $habits = {
    total,
    completed
  }
</script>

<div class="habitsPanel">
  <h2>Habits</h2>

  <form>
    <label
      for="totalHabits"
    >
      <span>Total: </span>
      <input
        type="text"
        name="totalHabits"
        id="totalHabits"
        bind:value={total}
      /> 
    </label>
    <label for="completeHabits">
      <span>Completed: </span>
      <input type="text" name="completedHabits" id="completedHabits"
      bind:value={completed}>
    </label>
  </form>
</div>
