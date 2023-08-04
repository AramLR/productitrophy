<script lang="ts">
  import HabitsPanel from './lib/components/HabitsPanel.svelte'
  import TasksPanel from './lib/components/TasksPanel.svelte';
  import RewardPanel from './lib/components/RewardPanel.svelte';
</script>

<div class="container">
  <HabitsPanel />
  <TasksPanel />
  <RewardPanel />
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
</style>
