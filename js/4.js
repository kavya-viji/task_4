/*var mark = parseInt(prompt("Enter the Marks"));
if( mark > 80)
{
	alert("GRADE A");
}
else if(mark>=60 && mark <= 80)
{
	alert("GRADE B");
}
else if(mark>=50 && mark<=59)
{
	alert("GRADE C");
}
else if(mark>=45 && mark <=49)
{
	alert("GRADE D");
}
else if(mark>=25 && mark <=44)
{
	alert("GRADE E");
}
else
{
	alert("GRADE F");
}*/

/*var mark = parseInt(prompt("Enter the Marks"));
switch(true)
{
case (mark > 80):
	alert ("grade A");
	break;
	
case (mark>=60 && mark<=80):
	alert ("grade B");
	break;

case (mark>=50 && mark<=59):
	alert ("grade C");
	break;
	
case (mark>=45 && mark <=49):
	alert ("grade D");
	break;
		
case (mark>=25 && mark <=44):
	alert ("grade E");
	break;
			
default:
	alert ("Grade F")		
}*/


var grade = parseInt(prompt("Enter the Marks"));
switch(true)
{
case (grade >= 90 && grade <=100):
	alert ("grade O");
	break;
	
case (grade >= 75 && grade <=89):
	alert ("grade B");
	break;

case (grade >= 60 && grade <=74):
	alert ("grade C");
	break;
	
case (grade >=50 && grade <=59):
	alert ("grade D");
	break;
		
default:
	alert ("Failed!!!!!!!!!");		
}































