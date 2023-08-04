<script lang='ts'>
  import { tasks, habits} from "../../logic/stores";

  $: tasksGrade = ($tasks.completed *10) / $tasks.total
  $: habitsGrade = ($habits.completed *10) / $habits.total
  $: finalGrade = (habitsGrade + tasksGrade) / 2
  $: reward = finalGrade >= 9 ? "Trophy" : "Certificate"
</script>

<div class="rewardPanel">
    <p>Grade: {finalGrade}</p>
    
    {#if finalGrade < 6}
        <p>Do better, keep your focus and motivation</p>
    {:else}
        <button>Claim {reward}</button>
    {/if}

</div>