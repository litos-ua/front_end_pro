### front_end_pro

#### Д.з. 4
Усе завдання розділено на 8 частин:\

1. За допомогою prompt запитати у юзера два числа. Визначити, яке з них 
   більше, а яке менше.
2. За допомогою prompt запитати у юзера дві відстані. Одна у кілометрах,
   інша – у футах (1 фут = 0,305м). Яка відстань менша? 
3. За допомогою prompt запитати у юзера двозначне число ('ab') Визначити,
   чи є перша цифра 'a' дільником другої цифри 'b'? І навпаки. 
4. За допомогою prompt запитати у юзера число. Визначити, чи 
   закінчується воно парною цифрою чи непарною?  Вивести останню цифру.
5. За допомогою prompt запитати у юзера двозначне число. Визначити, 
   яка з його цифр більша: перша чи друга?
6. Дано тризначне число. Визначити:
   - чи є парною сума його цифр.
   - чи кратна сума цифр п'яти.
   - чи є добуток його цифр більше 100.
7. Дано тризначне число. Визначити:
    - чи правда, що всі його цифри однакові?
    - чи є серед його цифр цифри однакові?
8. Визначити, чи є задане шестизначне число дзеркальним?
  
  Деякі дрібні завдання пов'язані за сенсом, згруповані в одному пункті (п.7, п.8)
Кожному пункту завдання відповідає свій скрипт index№.js (№ співпадає з номером відповідного завдання).
Виведення здійснюється в консоль та на web-сторінку.  При введенні даних через Prompt є параметр за замовчанням. 
Для наочності пояснення того, що виконує кожний із скриптів 
наведено в файлі index.html після коду. 

