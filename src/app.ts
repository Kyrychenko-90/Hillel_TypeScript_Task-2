showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

/*
1. Реалізуйте функцію getAllBooks(), яка повертає колекцію книжок. Об’явіть цю колекцію всередині функції.
 [
{ id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
{ id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
{ id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
{ id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
]
 */
/*
2. Реалізуйте функцію logFirstAvailable(), яка приймає масив книг як параметр і виводить у консоль:
·    кількість книг у масиві
·    назву першої доступної книги
Запустіть функцію logFirstAvailable()
 */
/*
3. Об’явіть enum Category для зберігання наступних категорій книг: JavaScript, CSS, HTML, TypeScript, Angular.
Додайте категорію до об'єктів у функції getAllBooks().
 */
/*
4.Реалізуйте функцію getBookTitlesByCategory(), яка на вхід повинна отримувати категорію та повертати масив найменувань книг, що належать зазначеній категорії.
 */
/*
5. Реалізуйте функцію logBookTitles(), яка повинна приймати масив рядків та виводити його в консоль. Викличте функції getBookTitlesByCategory() та logBookTitles().
 */
/*
6. Реалізуйте функцію getBookAuthorByIndex(), яка повинна приймати index книжки у масиві та повертати пару: назву книжки + автор. Використовуйте tuple для типу, що повертається. Викличте цю функцію.
Внесіть зміни до типу, що повертається функцією getBookAuthorByIndex() – додайте мітки: title, author для типу tuple.
 */
/*
7. Реалізуйте функцію calcTotalPages(), яка повинна підраховувати кількість сторінок книг у трьох бібліотеках міста, використовуючи такі дані:
[
{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
{ lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
{ lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
];
Для підрахунків використовуйте тип bigint.
 */
enum Category {JavaScript, CSS, HTML, TypeScript, Angular}
type Book = { id: number; title: string; author: string; available: boolean; category: Category };

function getAllBooks(): Book[] {
    const books: Book[]  =  [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}
console.log(getAllBooks());

function logFirstAvailable(books: Book[]): void {
    console.log(`Кількість книг у масиві: ${books.length}`);
    const firstBook= books.find(book=> book.available);
    console.log(firstBook ? `Назва першої доступної книги: ${firstBook.title}` : 'Відсутні доступні книги у масиві');
}
const booksArray: Book[] = getAllBooks();
logFirstAvailable(booksArray);

function getBookTitlesByCategory(books: Book[], category: Category): string[] {
    const newBooks = books.filter(book => book.category === category);
    return newBooks.map(book => book.title);
}

function logBookTitles(title: string[]): void {
    title.forEach(title => console.log(title));
}
const JavaScriptBooks: string[] = getBookTitlesByCategory(booksArray, Category.JavaScript);
console.log(`В категорію JavaScript входять такі книги: ${JavaScriptBooks}`);
logBookTitles(JavaScriptBooks);

function getBookAuthorByIndex(books: Book[], index: number): [title: string, author: string] {
    const book = books[index] || {title: 'немає книги', author: 'немає автора'};
    return [book.title, book.author];
}

const bookAuthor = getBookAuthorByIndex(booksArray, 1);
console.log(`Книга: ${bookAuthor[0]}, автор: ${bookAuthor[1]}`);

type Library = { lib: string; books: number; avgPagesPerBook: number };

const libraryAll: Library[] = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
];
function calcTotalPages(): bigint {
    let totalPages: bigint = BigInt(0);

    for(let i = 0; i < libraryAll.length; i++) {
        const library = libraryAll[i];
        const libraryTotalPages: bigint = BigInt(library.books) * BigInt(library.avgPagesPerBook);
        totalPages +=libraryTotalPages;
    }
    return  totalPages;
}
const resultPages: bigint = calcTotalPages();
console.log(resultPages);



