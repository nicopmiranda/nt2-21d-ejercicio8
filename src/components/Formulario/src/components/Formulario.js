
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 5,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120,
      personas: []
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },
    agregarPersona(persona){
      console.log(persona);
      this.personas.push(persona);
    },
    getKeysPersonas(){
      return Object.keys(this.personas[0]);
    },

    enviar() {
      //SPREAD Operator
      console.log({...this.formData});
      //Agrego al array de personas
      this.agregarPersona(this.formData);
      //Borro la información despues de enviarla
      this.formData = this.getInicialData();
      this.formState._reset();
    }

  }
}


