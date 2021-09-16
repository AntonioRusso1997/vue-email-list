Vue.config.devtools = true;

var app = new Vue (
    {
        el: "#root",
        data: {
            emails: [],
        },
        methods: {

        },
        mounted() {
            for (let i=1 ;i<=10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((result) => {
                    let randomEmail = result.data.response;
                    this.emails.push(randomEmail)
                })                
            }
            console.log(this.emails)
        }
    }
)