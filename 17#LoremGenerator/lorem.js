'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById('input-generator'),
    display = document.getElementsByClassName('display'),
    lorem = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste dignissimos nemo odio, magnam, fugit aut earum, tempora doloremque repellat debitis? Impedit debitis accusantium molestiae? Quis, corporis assumenda! Quasi, earum?', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui ex, recusandae libero deleniti ipsa earum itaque. Pariatur repellendus consequatur voluptates maxime dignissimos labore impedit numquam dolorem ad nam!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt tempora nihil. Atque, amet. Voluptate inventore, assumenda facere minus magni reprehenderit cupiditate dolores est aspernatur possimus. Tempora alias corrupti modi!', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt perspiciatis laborum, dolorem, dolor corrupti ut consequatur consectetur repudiandae saepe nemo! Ipsum quis cupiditate placeat iste non in. Officiis, ipsa.', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem optio deserunt architecto nisi, aliquid nihil aperiam modi unde voluptatum laborum culpa voluptatibus minus beatae facilis necessitatibus praesentium inventore veritatis perferendis.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quas cupiditate magni incidunt voluptas tempora cum sed ea sapiente quisquam consequatur, nisi possimus quia quam, dignissimos excepturi omnis. Cupiditate, dicta.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quam enim quis eius ipsum ab necessitatibus libero! Blanditiis sed est non maiores deleniti magni? Tempore aliquid corporis temporibus id explicabo.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse animi explicabo beatae laborum ad dolorum aliquam voluptatum provident tempore nisi distinctio repellendus hic libero possimus, quis voluptates incidunt quidem.', 'Beatae omnis quidem, atque, maiores adipisci praesentium, tempora repellendus alias aliquam exercitationem asperiores inventore doloremque odio ipsam fuga blanditiis laudantium sit! Voluptatum mollitia excepturi nihil debitis cumque, delectus corrupti itaque?', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam molestiae ab reiciendis expedita eum atque alias architecto incidunt numquam earum eos sed, voluptatibus mollitia odit est quaerat deleniti neque enim.'],
    submitBtn = document.getElementById('submit');

    
    submitBtn.addEventListener('click', () => {
        let loremNumbers = input.value;
        for (let i = 0; i < loremNumbers; i++) {
            display[0].innerHTML += `<p>${lorem[i]}</p>`;
        }
    });
});