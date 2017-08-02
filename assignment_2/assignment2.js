/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for(var counter = 0; counter<=100; counter= counter + 1)
console.log(counter);

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var triangle = "#"
while (triangle.length <= 7) {
  console.log(triangle);
  triangle = triangle + "#";
}