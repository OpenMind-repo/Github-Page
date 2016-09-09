#Github Page
dikembangkan dari ABJ openmind-repo
yang berfungsi merequest data github anda 
dan menjadikannya website

ada pun api yang di gunakan pada Github Page
adalah :

1. https://api.github.com  //base atau sumber data

2. http://formspree.io/  //untuk end point send email


cara config aplikasi

buka ->config.js lalu isi

sitename  //nama situs

var server= {
   host : 'https://api.github.com', //api github 
   port : '80',
   email : 'geralddeveloper95@gmail.com'  //email anda yang akan di hubungkan ke website
};

username //username github anda (username != email)


happy coding  ^_^

