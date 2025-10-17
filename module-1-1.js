// foo();

// function foo() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// }

// const num = 25;

// console.log(num);

// foo();

// const foo = function () {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// };

// ! Scope
// const res = 25;

// console.log(res); // 25

// if (true) {
//   const res2 = 20;
//   console.log(res2); // 35

//   if (true) {
//     console.log(res);
//   }
// }

// console.log(res2);

//! Types
//? Number - 10, 25, 35
//? String - "Hello"
//? Boolean - true, false
//? null
//? undefined

// const res = typeof null;

// console.log(res);

// console.log('10');
// console.log(10);

//! == & === true/false
// console.log('1' == 1); // true
// console.log('1' === 1); // false

// console.log(true == 1); // true
// console.log(true === 1); // false

//! && - ||

//? && - Шукає першу неправду, або повертає останью правду
// console.log(true && 1 && 0 && ''); // 0
// console.log(true && 1 && 'Hello' && 25); // 25

// console.log(true && 1 && 25 && 'd'); //d

//? || - Шукає першу правду, або повертає останью неправду
// console.log(true || 0); // true
// console.log(false || 0 || false); // false

// const res = 5;

// const min = 2;
// const max = 10;

// console.log(res > min && res < max);

// const value = true;
// -'';
// const value2 = false;
// -'';

// console.log(value || value2);

// console.log(2 && 10); // 10

//!
// console.log(Number(false));
// console.log(Boolean(''));

// const userName = 'Mukola';

// const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa repellendus ab, labore atque illum! Corrupti deserunt quia perferendis autem officia accusamus beatae eius sapiente consequuntur quaerat tenetur eaque animi totam ducimus sint, nemo quae atque quisquam fugit iusto suscipit pariatur adipisci? Perferendis delectus laboriosam libero voluptatibus molestias vitae esse adipisci aperiam, numquam explicabo vel maxime iure ${userName}! Temporibus exercitationem ab consequuntur ipsa, facilis commodi voluptatibus consectetur sequi fugit similique ${userName} tempore laboriosam dolorem quaerat aliquam dolorum perspiciatis illo expedita provident. Reprehenderit omnis aperiam eligendi voluptate sequi nobis asperiores deleniti vero fugit iure accusamus iste ducimus enim exercitationem unde ab perferendis, nam hic possimus necessitatibus ex laboriosam? Fugiat laudantium quod aut, a amet adipisci saepe eaque ratione, totam beatae harum explicabo aliquid qui pariatur doloremque assumenda deleniti asperiores ${userName} similique ad nesciunt veritatis culpa repudiandae quisquam. Magnam illum molestias sint saepe debitis laboriosam totam sunt quod itaque reiciendis maiores nihil, qui nobis quidem fugit, harum cumque sequi natus! Deleniti possimus eaque, iste corrupti maxime earum pariatur dolorem sed atque excepturi alias voluptatem repellendus, qui eligendi quidem. Beatae cum doloribus a voluptatum consequuntur omnis commodi maxime maiores esse excepturi neque labore qui impedit alias ${userName} assumenda fugit dolore illum, blanditiis dolor, temporibus consectetur architecto molestiae. Sed suscipit perferendis quos possimus, exercitationem magni, natus assumenda obcaecati enim, explicabo pariatur facere! Architecto dolorem incidunt esse iusto quaerat velit unde asperiores blanditiis molestias voluptatum sequi harum autem magni tenetur doloribus, necessitatibus ${userName} nobis ipsum explicabo sunt est quas? Fugit quo vero placeat sunt accusantium, alias adipisci commodi dolorum itaque aperiam! Ducimus nemo maiores non itaque accusamus nisi nihil quidem, quod at mollitia maxime. Laborum deleniti laboriosam ratione voluptatum et facilis aut accusamus libero, minus doloribus fugiat odio quis officiis quia consequatur voluptate neque iure labore, quidem harum deserunt, sit obcaecati. Sunt doloribus repellendus maxime.`;

// ? '' ``
// const userName = 'Bob';
// console.log(`Hello Mukola`);

// 3.12
// const str = '23';
// const num = 23;

// console.log(str);
// console.log(Number(str));
// console.log(String(num));
// console.log(+str);

// const value = '3,12';
// console.log(Number(value)); // NaN
// console.log(Number.parseFloat(value));
// console.log(Number.parseInt(value));
// console.log(isNaN(14));

// const res = value.replace(',', '.');
// console.log(Number.parseFloat(res));

//! Math
// console.log(Math.PI.toFixed(2));
// console.log(Math.pow(2, 5));
// const pow = 10e3;
// console.log(pow);
// console.log(Math.max(10, 25, 25, 100, 1));
// console.log(Math.min(10, 25, 25, 100, 1));
// console.log(Math.random());
// console.log(Math.sqrt(4));
// console.log(Math.round(2.6));
// console.log(Math.floor(2.9));
// console.log(Math.ceil(2.9));

// console.log(1_000_000); // для зручності

// ! Infinity
// console.log(10 / 0);

//! Працює, але так робити не потрібно.
// const $ = 10;
// const num$ = 20;
// const $num = 20;
// const _ = 20;
// const _num = 20;
// const first_name = 'Bob ';

//! Як не працює
// const 10num = 10;
// const first - name = "Mango";
// const let = 10;
// const false = true;

//* Вірно userName

// console.log(Number((0.1 + 0.2).toFixed(1)));

//! Конкатинація
// console.log('Hello' + ' ' + 'Mukola');
// console.log(`Hello ${userName}`);
// console.log(100 + 10 + '25' - 100);
