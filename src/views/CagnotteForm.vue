<!-- src/views/CagnotteForm.vue -->

<template>
  <div>
    <h1>Création d'une nouvelle cagnotte</h1>
    <!-- Afficher un message d'erreur s'il y a une erreur -->
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <!-- Formulaire de création d'une nouvelle cagnotte -->
    <form @submit.prevent="createCagnotte">
      <input v-focus type="text" v-model="cagnotteName" placeholder="Nom de la cagnotte" />
      <textarea v-model="cagnotteDescription" placeholder="Description de la cagnotte"></textarea>
      <input type="text" v-model="cagnotteEndDate" placeholder="Date de fin" />
      <input type="number" v-model="cagnotteGoal" placeholder="Objectif financier" />
      <button type="submit">Créer la cagnotte</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cagnotteName: '',
      cagnotteDescription: '',
      cagnotteEndDate: '',
      cagnotteGoal: null,
      errorMessage: '', // Nouvelle propriété pour stocker le message d'erreur
    };
  },
  methods: {
    createCagnotte() {
      const formattedDate = this.dateToDB(this.cagnotteEndDate);

      // Envoi de la requête POST à l'API pour créer la cagnotte
      this.$api.post('/api/cagnottes', {
        name: this.cagnotteName,
        description: this.cagnotteDescription,
        end_date: formattedDate,
        goal: this.cagnotteGoal,
      })
          .then(response => {
            console.log('Cagnotte créée avec succès', response.data);
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Erreur lors de la création de la cagnotte', error.response.data);
            this.errorMessage = 'Erreur lors de la création de la cagnotte. Veuillez réessayer.';
          });
    },
  },
};
</script>

<style>
.error-message {
  color: red;
  margin-bottom: 10px;
}
</style>
