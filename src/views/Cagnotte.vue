<!-- src/components/Cagnotte.vue -->

<template>
  <div class="cagnotte" :style="cagnotteStyle" @click="$emit('click')">
    <h3>{{ cagnotte.name }}</h3>
    <div class="progress-bar" :style="{ width: cagnotte._achieved + '%' }"></div>
    <div>
      <div>Objectif atteint : {{ cagnotte._achieved }}%</div>
      <div>Date de fin : {{ cagnotte.end_date }}</div>
      <div>Description : {{ this.cutText(cagnotte.description, 40)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cagnotte: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cagnotteStyle() {
      const daysRemaining = this.calculateDaysRemaining(this.cagnotte.end_date);

      let color;
      if (daysRemaining > 30) {
        color = 'blue';
      } else if (daysRemaining > 5) {
        color = 'orange';
      } else if (daysRemaining >= 0) {
        color = "red";
      } else {
        color = 'gray';
      }

      return {
        backgroundColor: color,
      };
    },
  },
  methods: {
    // Calculer le nombre de jours restants jusqu'à la date de fin
    calculateDaysRemaining(endDate) {
      const currentDate = new Date();
      const end = new Date(endDate);
      const timeDifference = end.getTime() - currentDate.getTime();
      const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return daysRemaining;
    },
  },
};
</script>

<style scoped>
.cagnotte {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.progress-bar {
  height: 10px;
  background-color: green;
  margin-bottom: 5px;
}
</style>
