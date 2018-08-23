Vue.component('button-component',{
    template:'#button-component',
    data:function(){
        return {
            current_page:1
        }
    },
    props:['resultRadio','resultCheckbox','resultText'],
    methods:{
        // 点击下一页按钮事件
        nextPage: function(){
            if(this.current_page === 3){
                return;
            }else if(this.current_page < 3){
                this.current_page += 1;
            }
            console.log("当前页",this.current_page);
            this.$emit('next',this.current_page);
        },
        // 点击上一页按钮事件
        previousPage: function(){
            if(this.current_page === 1){
                return;
            }else if(this.current_page>1){
                this.current_page -= 1;
            }
            console.log("当前页",this.current_page);
            this.$emit('before',this.current_page);
        },
        // 点击重置按钮事件
        resetPage: function(){
            this.current_page = 1;
            console.log("当前页",this.current_page);
            this.resultRadio=[];
            this.resultCheckbox=[];
            this.resultText="";
            this.$emit('reset',this.current_page, this.resultRadio,this.resultCheckbox,this.resultText);
        }

    },
    computed:{
        setDisabledRadio: function(){
            if((this.current_page===1) && (this.resultRadio.length === 0)){
                return true;
            }else if((this.current_page===2) && (this.resultCheckbox.length < 2 ||  this.resultCheckbox.length > 3)){
                return true;
            }else if((this.current_page===3) && this.resultText.length<100){
                return true;
            }else{
                return false;
            }

            
            
        }
      }

})

