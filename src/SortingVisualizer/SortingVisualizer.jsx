import React,{Component} from 'react'
import './SortingVisualizer.css'
import {getMergeSortAnimations} from './SortingAlgorithm';
class SortingVisualizer extends Component{
       constructor(props){
        super(props)

          this.state={
            array:[]
          }
       }
       componentDidMount(){
          this.resetArray();
       }
       resetArray(){
          const array=[]
          for(let i=0;i<310;i++){
            array.push(randomIntFromInterval(5,600));
          }
          this.setState({array})
       }
       MergeSort(){
        // const javaScriptSortedArray=this.state.array.slice().sort((a,b)=>a-b);
        // const sortedArray=SortingAlgorithms.mergeSort(this.state.array)
        // console.log(ArrayAreEqual(javaScriptSortedArray,sortedArray)) it is just to check the function
         const animations=getMergeSortAnimations(this.state.array);
         for(let i=0;i<animations.length;i++){
          const arrayBars=document.getElementsByClassName('array-bar');
          const isColorChange=i%3 !==2;

          if(isColorChange){
            const [barOneIdx,barTwoIdx]=animations[i];
            const barOneStyle= arrayBars[barOneIdx].style;
            const barTwoStyle= arrayBars[barTwoIdx].style;
            const color = i % 3===0 ? "red":"green";
            setTimeout(()=>{
               barOneStyle.backgroundColor=color;
               barTwoStyle.backgroundColor=color;
            },i*3)
          }
          else{
             setTimeout(()=>{
                const [barOneIdx,newHeight]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
             },i*3)
          }
         }
       }
       QuickSort(){

       }
       HeapSort(){

       }
       BubbleSort(){

       }
       testSortingAlgorithm(){
         for(let i=0;i<100;i++)
         {
            const array=[]
            const length=randomIntFromInterval(1,1000)
            for(let i=0;i<length;i++){
                array.push(randomIntFromInterval(-1000,1000))
            }
            const javaScriptSortedArray=this.state.array.slice().sort((a,b)=>a-b);
            const sortedArray=getMergeSortAnimations(array.slice())
            console.log(ArrayAreEqual(javaScriptSortedArray,sortedArray))
         }
       }

       render(){
           const {array}=this.state;
           return(
            <div className='array-container'>
              {array.map((value,idx)=>(
                <div className='array-bar' key={idx} style={{height:`${value}px`}}>
                
                </div>
              ))}
              <button onClick={()=>this.resetArray()} className="button-29">Generate New Array</button>
              <button onClick={()=>this.MergeSort()} className="button-29">Merge Sort</button>
              <button onClick={()=>this.QuickSort} className="button-29">Quick Sort </button>
              <button onClick={()=>this.HeapSort()}className="button-29">Heap Sort</button>
              <button onClick={()=>this.BubbleSort()}className="button-29">Bubble Sort</button>
              <button onClick={()=>this.testSortingAlgorithm()}className="button-29">Test Sorting Algorithm</button>
            </div>
           )
       };

}
export default SortingVisualizer
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function ArrayAreEqual(arrayOne,arrayTwo){
    if(arrayOne.length!=arrayTwo.length)
     return false;

     for(let i=0;i<arrayOne.length;i++)
     {
        if(arrayOne[i]!=arrayTwo[i])
        return false;
     }
     return true;
}