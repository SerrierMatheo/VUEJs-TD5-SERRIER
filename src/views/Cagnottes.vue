<script>
import {RouterLink} from "vue-router";
import api from "@/plugins/api.js";
import Cagnotte from "@/views/Cagnotte.vue";

export default {
  components: {
    Cagnotte,
  },
  data() {
    return {
      cagnottes: [],
    };
  },
  methods: {
    createCagnotte(){
      this.$router.push('/cagnottes/new');
    },
    handleCagnotteClick(id) {
      this.$router.push(`/cagnottes/${id}/infos`);
    },
    fetchCagnottes() {
      this.$api.get('/api/cagnottes')
          .then(response => {
            this.cagnottes = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des cagnottes', error);
          });
    },
  },
  mounted() {
    this.fetchCagnottes();
  },
}

</script>

<template>
  <div>
    <h1>Liste de vos cagnottes</h1>
    <button @click="createCagnotte">Créer une cagnotte</button>
  </div>

  <div id="list-cagnotte" v-for="cagnotte in cagnottes" :key="cagnotte.id">
    <Cagnotte :cagnotte="cagnotte" @click="handleCagnotteClick(cagnotte.id)" />
  </div>
</template>

<style scoped>
  #list-cagnotte {
    display: inline-flex;
  }

</style>