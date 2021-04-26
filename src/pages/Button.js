
    

const Button = ({color,backgroundColor,text,clickCon}) => {
  
    return (



<div onClick={clickCon} style={{backgroundColor:backgroundColor,padding:10, color:color,display:'inline-block'}}>
{text}
</div>

      );
}
 



export default  Button;