const Common = {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                
                }
              },
              methods: {
                  errorMessage(message){
                    this.$toasted.show(message, {
                        theme: 'bubble',
                        position: 'bottom-right',
                        type: 'error',
                        duration: 2000,
                      });
                  },
                  successMessage(message){
                    this.$toasted.show(message, {
                        theme: 'bubble',
                        position: 'bottom-right',
                        type: 'success',
                        duration: 2000,
                    });
                  },
                  formatDate(dateTime) {
                    let date = new Date(dateTime) 
                    var hours = date.getHours();
                    var minutes = date.getMinutes();
                    var ampm = hours >= 12 ? 'pm' : 'am';
                    hours = hours % 12;
                    hours = hours ? hours : 12; // the hour '0' should be '12'
                    minutes = minutes < 10 ? '0'+minutes : minutes;
                    var strTime = hours + ':' + minutes + ' ' + ampm;
                    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
                  },
                  getStatusColor(id) {
                    if (id == 1) return "warning";
                    if (id == 2) return "info";
                    if (id == 3) return "secondary";
                    if (id == 4) return "primary";
                    if (id == 5) return "danger";
                    if (id == 6) return "dark";
                  },
              },
        });
    }
}

export default Common; 