<template>
  <input 
    :value="searchQuery" 
    @input="$emit('update:searchQuery', $event.target.value)" 
    type="text" 
    placeholder="店舗名・住所で検索" 
    class="search-bar" 
  />
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    searchQuery: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.search-bar {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
