export default {

     methods:{
            //Increment Methods
        incremented(){
            this.count +=1;
            
           },
        decremented(){
            this.count -=1;
        },
           //Active or Inactive Users List
        active_or_inactive_Users(){
           let status=this.status;
           return this.users.filter(function(users){
             return users.status == status
           })
        },
        filter_by_created_Date(users){
             return users.sort(function(a,b){
                 return a.created_at > b.created_at;
             })
        }
    },
}