#### Д.з. 5
Реалізовано наступний функціонал:\
* Привітання з юзером ('Welcome to calculator!');
* Ставиться запитання що яку дію юзер хоче виконати ('What action you 
  want to do? Add, Diff, Mult, Div, Sqrt, Exp, Sin; Cos?'). В залежності
  Від того що він ввід, або нажав 'Cancel':
  + Введена коректна дія - переход до вводу чисел;
  + Введена некорректна дія - видається сповіщення 'You have entered an 
    INCORRECT ACTION, the program will stop working! Goodbye, see you later.',
    та вихид з програми;
  + Користувач натиснув на 'Cancel' - видається сповіщення 'You have entered an
    CANCELLED ACTION, the program will stop working! Goodbye, see you later.',
    та вихид з програми;
* Якщо введена коректна акція програма переходить до вводу:
  + двох чисел у випадку наступних акцій: Add, Diff, Mult, Div;
    при виконанні ділення проводиться перевірка дільника на 0;
  + одного числа у випадку наступних акцій: Sqrt, Exp, Sin; Cos;
    при вилученні кореня та зведенні у ступінь проводиться перевірка на
    те щоб число було більше 0;
  + після виконання дії виводиться результат у вигляді 
    'Дія Числа-операнди Результат'
  + потім виводиться фінальне сповіщення 'Good by, see you later.'
* Якщо при вводі хоча б одного числа введене некоректне значення (не число; 
  число з помилками, яке не можно перетворити до числа, пусту строку або 
  натиснутий 'Cancel') відразу виводиться сповіщення 
  'Good by, see you later.'

#### Д.з. 6
Реалізовано функціонал Д.з. 5 за допопомогою операторів {Switch...case} та
тернарного оператора без використання операторів {If...else}.

#### Д.з. 7
Проведено рефакторінг калькулятора 2.1\
Функціонал, реалізований у Д.з. 5 та 6 доповнено наступним:\

* Якщо користувач ввів не коректну операцію, то вивводиться
  alert з текстом "I don't recognize your operation. Please choose 
  correct operation like: Add, Diff, Mult, Div, Sqrt or Exp". 
  alert та prompt виводиться доки він не обере вірну операцію;
* Якщо користувач натиснув Cancel завершуемо програму і виводимо 
  alert з текстом 'Good by, see you later'.
* Якщо користувач ввів не коректні данні, то вивводиться alert з текстом 
  "This is bad digit. Please enter correct digit".
  alert та prompt виводиться доки він не введе коректе число;
* Якщо користувач натиснув Cancel при вводі числа завершуемо програму і 
  виводимо alert з текстом 'Good by, see you later';
* Після того як користувач отримав результат операції, за допомогою confirm() 
  питаємо в нього чи хоче він продовжити роботу з калькулятором; 
  ('Do you want continue work with me?');
* При вводі некорректних операндів при виконанні дій Div, Sqrt, Exp 
  завершуємо поточний цикл та за допомогою confirm()
  питаємо в нього чи хоче він продовжити роботу з калькулятором;
* Якщо так, то повернутися до вибору операції;
* Якщо ні, то завершуємо програму та  виводимо alert з текстом 
  'Good by, see you later'.


#### Д.з. 8 (Калькулятор 3.1)
Зроблено рефакторинг калькулятора 3.0:
* Для валідації ввода акції замість строки використані масиви;
* Скорочено код ввода чисел.

Для реалізації калькулятора 3.1 функціонал доповнено наступним:\

* Усі операції з калькулятором записуються у масив. 
   + Якщо операцію  виконано без помилок, то у масив записується строка виду:
     "№ Sum: {number1} + {number2} = {result}";
   + У разі виникнення помилки при обчисленні, то у масив записується строка
     виду: "№ Div: 'Division by 0 is not possible!"
* Додано операцію "History", яка дозволяє:
   + Якщо History порожня то вивести alert з текстом 
    'you haven't done any operations yet');
   + Усі виконані користувачем в поточній сесії операції:
     Your operation:\
     '1. Sum: {number1} + {number2} = {sum}'\
     '2. Diff: {number1} - {number2} = {diff}'\
     .........................................\
   + Після відображення вікна History запитуємо у користувача чи хоче він 
     продовжити роботу з калькулятором:
     - Якщо ні то, завершуємо  програму; 
     - якщо так, то повертаємось до вибору операції зі збереженням 
       інформації про раніше виконані акції. 


#### Д.з. 9 (Калькулятор 3.2)

Зроблено рефакторинг калькулятора 3.1 з використанням функцій:
* Логіка вводу типа дії з калькулятором перенесена у функцію _'getActionType'_;
* Введення та валідація чисел (одного чи двох) організовано за допомогою 
  функції _'getUserNumber'_. В середені цієї функції ввод кожного 
  окремого числа виконується за допомогою фнкції _'getUserSingleNumber'_.
* Усі математичні дії виконуються за допомогою двох функцій:
  + арифметичні (+,-,*,/) - _'arithmCalc';
  + усі інші (Sqrt, Sin, Cos, Exp) - _'mathCalc'_.
* Виведення результатів математичних дій виконується за допомогою 
  функції _'showActionRes'_.
* Відображення історії виконаних дій виконується за допомогою
  функції _'showHistory'_.

#### Д.з. 10
До HTML файлу підключено два скрипта index.js та index.js (пыдключення 
цьогоцей скрипта закоментовано).
* Перший скрипт виводить у консоль масив без елементів заданих
  як аргумент у функції removeElement.
* Другий скрипт працює з більшою кількістю типів даних (добавлено null 
  та boolean). У циклі по черзі перебираються усі елементи масива, та 
  формується и виводиться у консоль новий масив без поточного елемента.

#### Д.з. 11  
   Програма приймає на вході ціле невід'ємне число за допомогою функції
   _'getUserNumber'_ і потім за допомогою функції _'factorial'_ обчислює 
   факторіал введеного числа. 0! =1. 

#### Д.з. 12

   На вході маємо фразу, яку треба закодувати _secret_ та ключ _key_ за 
допомогою якого відбувається кодування. Реалізовано функцію 
createHash(key,secret), яка повертає рядок hash закодованих символів.
hash містить в собі закодовані _key_ та _secret_. 
   * При виклиці декілька разів _createHash_ з однаковими параметрами,
   повертається одне і те саме значення hash. 
   * При виклиці декілька разів _createHash_ з одним ключем, та різними 
   фразами однакової довжини повертаються різні hash з різною довжиною.
   * При виклиці декілька разів _createHash_ з різними ключами, та 
   * однаковими фразами повертаються різні hash.
   Для кодування фрази використовується обробка коду сиволів фрази.
Ключ та фраза розбиваються на массиви кодів символів у десятизначній
системі. Далі проводяться арифметичні дії з масивами (по одиниці та
разом). На виході формується масив _result_. Далі до цьго массиву згідно
з алгоритмом додається попередньо змінений ключ та декілька символів 
наприкінці, які не несуть інформаційного навантаження та просто змінють
довжину закодованного рядка при різних фразах однакової довжини.
   Теоретично можно в обратному напрямку відтворити закодовану фразу.


#### Д.з. 15

Для створення сутністі Людина (human) використовуємо конструктор Humanoid
та масив з даними humanProperty. Конструктор Humanoid, приймає параметри:
name та sex (цей параметр має дефолтне значення "unknown"). Створені 
сутності зберегаємо у масиві human. \
    Конструктор Flat створює сутності-квартири, екземпляри яких 
    зберігаються у масиві flat . 
* Ці сутності мають влативості:
  - inhabitants (при створенні пустий масив), куди додаються екземпляри human; 
  - flatNumber - номер квартири (починається з 1 та у кожному новому 
    екземплярі збільшується автоінкрементно на 1);
* метод addHumanoidToFlat, який приймає екземпляр human, та додає його
  до масиву жителів inhabitants. Якщо прийнятий параметр не є екземпляром 
  human виводиться відповідне сповіщення. Обмеження на кількість жителів 
  в квартирі не вводилась. \

  Конструктор Building, створює екземпляр Будинку, приймає один параметр 
  maxQuarters: максимальну кількість квартир у будинку.
* Властивості:
  - масив квартир (quarters), який при створенні пустий;
  - максимальна кількість квартир - maxQuarters;
  - поточна кількість квартир у будинку - quantityOfFlats.
* Методи:
- addFlatToBuilding - приймає екземпляри Квартира, перевіряє,
  чи не буде кількість перевищувати максимальну кількість квартир і 
  якщо це так, додає квартиру, в іншому випадку виводить у консоль 
  повідомлення "Cannot add more flats." Якщо в метод потрапляє сутність,
  яка не є екземпляром flat, виводиться відповідне сповіщення.


#### Д.з. 16
   Для створення сутністі Людина (human) використовуємо клас Humanoid
та масив з даними humanProperty. Конструктор класа, приймає параметри:
  * імʼя name;
  * вік age;
  * стать gender (цей параметр має дефолтне значення "unknown");

 Створені сутності зберегаємо у масиві human. 
 У класі існує один метод showHumanoid, який виводить у консоль 
 інформацію про людину.\
  Для створення сутності "Автомобіль" використовуємо клас Vehicle.
 У класі існують властивості:
  * make - марка, 
  * model - модель, 
  * yearOfManufacture - рік виробництва, 
  * chassisNumber - номер кузова, 
  * licensePlate - номер транспортного засобу,
  * owner - власник транспортного засобу (за замовчанням "").

  методи:
  * конструктор, який приймає параметри: 
    - марка, 
    - модель, 
    - рік виробництва, 
    - номер кузова (за замовчанням "unknown")
    - номер транспортного засобу
  * Присвоєння власника для демонстрації реалізовано в два шляхи 
    - assignOwner - метод приймає екземпляр класу Humanoid, та зберігає
      екземпляр класу Humanoid у полі owner. Якщо вік меньше 18 років,
      виводити у консоль повідомлення: "The owner of the car cannot be
      a person under 18.". Якщо поле вже заповнено, воно не змінюється,
      у консоль виводиться повідомлення: "The car already has an owner."
      Одна людина може бути власником декількох авто.
    - set owner - попередній метод продубльовано як сеттер.
  * Виведення у консоль інформації про автомобіль - showVehicle.
    Метод виводить інформацію про авто (клас Vehicle) у тому числі 
    інформацію про власника (клас Humanoid). У разі відсутності
    власника виводиться "There is no owner".


#### Д.з. 17

Для створення сутністі Студент (student) використовуємо клас Student
та масив з даними studentProperty. 
* Конструктор класа Student, приймає параметри:
  - імʼя name;
  - рік народження yearOfBirth;
  - масив з оцінками grade (за дефолтом пустий масив);
  - масив з відвідуваннями attendance (за дефолтом незаповнений масив (усі
    елементи Undefind), який має довжину 25 елементів).
* Методи класа Student:
  - studentName - обчислює та повертає вік студента ;
  - averageGrade - обчислює та повертає середній бал;
  - averageAttendance - обчислює та повертає відсоток 
    відвіданих студентом занять у частках одиниці;
  - estimate - Приймає параметр оцінки, та додає її до масиву оцінок;
  - present - записує на чергове порожнє місце, в масиві true;
  - absent - записує на чергове порожнє місце, в масиві false;
  - summary - перевіряє середню оцінку і середнє відвідування та в
    залежності від результата виводе сповіщення;
  
Для тестування роботи програми масиви оцінок та відвідування заповнюються
автоматично псевдовипадаковими значеннями таким образом, щоб оцінки були
на рівні 90 (+/-) балів та відвідування на рівні 0,9 (+/-). Для заповнення 
масива оцінок використовується метод estimate. Для заповнення масива
відвідуваннь використовуються методи present та absent. У разі 
перевищення максимальної кількості елементів у масиві attendance виводиться
сповіщення.

#### Д.з. 18
Для створення сутністей Гамбургер використовуємо клас Hamburger та 
конфігураційний масив з даними configObj.
* Поля класу:
 -  size - розмір;
 -  staffing - начинка (ціна, калорійність);
 -  topping - добавка (ціна, калорійність);
 -  orderNumber - номер заказу (свій для кожної сутності);
 -  sumCost = 0 - сумма заказа;
 -  sumCalories - калорійність заказу.
* Методи класу:
 - конструктор, який приймає розмір гамбургера (size);
 - addStaffing - додає начинку до гамбургера;
 - addTopping - додає добавку до гамбургера;
 - calculate - виконує підрахунок значення, яке приймає (у нашому випадку,
   це ціна та калорійність)
 В д.з. є два варіанти реалізації класу, які відрізняються логікою, а саме,
у частині роботи метода addTopping (у першому варіанті одна добавка
замінюється на іншу, у другому додається зі збереженням попередньої)
При створенні сутності Гамбургер вибирається тип гамбургера (маленький,
великий). За допомогою методів addStaffing та addTopping додаються начинка
та добавка відповідно. Метод calculate виконує поточні підрахунки 
залежно від того що приймає та повертає результат підрахунку(ціна заказу
або його калорійність). Вивод у консоль інформації про ціну та
калорійноість у першому варіанті робиться зсередини метода, у другому
ззовні, використовуючи результат роботи метода.

#### Д.з. 19
Створюємо клас SuperMath, який має два методи:
* check - цей метод виконує математичні дії з полями об'єкта, який вин 
  приймає. Поля X та Y цього об'єкту - операнди, поле znak - вид иатематичної
  дії. Безпосередньо усі методи, які виконують математичні дії не реалізовані
  у самому класі. Вони реалізовані у об'єкті ArithmeticActionMixin. За
  допомогою міксинів ми додаємо ці методи у прототип. Метод повертає 
  результат математичної дії.
* метод input() - цей метод приймає операнди та вид математичної дії, які
  які вводяться з клавіатури. У цьому методі реалізована спрощена логіка
  на базі "Калькулятора". При виборі cancel у будь якому місті дія
  методу припиняється. Якщо усі необхідні данні введені у належному
  форматі, метод повертає об'єкт з полями X, Y, znak.

При виконанні методу check він спочатку запитує у користувача, чи хоче 
він зробити дію znak c Х і У. Якщо хоче, виконує дію znak ,інакше - 
пропонує ввести нові данні через метод input() класу SuperMath.
Перелік дозволених дій та об'єкти для тестування знаходяться у
конфігураційному об'єкті configObj.

#### Д.з. 20 
Створюємо клас Node - елемент списку, який має поля: value, prev, next.
Конструктор приймає всі ці поля (prev та  next за замовчанням null).
Створюємо клас DoublyLinkedList, який імітує список та має поля: head,
tail. Цей клас ма методи:
* size - показує кількість вузлів (елементів списку);
* head - повертає початковий елемент (голову) списка;
* add(value) - додає новий елемент з value в кінець списку;
* remove(value) - видаляє із списку усі елементи з value 
* search(value) - повертає елемент зі списку. (об'єкт Node)
* toArray() - перетворює список у масив.

Зв'язаний список створюється за допомогою масиву параметрів dataValues.
Для формування двух списків для тестування doublyList1 та doublyList2
використовується метод add. Уся демонстрація методів size, head, remove,
search, toArray виконується на базі об'єкту doublyList2.

#### Д.з. 21
  Засобами JavaScript створюємо динамічну таблицю 10x10 з
заголовками стовбців та рядків. Кожний елемент таблиці 
формується як добуток поточного значення стовбчика та
рядка. Процес створення та заповнення HTML таблиці виконує 
функція createAndFillTable, яка має три параметри:
  - column - кількість стовців,
  - row - кількість рядків,
  - cssConst - CSS стилі.