export default{
  create(){
    this.$store.dispatch('getParts')
  },
  computed:{
    part(){
      return this.$store.state.parts;
    }
  }
}
