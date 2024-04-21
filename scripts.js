var day = new Date()
var hour = day.getHours()

if (hour < 12) {
    document.write('<h1 style= "margin-top: 5%; text-align: center;font-family: Arial, Helvetica, sans-serif; color: #3236a8;">Good morning!<h1>')
} 
else if (hour < 18) {
    document.write('<h1 style= "margin-top: 5%; text-align: center;font-family: Arial, Helvetica, sans-serif; color: #3236a8;">Good afternoon!<h1>')
} 
else {
    document.write('<h1 style= "margin-top: 5%; text-align: center;font-family: Arial, Helvetica, sans-serif; color: #3236a8;">Good evening!<h1>')
}
