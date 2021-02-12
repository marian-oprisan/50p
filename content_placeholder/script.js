const header = document.getElementById("header");
const title = document.getElementById("title");

const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const author_name = document.getElementById("name");

const date = document.getElementById("date");

const animates_bgs = document.querySelectorAll('.animated-bg');
const animates_text_bgs = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {

    header.innerHTML = `<img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">`;

    title.innerHTML = "Lorem ipsum dolor sit amet.";

    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, quidem.";

    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/22.jpg" alt="">`;

    author_name.innerHTML = "John Doe";
    
    date.innerHTML = "Oct 08, 2020";

    animates_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animates_text_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    
}