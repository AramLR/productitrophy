<script lang='ts'>
  import { tasks} from "../../logic/stores";
  
  let total = 0
  let completed = 0

  $: $tasks = {
    total,
    completed,
  }
</script>

<div class="tasksPanel">
  <h2>Daily Tasks</h2>

  <form>
    <label
      for="totalTasks"
    >
      <span>Total: </span>
      <input
        type="text"
        name="totalTasks"
        id="totalTasks"
        bind:value={total}
      /> 
    </label>
    <label for="completeTasks">
      <span>Completed: </span>
      <input type="text" name="completedTasks" id="completedHabits"
      bind:value={completed}>
    </label>
  </form>
</div>
