
const app = new Vue({
  el:'#app',
  data:{
    market:[
        {
          name:'《算法导论》',
          date:'2006-9',
          price:'85.00',
          num:'1'
        },
        {
          name:'《UNI编程》',
          date:'2006-2',
          price:'59.00',
          num:'1'
        },
        {
          name:'《编程珠玑》',
          date:'2008-10',
          price:'39.00',
          num:'1'
        },
        {
          name:'《代码大全》',
          date:'2006-3',
          price:'128.00',
          num:'1'
        },
    ],
  },
  computed:{
    total:function(){
      let sum=0.0;
      //法1
      // for(let i=0;i<this.market.length;i++){
      //   sum += parseFloat(this.market[i].price)*parseInt(this.market[i].num);
      // }
      //法2
      // for(let i in this.market){
      //   const book = this.market[i];
      //   sum += book.price * book.num;
      // }
      //法3
      // for(let item of this.market){
      //   sum += item.price * item.num;
      // }
      //法4 高阶函数
      return this.market.reduce((preValue,book)=>preValue+book.price*book.num,0);
    }
  },
  methods:{
    remove(index){
      this.market.splice(index,1);
    },
    sub(index){
      if(this.market[index].num>0){
        this.market[index].num--;
      }
    },

  },
  filters:{
    showPrice(price){
      return '￥'+price;
    }
  }
})
